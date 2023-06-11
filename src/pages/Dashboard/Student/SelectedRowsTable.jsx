import { Link } from "react-router-dom";

const SelectedRowsTable = ({ singleClass, index, handleDeleteData }) => {
  const { _id, name, image, seats, enrolled, price } = singleClass;
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
        <td className="pl-12">{seats}</td>
        <td className="pl-14">{enrolled}</td>
        <td className="pl-5">$ {price}</td>
        <td>
          <button
            className="px-3 border-2 border-red-700 text-red-700 hover:text-white hover:bg-red-700 rounded-3xl"
            onClick={() => handleDeleteData(_id)}
          >
            Delete
          </button>
        </td>
        <td>
          <Link to={`/dashboard/payment/${_id}`}>
            <button className="px-3 border-2 border-purple-700 text-purple-700 hover:text-white hover:bg-purple-700 hover:border-purple-700 rounded-3xl">
              Pay
            </button>
          </Link>
        </td>
      </tr>
    </>
  );
};

export default SelectedRowsTable;
