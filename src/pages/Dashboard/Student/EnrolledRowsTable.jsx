const EnrolledRowsTable = ({ singleClass, index }) => {
  const { image, className, instructor, price, status } = singleClass;
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
        <td className="text-green-700">{status}</td>
      </tr>
    </>
  );
};

export default EnrolledRowsTable;
