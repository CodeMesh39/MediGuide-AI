function SeverityBadge({
  severity,
}) {
  const colors = {
    Low: "bg-green-100 text-green-700",
    Moderate:
      "bg-yellow-100 text-yellow-700",
    High: "bg-orange-100 text-orange-700",
    Critical:
      "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`px-4 py-2 rounded-full font-semibold ${
        colors[severity] ||
        "bg-slate-100"
      }`}
    >
      {severity}
    </span>
  );
}

export default SeverityBadge;