import { useDispatch, useSelector } from "react-redux";
import {
  setModalOpen,
  setNewWidgetName,
  addWidget,
} from "@/redux/categorySlice";

export default function NewWidgetModal() {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.categories.isModalOpen);
  const newWidgetName = useSelector((state) => state.categories.newWidgetName);

  if (!isModalOpen) return null;

  const handleModalClose = () => {
    dispatch(setModalOpen(false));
    dispatch(setNewWidgetName(""));
  };

  const handleNameChange = (e) => {
    dispatch(setNewWidgetName(e.target.value));
  };

  const handleModalConfirm = () => {
    dispatch(addWidget());
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg shadow-lg w-1/3">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Add a Widget</h2>
          <button onClick={handleModalClose} className="text-gray-600">
            &times;
          </button>
        </div>
        <div className="mb-4">
          <label
            htmlFor="widgetName"
            className="block text-sm font-medium text-gray-700"
          >
            Widget Name
          </label>
          <input
            type="text"
            id="widgetName"
            value={newWidgetName}
            placeholder="Enter widget name..."
            onChange={handleNameChange}
            className="mt-1 p-2 w-full border outline-none rounded-md transition duration-200 focus:border-[#7C3AED]"
          />
        </div>
        <div className="flex justify-end space-x-2">
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
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
