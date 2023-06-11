const RowsTable = ({ singleClass, index }) => {
  const { name, image, seats, enrolled } = singleClass;
  return (
    <>
      <tr>
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
        <td className="pl-12">{seats}</td>
        <td className="pl-14">{enrolled}</td>
        <td>
          <button className="px-3 border-2 border-red-700 text-red-700 hover:text-white hover:bg-red-700 rounded-3xl">
            Delete
          </button>
        </td>
        <td>
          <button className="px-3 border-2 border-purple-500 text-purple-500 hover:text-white hover:bg-purple-700 hover:border-purple-700 rounded-3xl">
            Pay
          </button>
        </td>
      </tr>
    </>
  );
};

export default RowsTable;
