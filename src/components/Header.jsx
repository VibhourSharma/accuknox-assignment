import { useDispatch, useSelector } from "react-redux";
import AddBtn from "../ui/AddBtn";
import NameModal from "../ui/NameModal";
import {
  selectCategory,
  setCategoryModalOpen,
  setSearchQuery,
} from "../redux/CategorySlice";

const Header = () => {
  const dispatch = useDispatch();
  const isCategoryModalOpen = useSelector(
    (state) => state.categories.isCategoryModalOpen
  );

  const handleAddCategoryClick = () => {
    dispatch(setCategoryModalOpen(true));
    dispatch(selectCategory(null));
  };

  return (
    <header className="flex items-center justify-between p-4 bg-white shadow">
      <div className="flex items-center space-x-2">
        <span className="text-gray-800 font-bold text-lg">Dashboard 24</span>
      </div>
      <div className="flex items-center space-x-2">
        <div className="relative">
          <label htmlFor="Search" className="sr-only">
            Search
          </label>
          <input
            type="text"
            id="Search"
            placeholder="Search for widget..."
            className="rounded-md border-gray-200 py-2.5 px-4 shadow-sm sm:text-sm border outline-none transition-all duration-200 focus:border-purple-600"
            onChange={(e) => dispatch(setSearchQuery(e.target.value))}
          />
        </div>
        <AddBtn
          className="px-4 py-2 text-sm font-semibold text-white bg-purple-600"
          name="Add category"
          onClick={handleAddCategoryClick}
        />
        <AddBtn
          className="px-4 py-2 text-sm font-semibold text-gray-600 bg-gray-200 rounded-md"
          name="Categories"
        />
        <NameModal
          heading="Category"
          isOpen={isCategoryModalOpen}
          onClose={() => dispatch(setCategoryModalOpen(false))}
        />
      </div>
    </header>
  );
};

export default Header;
