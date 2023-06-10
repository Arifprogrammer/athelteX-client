/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import SocialLogin from "../../components/SocialLogin";

const SignIn = () => {
  //* hooks
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const { state } = useLocation();
  const from = state?.from?.pathname || "/";

  //* functions
  const onSubmit = (data) => {
    const { email, password } = data;
    signIn(email, password)
      .then((result) => {
        toast.success("You've signed in successfully", {
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
        }, 2000);
        reset();
      })
      .catch((error) => {
        console.log(error.message);
        if (error.message === "Firebase: Error (auth/wrong-password).") {
          setError("Your password is incorrect");
        }
      });
  };

  return (
    <>
      <section className="py-16 lg:pt-32">
        <div className="card card1 w-[95%] lg:w-[28%] bg-white mx-auto py-16 mt-12 rounded-sm shadow-md shadow-gray-700">
          <form
            className="card-body p-5 lg:p-8"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black font-semibold text-base">
                  Email*
                </span>
              </label>
              <input
                type="email"
                placeholder="Type your email"
                {...register("email", { required: true })}
                className="input input-bordered text-black font-semibold"
              />
              {errors.email?.type === "required" && (
                <p className="text-red-600 font-semibold mt-1">
                  Email is required
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black font-semibold text-base">
                  Password*
                </span>
              </label>
              <input
                type={showPassword ? "password" : "text"}
                placeholder="Type your password"
                {...register("password", { required: true })}
                className="input input-bordered text-black font-semibold"
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="text-xl ml-auto mr-7 -mt-8"
              >
                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </div>
              <label className="label mt-1">
                <a className="label-text-alt link link-hover text-slate-700 text-sm">
                  Forgot password?
                </a>
              </label>

              {errors.password?.type === "required" && (
                <p className="text-red-600 font-semibold mt-1">
                  Password is required
                </p>
              )}
              <p className="text-red-600 font-semibold mt-1">{error}</p>
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn bg-black text-white border-0 hover:bg-white hover:text-red-700 hover:border-2 hover:border-red-700 text-base lg:text-xl"
              >
                Login
              </button>
              <div className="flex items-center my-8">
                <div className="border-[1px] border-slate-700 w-full"></div>
                <p className="px-4 font-bold">Or</p>
                <div className="border-[1px] border-slate-700 w-full"></div>
              </div>
              <SocialLogin />
            </div>
            <p className="text-center font-semibold">
              Don't have an account?{" "}
              <Link
                to="/register"
                state={{ from: state?.from }}
                className="text-red-700 font-bold"
              >
                Register
              </Link>
            </p>
          </form>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default SignIn;
