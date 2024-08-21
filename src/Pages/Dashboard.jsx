import { useSelector, useDispatch } from "react-redux";
import Widgets from "@/components/Widgets";
import Header from "@/components/Header";
import NameModal from "@/ui/NameModal";
import {
  setWidgetModalOpen,
  selectCategory,
  deleteWidget,
  deleteCategory,
} from "@/redux/categorySlice";
import AddBtn from "../ui/AddBtn";
import DeleteBtn from "../ui/DeleteBtn";

export default function Dashboard() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const searchQuery = useSelector((state) => state.categories.searchQuery);
  const isWidgetModalOpen = useSelector(
    (state) => state.categories.isWidgetModalOpen
  );

  const handleAddWidgetClick = (categoryId) => {
    dispatch(selectCategory(categoryId));
    dispatch(setWidgetModalOpen(true));
  };

  const handleDeleteWidget = (categoryId, widgetId) => {
    dispatch(deleteWidget({ categoryId, widgetId }));
  };

  const handleDeleteCategory = (categoryId) => {
    dispatch(deleteCategory(categoryId));
  };

  const filteredCategories = categories.filter((category) => {
    return (
      category.widgets.length === 0 ||
      category.widgets.some((widget) =>
        widget?.title?.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  });

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Header />
      <main className="mt-4 space-y-4">
        {filteredCategories.length === 0 ? (
          <p className="text-center p-2 text-gray-500">No results found ⚠️</p>
        ) : (
          filteredCategories.map((category) => (
            <section
              key={category.id}
              className="p-4 bg-white rounded-lg shadow"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">{category.name}</h2>
                <DeleteBtn onClick={() => handleDeleteCategory(category.id)} />
              </div>
              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {category.widgets
                  .filter((widget) => !widget.hidden)
                  .map((widget) => (
                    <div
                      key={widget.id}
                      className="relative p-4 bg-gray-50 rounded-lg shadow"
                    >
                      <Widgets widget={widget} />
                      <DeleteBtn
                        onClick={() =>
                          handleDeleteWidget(category.id, widget.id)
                        }
                        className="absolute top-2 right-2"
                      />
                    </div>
                  ))}
                <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg shadow">
                  <div className="min-w-64 min-h-64 flex items-center justify-center">
                    <AddBtn
                      onClick={() => handleAddWidgetClick(category.id)}
                      className="px-4 py-2 text-sm font-semibold text-gray-600 bg-gray-200"
                      name="Add widget"
                    />
                  </div>
                </div>
              </div>
            </section>
          ))
        )}
      </main>
      <NameModal
        heading="Widget"
        isOpen={isWidgetModalOpen}
        onClose={() => dispatch(setWidgetModalOpen(false))}
      />
    </div>
  );
}
