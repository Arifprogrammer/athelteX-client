import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  //* hooks
  const navigate = useNavigate();
  const { signInWithGoogle } = useContext(AuthContext);
  const { state } = useLocation();
  const from = state?.from?.pathname || "/";

  //* functions
  const logInWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        const user = {
          email: result.user.email,
          image: result.user.photoURL,
          name: result.user.displayName,
          role: "student",
          category: "trainee",
          classes: 0,
        };
        const addUser = async () => {
          const res = await fetch("http://localhost:5000/users", {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(user),
          });
          const data = await res.json();
          console.log(data);
          if (data.upsertedCount || data.matchedCount) {
            toast.success("Registration successful", {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
            setTimeout(() => {
              navigate(from, { replace: true });
            }, 1500);
          }
        };
        addUser();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <>
      <button
        type="submit"
        onClick={logInWithGoogle}
        className="btn bg-transparent text-black border-red-700 border-2 hover:text-white hover:bg-red-700 hover:border-0 gap-2 text-base lg:text-xl"
      >
        <FaGoogle /> <span>Google</span>
      </button>
    </>
  );
};

export default SocialLogin;
