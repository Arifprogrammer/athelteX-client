import useEnrolledClasses from "../../../hooks/useEnrolledClasses";
import EnrolledRowsTable from "./EnrolledRowsTable";

const EnrolledClasses = () => {
  //* customhooks
  const [enrolledClasses] = useEnrolledClasses();
  return (
    <>
      <div className="overflow-x-auto w-full px-20">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Class Name</th>
              <th>Instructor</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {enrolledClasses &&
              enrolledClasses?.map((singleClass, index) => (
                <EnrolledRowsTable
                  key={singleClass._id}
                  singleClass={singleClass}
                  index={index}
                />
              ))}
          </tbody>
        </table>
        {enrolledClasses.length === 0 && (
          <>
            <p className="mt-10 text-red-600 font-bold text-lg text-center">
              You have not enrolled any classes yet !!!
            </p>
          </>
        )}
      </div>
    </>
  );
};

export default EnrolledClasses;
