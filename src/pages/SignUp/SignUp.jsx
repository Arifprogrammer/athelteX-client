/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { AuthContext } from "../../../AuthProvider/AuthProvider";

const SignUp = () => {
  //* hooks
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  /* const { signIn, signInWithGoogle } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const { state } = useLocation();
  const from = state?.from?.pathname || "/"; */

  //* functions
  const onSubmit = (data) => console.log(data);
  /* const handleSignin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    setError("");
    signIn(email, password)
      .then((result) => {
        // console.log(result.user);
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
        e.target.reset();
      })
      .catch((error) => {
        console.log(error.message);
        if (error.message === "Firebase: Error (auth/wrong-password).") {
          setError("Your password is incorrect");
        }
      });
  }; */

  /* const logInWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        // console.log(result.user);
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
        }, 1500);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }; */

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
                  Name*
                </span>
              </label>
              <input
                type="text"
                placeholder="Type your name"
                {...register("name", { required: true })}
                className="input input-bordered text-black font-semibold"
              />
              {errors.name?.type === "required" && (
                <p className="text-red-600 font-semibold mt-1">
                  Name is required
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black font-semibold text-base">
                  Photo URL*
                </span>
              </label>
              <input
                type="text"
                placeholder="Type your photo url"
                {...register("photo", { required: true })}
                className="input input-bordered text-black font-semibold"
              />
              {errors.photo?.type === "required" && (
                <p className="text-red-600 font-semibold mt-1">
                  Photo URL is required
                </p>
              )}
            </div>
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
                type="password"
                placeholder="Type your password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
                className="input input-bordered text-black font-semibold"
              />

              {errors.password?.type === "required" && (
                <p className="text-red-600 font-semibold mt-1">
                  Password is required
                </p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600">Password must be 6 characters</p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600">
                  Password must have one Uppercase one lower case, one number
                  and one special character.
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black font-semibold text-base">
                  Confirm Password*
                </span>
              </label>
              <input
                type="password"
                placeholder="Re-type password "
                {...register("confirmPassword", {
                  required: true,
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
                })}
                className="input input-bordered text-black font-semibold"
              />
              {errors.confirmPassword && (
                <span className="text-red-600 font-semibold mt-1">
                  {errors.confirmPassword.message}
                </span>
              )}
              {errors.confirmPassword?.type === "required" && (
                <p className="text-red-600 font-semibold mt-1">
                  Confirm password is required
                </p>
              )}
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn bg-black text-white border-0 hover:bg-white hover:text-red-700 hover:border-2 hover:border-red-700 text-base lg:text-xl"
              >
                Register
              </button>
              <div className="flex items-center my-8">
                <div className="border-[1px] border-slate-700 w-full"></div>
                <p className="px-4 font-bold">Or</p>
                <div className="border-[1px] border-slate-700 w-full"></div>
              </div>
              <button
                type="submit"
                className="btn bg-transparent text-black border-red-700 border-2 hover:text-white hover:bg-red-700 hover:border-0 gap-2 text-base lg:text-xl"
              >
                <FaGoogle /> <span>Google</span>
              </button>
            </div>
            <p className="text-center font-semibold">
              Already have an account?{" "}
              <Link
                to="/login"
                //   state={{ from: state?.from }}
                className="text-red-700 font-bold"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </section>
      {/* <ToastContainer /> */}
    </>
  );
};

export default SignUp;
