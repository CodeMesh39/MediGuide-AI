import AnalyticsCard from "../components/analytics/AnalyticsCard";
import UsageChart from "../components/analytics/UsageChart";

function AnalyticsPage() {
  const chats =
    JSON.parse(
      localStorage.getItem(
        "mediguide_chats"
      ) || "[]"
    );

  const reports =
    JSON.parse(
      localStorage.getItem(
        "report_history"
      ) || "[]"
    );

  const images =
    JSON.parse(
      localStorage.getItem(
        "image_history"
      ) || "[]"
    );

  const emergencies =
    JSON.parse(
      localStorage.getItem(
        "emergency_history"
      ) || "[]"
    );

  const weeklyData = [
    { name: "Mon", value: 4 },
    { name: "Tue", value: 6 },
    { name: "Wed", value: 3 },
    { name: "Thu", value: 8 },
    { name: "Fri", value: 5 },
    { name: "Sat", value: 2 },
    { name: "Sun", value: 4 },
  ];

  const monthlyData = [
    {
      name: "Week 1",
      value: 10,
    },
    {
      name: "Week 2",
      value: 18,
    },
    {
      name: "Week 3",
      value: 14,
    },
    {
      name: "Week 4",
      value: 24,
    },
  ];

  return (
    <div className="p-8 space-y-8 pb-24">
      <h1 className="text-3xl font-bold text-sky-600">
        Analytics Dashboard
      </h1>

      <div className="grid md:grid-cols-4 gap-6">
        <AnalyticsCard
          title="Total Chats"
          value={chats.length}
        />

        <AnalyticsCard
          title="Reports"
          value={reports.length}
        />

        <AnalyticsCard
          title="Images"
          value={images.length}
        />

        <AnalyticsCard
          title="Emergency Alerts"
          value={
            emergencies.length
          }
        />
      </div>

      <UsageChart
        title="Weekly Usage"
        data={weeklyData}
      />

      <UsageChart
        title="Monthly Activity"
        data={monthlyData}
      />
    </div>
  );
}

export default AnalyticsPage;