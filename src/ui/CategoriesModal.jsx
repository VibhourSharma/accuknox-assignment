import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { selectCategory, toggleWidgetVisibility } from "@/redux/categorySlice";
import { IoMdCloseCircleOutline } from "react-icons/io";

const CategoriesModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const selectedCategoryId = useSelector(
    (state) => state.categories.selectedCategoryId
  );
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    dispatch(selectCategory(categoryId));
  };

  const handleWidgetToggle = (categoryId, widgetId) => {
    dispatch(toggleWidgetVisibility({ categoryId, widgetId }));
  };

  const selectedCategoryData = categories.find(
    (cat) => cat.id === selectedCategory
  );

  return isOpen ? (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10">
      <div className="bg-white rounded-lg shadow-lg p-4 w-3/4 md:w-1/2 h-3/4 flex flex-col">
        <button
          className="self-end text-red-500 text-sm font-bold mb-2"
          onClick={onClose}
        >
          <IoMdCloseCircleOutline size={28} />
        </button>
        <div className="flex flex-grow">
          <div className="w-1/3 md:w-1/4 bg-gray-100 rounded-lg p-2 overflow-y-auto">
            {categories.length === 0 ? (
              <p className="text-gray-600">No categories available</p>
            ) : (
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li
                    key={category.id}
                    className={`cursor-pointer p-2 rounded ${
                      selectedCategory === category.id
                        ? "bg-purple-200"
                        : "bg-gray-100"
                    }`}
                    onClick={() => handleCategorySelect(category.id)}
                  >
                    {category.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="w-2/3 md:w-3/4 pl-4 bg-gray-50 rounded-lg p-4 overflow-y-auto">
            {selectedCategory ? (
              <>
                <h2 className="text-lg font-semibold mb-4">
                  Widgets in{" "}
                  {selectedCategoryData ? selectedCategoryData.name : ""}
                </h2>
                {selectedCategoryData?.widgets.length === 0 ? (
                  <p className="text-gray-600">No widgets available</p>
                ) : (
                  <ul className="space-y-2">
                    {selectedCategoryData.widgets.map((widget) => (
                      <li
                        key={widget.id}
                        className="flex items-center space-x-2"
                      >
                        <input
                          type="checkbox"
                          checked={!widget.hidden}
                          onChange={() =>
                            handleWidgetToggle(selectedCategory, widget.id)
                          }
                        />
                        <span>{widget.title}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <p className="text-gray-600">Select a category to view widgets</p>
            )}
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default CategoriesModal;
