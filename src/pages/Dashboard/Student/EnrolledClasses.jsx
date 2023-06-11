import useEnrolledClasses from "../../../hooks/useEnrolledClasses";
import EnrolledRowsTable from "./EnrolledRowsTable";

const EnrolledClasses = () => {
  //* customhooks
  const [enrolledClasses] = useEnrolledClasses();
  console.log(enrolledClasses);
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
            {enrolledClasses?.map((singleClass, index) => (
              <EnrolledRowsTable
                key={enrolledClasses._id}
                singleClass={singleClass}
                index={index}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default EnrolledClasses;
