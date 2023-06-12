import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Title from "../../components/Title";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CheckoutForm = ({ specificClass, refetch }) => {
  //* hooks
  const { user } = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();
  const [axiosSecure] = useAxiosSecure();
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [process, setProcess] = useState(false);
  const navigate = useNavigate();
  //* variables
  const price = specificClass.price;

  //* functions
  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    // Use your card Element with other Stripe.js APIs
    // eslint-disable-next-line no-unused-vars
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setError(error.message);
      return;
    } else {
      setError("");
    }
    setProcess(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displaName || "anonymous",
            email: user?.email || "anonymous",
          },
        },
      });
    if (confirmError) {
      // console.log("confirm error", confirmError);
      setError(confirmError.message);
      setProcess(false);
      return;
    }
    // console.log("Payment intent-----------------", paymentIntent);
    if (paymentIntent.status === "succeeded") {
      const payment = {
        selectedClassId: specificClass._id,
        classId: specificClass.classId,
        email: user?.email,
        name: user?.displayName,
        image: specificClass.image,
        instructor: specificClass.instructor,
        className: specificClass.name,
        price: specificClass.price,
        status: "enrolled",
        transectionId: paymentIntent.id,
      };
      const addData = async () => {
        const res = await axiosSecure.post(
          `/payment?email=${user?.email}`,
          payment
        );
        // console.log(res.data);
        if (
          res.data.deleteResult.deletedCount > 0 &&
          res.data.insertResult.insertedId &&
          res.data.updateResult.modifiedCount
        ) {
          setProcess(false);
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: "success",
            title: "Payment succesfull",
          });
          refetch();
          setTimeout(() => {
            navigate("/dashboard/enrolled");
          }, 1500);
        }
      };
      addData();
    }
  };

  //* Effects
  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [price, axiosSecure]);
  return (
    <>
      <div>
        <Title title="Please proceed your payment" />
      </div>
      <form onSubmit={handleSubmit} className="w-1/2 mx-auto space-y-8">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="text-center">
          <button
            type="submit"
            disabled={!stripe || process || !clientSecret}
            className={`font-semibold border-b-4 border-t-4 border-purple-700 px-6 py-1 rounded-xl ${
              process
                ? "bg-purple-300 border-purple-300 text-gray-600"
                : "  hover:border-t-purple-300 hover:bg-purple-300 text-purple-700 hover:text-black lg:transition lg:duration-200"
            }`}
          >
            Pay
          </button>
        </div>
      </form>
      <p className="text-red-600 mt-8 text-center font-semibold text-lg">
        {error && error}
      </p>
      <p className="text-purple-700 mt-8 text-center font-semibold text-lg">
        {process && "please wait..."}
      </p>
    </>
  );
};

export default CheckoutForm;
