import { IoMdAddCircle } from "react-icons/io";

export default function AddBtn({ className, name, onClick }) {
  return (
    <button
      className={`${className} rounded-md flex items-center gap-1`}
      onClick={onClick}
    >
      <IoMdAddCircle />
      {name}
    </button>
  );
}
