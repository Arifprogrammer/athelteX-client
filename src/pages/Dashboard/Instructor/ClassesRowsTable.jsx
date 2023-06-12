const ClassesRowsTable = ({ singleClass, index }) => {
  const { image, name, seats, enrolled, price, status, feedback } = singleClass;
  return (
    <>
      <tr className="font-bold">
        <th>{index + 1}</th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={image} alt="class picture" />
              </div>
            </div>
          </div>
        </td>
        <td>{name}</td>
        <td className="pl-11">{seats}</td>
        <td className="pl-11">{enrolled}</td>
        <td className="pl-5">$ {price}</td>
        <td
          className={`${
            (status === "approved" && "text-green-700") ||
            (status === "pending..." && "text-blue-700") ||
            (status === "denied" && "text-red-600")
          }`}
        >
          {status}
        </td>
        <td>{feedback.length < 1 ? "No feedback" : feedback}</td>
      </tr>
    </>
  );
};

export default ClassesRowsTable;
