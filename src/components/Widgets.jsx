import PieCharts from "@/components/Charts/PieCharts";
import BarCharts from "@/components/Charts/BarCharts";
import LineCharts from "@/components/Charts/LineCharts";
import NoDataChart from "./Charts/NoDataChart";

export default function Widget({ widget }) {
  const renderChart = () => {
    switch (widget.type) {
      case "pie":
        return <PieCharts data={widget.data} />;
      case "bar":
        return <BarCharts data={widget.data} />;
      case "line":
        return <LineCharts data={widget.data} />;
      default:
        return <NoDataChart />;
    }
  };

  return (
    <div className="p-4 bg-gray-50 rounded-lg shadow flex flex-col items-start justify-start w-full h-full">
      <h3 className="text-sm font-semibold">{widget.title}</h3>
      {renderChart()}
    </div>
  );
}
