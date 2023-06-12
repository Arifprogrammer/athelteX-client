import { useForm } from "react-hook-form";
import Title from "../../../components/Title";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";
const AddClass = () => {
  //* hooks
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  //* customhooks
  const [axiosSecure] = useAxiosSecure();

  //* functions
  const onSubmit = (data) => {
    const newClass = {
      ...data,
      seats: parseInt(data.seats),
      price: parseFloat(data.price),
      status: "pending...",
      feedback: "",
      enrolled: 0,
    };
    const addNewClasses = async () => {
      const res = await axiosSecure.post(`/new_class`, newClass);
      reset;
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
          navigate("/dashboard/my_classes");
        }, 1500);
      }
    };
    addNewClasses();
  };

  return (
    <>
      <section>
        <Title title="Add A New Class" />
        <div className="card card1 w-[95%] lg:w-4/5 bg-white mx-auto py-4 mt-12 rounded-sm shadow-md shadow-gray-700">
          <form
            className="card-body px-20 py-12  grid grid-cols-1 lg:grid-cols-2 gap-x-8 "
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black font-semibold text-base">
                  Class Name*
                </span>
              </label>
              <input
                type="text"
                placeholder="Type class name"
                {...register("name", { required: true })}
                className="input input-bordered text-black font-semibold"
              />
              {errors.name?.type === "required" && (
                <p className="text-red-600 font-semibold mt-2">
                  Class Name field is required
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black font-semibold text-base">
                  Class Image*
                </span>
              </label>
              <input
                type="url"
                placeholder="Type class's image url"
                {...register("image", { required: true })}
                className="input input-bordered text-black font-semibold"
              />
              {errors.image?.type === "required" && (
                <p className="text-red-600 font-semibold mt-2">
                  Class Image field is required
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black font-semibold text-base">
                  Instructor*
                </span>
              </label>
              <input
                defaultValue={user?.displayName}
                readOnly
                {...register("instructor", { required: true })}
                className="input input-bordered text-gray-500 font-semibold"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black font-semibold text-base">
                  Instructor Email*
                </span>
              </label>
              <input
                defaultValue={user?.email}
                readOnly
                {...register("email", { required: true })}
                className="input input-bordered text-gray-500 font-semibold"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black font-semibold text-base">
                  Available Seats*
                </span>
              </label>
              <input
                type="text"
                placeholder="Type available seats number"
                {...register("seats", {
                  required: true,
                  min: 0,
                  pattern: /(?=.*[0-9])/,
                })}
                className="input input-bordered text-black font-semibold"
              />
              {errors.seats?.type === "required" && (
                <p className="text-red-600 font-semibold mt-2">
                  Available seats field is required
                </p>
              )}
              {errors.seats?.type === "pattern" && (
                <p className="text-red-600 font-semibold mt-2">
                  Available seats should be in number.
                </p>
              )}
              {errors.seats?.type === "min" && (
                <p className="text-red-600 font-semibold mt-2">
                  Price should be in positive number.
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black font-semibold text-base">
                  Price*
                </span>
              </label>
              <input
                type="text"
                placeholder="$"
                {...register("price", {
                  required: true,
                  min: 0,
                  pattern: /(?=.*[0-9])/,
                })}
                className="input input-bordered text-black font-semibold"
              />
              {errors.price?.type === "required" && (
                <p className="text-red-600 font-semibold mt-2">
                  Price is required
                </p>
              )}
              {errors.price?.type === "pattern" && (
                <p className="text-red-600 font-semibold mt-2">
                  Price should be in number.
                </p>
              )}
              {errors.price?.type === "min" && (
                <p className="text-red-600 font-semibold mt-2">
                  Price should be in positive number.
                </p>
              )}
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn bg-green-700 text-white border-0 hover:bg-black  text-base lg:text-xl w-fit lg:transition lg:duration-200"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default AddClass;
