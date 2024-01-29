import React, { useState } from "react";

const SearchBar = () => {
  const [] = useState([]);
  const [searchQuery, setSearchQuery] = useState("Search here");
  const handledChange = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <div>
      <form>
        <input type="text" value={searchQuery} onChange={handledChange} />
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
