function ImagePreview({
  file,
}) {
  if (!file) return null;

  return (
    <div className="bg-white rounded-2xl p-5 border">
      <h2 className="font-bold mb-4">
        Image Preview
      </h2>

      <img
        src={URL.createObjectURL(
          file
        )}
        alt="Preview"
        className="max-h-[400px] rounded-xl"
      />
    </div>
  );
}

export default ImagePreview;