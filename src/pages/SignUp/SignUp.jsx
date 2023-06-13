/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { updateProfile } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import SocialLogin from "../../components/SocialLogin";

const SignUp = () => {
  //* hooks
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();
  const { signUp } = useContext(AuthContext);
  const navigate = useNavigate();
  const { state } = useLocation();
  const from = state?.from?.pathname || "/";

  //* functions
  const profileUpdate = (user, name, photo) => {
    return updateProfile(user, {
      displayName: name,
      photoURL: photo,
    });
  };

  const onSubmit = (data) => {
    const { email, password, photo: image, name } = data;
    signUp(email, password)
      .then((result) => {
        profileUpdate(result.user, name, image)
          .then(() => {
            const user = {
              email,
              image,
              name,
              role: "student",
              category: "trainee",
              classes: 0,
            };
            const addUser = async () => {
              const res = await fetch(
                "https://athletex-com-server.vercel.app/users",
                {
                  method: "PUT",
                  headers: { "content-type": "application/json" },
                  body: JSON.stringify(user),
                }
              );
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
                reset();
                setTimeout(() => {
                  navigate(from, { replace: true });
                }, 2000);
              }
            };
            addUser();
          })
          .catch((error) => console.log(error.message));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <section className="py-16 lg:pt-32">
        <div className="card card1 w-[95%] lg:w-[28%] bg-white mx-auto py-8 mt-12 rounded-sm shadow-md shadow-gray-700">
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
                placeholder="Re-type your password "
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
              <SocialLogin />
            </div>
            <p className="text-center font-semibold">
              Already have an account?{" "}
              <Link
                to="/login"
                state={{ from: state?.from }}
                className="text-red-700 font-bold"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default SignUp;
