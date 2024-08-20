import { Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

export default function PieCharts({ data }) {
  const formattedData = Object.keys(data).map((key) => ({
    name: key,
    value: data[key],
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={formattedData}
          outerRadius={80}
          fill="#8884d8"
          label
        />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}
