function ImageHistory({
  history,
}) {
  return (
    <div className="bg-white rounded-2xl p-5 border">
      <h2 className="font-bold mb-4">
        Image History
      </h2>

      {history.map(
        (item, index) => (
          <div
            key={index}
            className="py-2 border-b"
          >
            {item.filename}
          </div>
        )
      )}
    </div>
  );
}

export default ImageHistory;