import { useDispatch, useSelector } from "react-redux";
import {
  setNewWidgetName,
  setNewCategoryName,
  addWidget,
  addCategory,
} from "@/redux/CategorySlice";
import { IoMdCloseCircleOutline } from "react-icons/io";

export default function NameModal({ heading, isOpen, onClose }) {
  const dispatch = useDispatch();
  const newWidgetName = useSelector((state) => state.categories.newWidgetName);
  const newCategoryName = useSelector(
    (state) => state.categories.newCategoryName
  );

  if (!isOpen) return null;

  const handleModalClose = () => {
    onClose();
    if (heading === "Widget") {
      dispatch(setNewWidgetName(""));
    } else if (heading === "Category") {
      dispatch(setNewCategoryName(""));
    }
  };

  const handleNameChange = (e) => {
    if (heading === "Widget") {
      dispatch(setNewWidgetName(e.target.value));
    } else if (heading === "Category") {
      dispatch(setNewCategoryName(e.target.value));
    }
  };

  const handleModalConfirm = () => {
    if (heading === "Category") {
      dispatch(addCategory());
    } else if (heading === "Widget") {
      dispatch(addWidget());
    }
    handleModalClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
      <div className="bg-white p-4 rounded-lg shadow-lg w-1/3">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Add a {heading}</h2>
          <button onClick={handleModalClose} className="text-gray-600">
            <IoMdCloseCircleOutline size={24} />
          </button>
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            {heading} Name
          </label>
          <input
            type="text"
            value={heading === "Widget" ? newWidgetName : newCategoryName}
            onChange={handleNameChange}
            placeholder={`add ${heading.toLowerCase()} name...`}
            className="w-full border border-gray-300 p-2 outline-none transition-all duration-300 rounded-md focus:border-purple-600"
          />
        </div>
        <div className="mt-4 flex justify-end space-x-2">
          <button
            onClick={handleModalClose}
            className="px-4 py-2 text-sm font-semibold text-gray-600 bg-gray-200 rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={handleModalConfirm}
            className="px-4 py-2 text-sm font-semibold text-white bg-violet-600 rounded-md"
          >
            Add {heading}
          </button>
        </div>
      </div>
    </div>
  );
}
