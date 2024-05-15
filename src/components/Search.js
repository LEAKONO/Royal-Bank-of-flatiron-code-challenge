import React from "react";

function Search({ search, setSearch }) {
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        value={search}
        onChange={handleSearchChange}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;

