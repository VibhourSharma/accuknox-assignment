import { MdDeleteForever } from "react-icons/md";

const DeleteBtn = ({ onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`text-red-500 p-2 rounded-full bg-red-100 ${className}`}
    >
      <MdDeleteForever />
    </button>
  );
};

export default DeleteBtn;
