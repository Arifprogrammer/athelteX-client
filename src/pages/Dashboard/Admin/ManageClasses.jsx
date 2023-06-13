import { useState } from "react";
import useClasses from "../../../hooks/useClasses";
import FeedbackModal from "./FeedbackModal";
import MngClsRowsTable from "./MngClsRowsTable";

const ManageClasses = () => {
  //* hooks
  let [isOpen, setIsOpen] = useState(false);
  const [specificClass, setSpecificClass] = useState({});
  //* custom hooks
  const [classes, , refetch] = useClasses();
  const reverseClasses = [...classes].reverse();

  //*functions
  const handleDeny = (specificClass) => {
    setSpecificClass(specificClass);
    setIsOpen(true);
  };

  return (
    <div className="overflow-x-auto w-full">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Image</th>
            <th>Class Name</th>
            <th>Instructor</th>
            <th>Email</th>
            <th>Available Seats</th>
            <th>Enrolled Students</th>
            <th>Price</th>
            <th>Status</th>
            <th>Action</th>
            <th>Feedback</th>
          </tr>
        </thead>
        <tbody>
          {reverseClasses &&
            reverseClasses?.map((singleClass, index) => (
              <MngClsRowsTable
                key={singleClass._id}
                singleClass={singleClass}
                index={index}
                refetch={refetch}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                handleDeny={handleDeny}
              />
            ))}
        </tbody>
      </table>
      {reverseClasses.length === 0 && (
        <>
          <p className="mt-10 text-red-600 font-bold text-lg text-center">
            You have not enrolled any classes yet !!!
          </p>
        </>
      )}
      {specificClass && (
        <FeedbackModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          specificClass={specificClass}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default ManageClasses;
