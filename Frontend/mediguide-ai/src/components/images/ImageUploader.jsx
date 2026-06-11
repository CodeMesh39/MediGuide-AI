function ImageUploader({
  onFileSelect,
}) {
  return (
    <div className="bg-white border-2 border-dashed border-sky-300 rounded-2xl p-10 text-center">
      <input
        type="file"
        accept="image/*"
        onChange={(e) =>
          onFileSelect(
            e.target.files[0]
          )
        }
      />

      <p className="mt-4 text-slate-500">
        Upload X-Ray, MRI, CT,
        Ultrasound, ECG or Medical
        Image
      </p>
    </div>
  );
}

export default ImageUploader;