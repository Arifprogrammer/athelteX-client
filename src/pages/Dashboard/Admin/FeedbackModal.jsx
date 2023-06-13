import { Fragment, useContext, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

export default function FeedbackModal({
  isOpen,
  setIsOpen,
  specificClass,
  refetch,
}) {
  //* hooks
  const cancelButtonRef = useRef(null);
  const { user } = useContext(AuthContext);

  //* customhooks
  const [axiosSecure] = useAxiosSecure();

  //* functions
  const sendFeedback = (e) => {
    e.preventDefault();
    const feedback = e.target.feedback.value;
    const denyClassData = { feedback, id: specificClass._id, status: "denied" };
    const denyClass = async () => {
      const res = await axiosSecure.patch(
        `/deny_class?email=${user?.email}`,
        denyClassData
      );
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire("Denied!", "The class has been denied.", "success");
        setIsOpen(false);
      }
    };
    denyClass();
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setIsOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900 text-center"
                      >
                        Give Your Feedback
                      </Dialog.Title>
                      <div className="mt-3">
                        <form onSubmit={sendFeedback}>
                          <textarea
                            name="feedback"
                            className="textarea textarea-primary bg-transparent w-full min-h-[10rem]"
                            placeholder="Type here..."
                          ></textarea>
                          <div className="text-center mt-5">
                            <button
                              type="submit"
                              className="inline-flex w-full justify-center rounded-md bg-cyan-400 px-8 py-2 text-sm font-semibold text-black shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                            >
                              Send
                            </button>
                            <button
                              type="button"
                              onClick={() => setIsOpen(false)}
                              className="inline-flex w-full justify-center rounded-md bg-red-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                            >
                              Cancel
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
