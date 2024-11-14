import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`, { replace: true });
    setQuery("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search Order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-28 rounded-full bg-yellow-100 px-4 py-3 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring-yellow-500 sm:w-64 sm:focus:w-72 md:px-6"
      />
    </form>
  );
}

export default SearchOrder;
