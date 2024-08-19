import { Pie, PieChart, Tooltip } from "recharts";

export default function PieCharts({ data }) {
  const formattedData = Object.keys(data).map((key) => ({
    name: key,
    value: data[key],
  }));

  return (
    <PieChart width={400} height={400}>
      <Pie
        dataKey="value"
        isAnimationActive={false}
        data={formattedData}
        cx={200}
        cy={200}
        outerRadius={80}
        fill="#8884d8"
        label
      />
      <Tooltip />
    </PieChart>
  );
}
