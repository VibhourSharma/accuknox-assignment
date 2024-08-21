import emptyData from "../../assets/empty-data.svg";

const NoDataChart = () => {
  return (
    <div className="w-full h-full items-center justify-center flex flex-col">
      <div className="min-w-64 min-h-64 flex items-center justify-center">
        <img
          src={emptyData}
          alt="No Data available"
          className="w-24 h-24 relative"
        />
      </div>
      <p className="text-sm text-gray-500">No graph data available</p>
    </div>
  );
};

export default NoDataChart;
