import React from "react";

const SearchBar = ({ handleTermChange, handleSubmit, handleFilterChange, filteredTerm }) => {
  return (
    <div className="SearchBar">
      <input type="text" onChange={handleTermChange} placeholder="What Interests You?" />
      <button onClick={handleSubmit}>Search</button>
      <br/>
      <input type="text" onChange={handleFilterChange} value={filteredTerm} placeholder="Filter Results" />
    </div>
  );
};

export default SearchBar;
