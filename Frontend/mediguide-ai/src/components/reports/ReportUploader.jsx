function ReportUploader({
  onFileSelect,
}) {
  return (
    <div className="border-2 border-dashed border-sky-300 rounded-2xl p-10 text-center bg-white">
      <input
        type="file"
        accept=".pdf"
        onChange={(e) =>
          onFileSelect(
            e.target.files[0]
          )
        }
      />

      <p className="mt-4 text-slate-500">
        Upload Medical Report PDF
      </p>
    </div>
  );
}

export default ReportUploader;