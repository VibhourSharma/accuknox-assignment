import emptyData from "../../assets/empty-data.svg";

const NoDataChart = () => {
  return (
    <div className="w-full h-full items-center justify-center flex flex-col">
      <img
        src={emptyData}
        alt="No Data available"
        className="w-24 h-24 relative"
      />
      <p className="text-sm mt-4 text-gray-500">No graph data available</p>
    </div>
  );
};

export default NoDataChart;
