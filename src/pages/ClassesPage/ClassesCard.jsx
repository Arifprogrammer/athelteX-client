import { useContext } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useStudent from "../../hooks/useStudent";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const ClassesCard = ({ singleClass }) => {
  //* hooks
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  //* customhooks
  const [isStudent] = useStudent();
  const [axiosSecure] = useAxiosSecure();

  //* functions
  const handleSelectedClasses = (singleClass) => {
    if (user && user?.email) {
      const addSelectedClasses = async () => {
        const res = await axiosSecure.post(`/selected`, singleClass);
        console.log(res.data);
        if (res.data.insertedId) {
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
            title: "Selected",
          });
          setTimeout(() => {
            navigate("/dashboard/selected");
          }, 1500);
        }
      };
      addSelectedClasses();
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You have to login first!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };

  const {
    // eslint-disable-next-line no-unused-vars
    _id,
    name,
    image,
    enrolled,
    category,
    role,
    instructor,
    email,
    seats,
    price,
  } = singleClass;
  return (
    <>
      <div className="relative p-6 bg-white rounded-lg">
        <div className="lg:h-[198px] overflow-hidden rounded-lg">
          <img
            src={image}
            alt=""
            className="w-full lg:grayscale-0 lg:hover:grayscale lg:transition lg:duration-200 lg:hover:scale-125"
          />
        </div>
        <p className="px-3 py-1 bg-red-700 bg-opacity-70 text-white rounded-3xl w-fit absolute top-9 right-8 text-sm">
          Total Students: {enrolled}
        </p>
        <h1 className="mt-4 text-xl font-bold text-center lg:text-left">
          {name}
        </h1>
        <p className="font-semibold text-gray-600 text-center lg:text-left">
          {category} {role}
        </p>
        <p className="font-semibold text-gray-600 text-center lg:text-left">
          {instructor}
        </p>
        <p className="font-semibold text-gray-600 text-center lg:text-left lowercase">
          {email}
        </p>
        <p
          className={` text-center lg:text-left ${
            seats === 0
              ? "font-bold text-red-700"
              : "font-semibold text-gray-600"
          }`}
        >
          Available seats:{" "}
          <span className="text-red-700 font-bold text-xl">{seats}</span>
        </p>
        <p className="font-semibold text-gray-600 text-center lg:text-left">
          Price: ${" "}
          <span className="text-red-700 font-bold text-xl">{price}</span>
        </p>
        <div className="mt-8 mx-auto w-fit">
          <button
            onClick={() => handleSelectedClasses(singleClass)}
            className={`py-3 px-8 font-semibold -skew-x-12 ${
              seats === 0 || !isStudent
                ? "bg-red-400 text-gray-200"
                : "text-white  bg-red-700 hover:bg-black lg:transition lg:duration-200"
            } `}
            disabled={(seats === 0 && true) || !isStudent}
          >
            Select
          </button>
        </div>
      </div>
    </>
  );
};

export default ClassesCard;
