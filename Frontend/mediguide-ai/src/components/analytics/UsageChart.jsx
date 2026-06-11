import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

function UsageChart({
  data,
  title,
}) {
  return (
    <div className="bg-white rounded-2xl border p-6">
      <h2 className="font-bold mb-4">
        {title}
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <BarChart data={data}>
          <XAxis dataKey="name" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="value"
            fill="#0EA5E9"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default UsageChart;