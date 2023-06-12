const HistoryRowsTable = ({ singleClass, index }) => {
  const { image, className, instructor, price, email, transectionId } =
    singleClass;
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
        <td>{className}</td>
        <td>{instructor}</td>
        <td className="pl-5">$ {price}</td>
        <td>{email}</td>
        <td className="text-green-700">
          Payment <br /> successful
        </td>
        <td className="text-gray-500">{transectionId}</td>
      </tr>
    </>
  );
};

export default HistoryRowsTable;
