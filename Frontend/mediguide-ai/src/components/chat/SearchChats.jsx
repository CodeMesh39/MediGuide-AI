function SearchChats({
  searchTerm,
  setSearchTerm,
}) {
  return (
    <input
      type="text"
      placeholder="Search chats..."
      value={searchTerm}
      onChange={(e) =>
        setSearchTerm(e.target.value)
      }
      className="w-full px-4 py-3 rounded-xl border outline-none"
    />
  );
}

export default SearchChats;