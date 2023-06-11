import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useParams } from "react-router-dom";
import useSelectedClasse from "../../hooks/useSelectedClasse";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
  //* hooks
  const { id } = useParams();
  //* customhooks
  const [selectedClasses] = useSelectedClasse();
  const specificClass = selectedClasses.find(
    (singleClass) => singleClass._id === id
  );

  return (
    <>
      {specificClass && (
        <Elements stripe={stripePromise}>
          <CheckoutForm specificClass={specificClass} />
        </Elements>
      )}
    </>
  );
};

export default Payment;
