import useEnrolledClasses from "../../../hooks/useEnrolledClasses";
import HistoryRowsTable from "./HistoryRowsTable";

const PaymentHistory = () => {
  //* customhooks
  const [enrolledClasses] = useEnrolledClasses();
  const reverseEnrolledClasses = [...enrolledClasses].reverse();

  return (
    <>
      <div className="overflow-x-auto w-full">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Class Name</th>
              <th>Instructor</th>
              <th>Amount</th>
              <th>Email</th>
              <th>Status</th>
              <th>Date & Time</th>
              <th>Tansiction Id</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {reverseEnrolledClasses &&
              reverseEnrolledClasses?.map((singleClass, index) => (
                <HistoryRowsTable
                  key={singleClass._id}
                  singleClass={singleClass}
                  index={index}
                />
              ))}
          </tbody>
        </table>
        {reverseEnrolledClasses.length === 0 && (
          <>
            <p className="mt-10 text-red-600 font-bold text-lg text-center">
              You have no payment history !!!
            </p>
          </>
        )}
      </div>
    </>
  );
};

export default PaymentHistory;
