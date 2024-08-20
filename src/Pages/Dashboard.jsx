import { useSelector, useDispatch } from "react-redux";
import Widgets from "@/components/Widgets";
import Header from "@/components/Header";
import NewWidgetModal from "@/components/NewWidgetModal";
import {
  setModalOpen,
  selectCategory,
  deleteWidget,
} from "@/redux/categorySlice";
import { MdDeleteForever } from "react-icons/md";
import AddBtn from "../ui/AddBtn";
1;
export default function Dashboard() {
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.categories.categories);

  const handleAddWidgetClick = (index) => {
    dispatch(selectCategory(index));
    dispatch(setModalOpen(true));
  };

  const handleDeleteWidget = (categoryIndex, widgetIndex) => {
    dispatch(deleteWidget({ categoryIndex, widgetIndex }));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Header />
      <main className="mt-4 space-y-4">
        {categories.map((category, index) => (
          <section key={index} className="p-4 bg-white rounded-lg shadow">
            <h2 className="text-lg font-semibold">{category.name}</h2>
            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {category.widgets.map((widget, idx) => (
                <div
                  key={idx}
                  className="relative p-4 bg-gray-50 rounded-lg shadow"
                >
                  <Widgets widget={widget} />
                  <button
                    onClick={() => handleDeleteWidget(index, idx)}
                    className="absolute top-2 right-2 text-red-500 p-2 rounded-full bg-red-100"
                  >
                    <MdDeleteForever />
                  </button>
                </div>
              ))}
              <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg shadow">
                <AddBtn
                  onClick={() => handleAddWidgetClick(index)}
                  className="px-4 py-2 text-sm font-semibold text-gray-600 bg-gray-200"
                  name="Add widget"
                />
              </div>
            </div>
          </section>
        ))}
      </main>
      <NewWidgetModal />
    </div>
  );
}
