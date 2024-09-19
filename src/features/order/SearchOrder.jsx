import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleChange(e) {
    setQuery(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:w-40 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-30 sm:w-64 sm:focus:w-72"
        type="text"
        placeholder="Search order #"
        value={query}
        onChange={handleChange}
      />
    </form>
  );
}

export default SearchOrder;
