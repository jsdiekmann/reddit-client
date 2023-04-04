import React from "react";

const SearchBar = ({handleTermChange, handleSubmit}) => {

    return (
        <div className="SearchBar">
            <input onChange={handleTermChange} placeholder="What Interests You?" />
            <button onClick={handleSubmit}>Search</button>
        </div>
    )
}

export default SearchBar;