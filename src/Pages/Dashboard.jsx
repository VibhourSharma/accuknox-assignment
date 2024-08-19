import Widgets from "../components/Widgets";
import Header from "../components/Header";
import widgetsData from "@/data/widgetsData.json";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Header />
      <main className="mt-4 space-y-4">
        {widgetsData.categories.map((category) => (
          <section key={category.id} className="p-4 bg-white rounded-lg shadow">
            <h2 className="text-lg font-semibold">{category.name}</h2>
            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {category.widgets.map((widget) => (
                <Widgets key={widget.id} widget={widget} />
              ))}
              <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg shadow">
                <button className="px-4 py-2 text-sm font-semibold text-gray-600 bg-gray-200 rounded-md">
                  + Add Widget
                </button>
              </div>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
