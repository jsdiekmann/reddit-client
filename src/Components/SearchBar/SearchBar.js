import React from "react";

// Component that allows us to input a search term for a subreddit and then filter those results

const SearchBar = ({ handleTermChange, handleSubmit, handleFilterChange, filteredTerm }) => {
  return (
    <div className="SearchBar">
      <input type="text" onChange={(event) => handleTermChange(event.target.value)} placeholder="What Interests You?" />
      <button onClick={handleSubmit}>Search</button>
      <br/>
      <input type="text" onChange={(event) => handleFilterChange(event.target.value)} value={filteredTerm} placeholder="Filter Results" />
    </div>
  );
};

export default SearchBar;
