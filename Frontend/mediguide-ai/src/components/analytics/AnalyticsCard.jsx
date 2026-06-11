function AnalyticsCard({
  title,
  value,
}) {
  return (
    <div className="bg-white rounded-2xl border p-6 shadow-sm">
      <h3 className="text-slate-500">
        {title}
      </h3>

      <p className="text-4xl font-bold mt-2 text-sky-600">
        {value}
      </p>
    </div>
  );
}

export default AnalyticsCard;