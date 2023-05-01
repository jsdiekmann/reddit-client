import React, { useState, useEffect } from "react";
import "./App.css";
import CardContainer from "./Components/Card/CardContainer";
import SearchBar from "./Components/SearchBar/SearchBar";
import { parser } from "./parser";

const App = () => {
  const [error, setError] = useState("");
  const [term, setTerm] = useState("");
  const [searchTerm, setSearchTerm] = useState("cowboys");
  const [filteredTerm, setFilteredTerm] = useState("");
  const [data, setData] = useState([]);


  // Takes an inputted term, parses it and then updates state
  
  const handleTermChange = (newValue) => {
    let parsedTerm = parser(newValue);
    setTerm(parsedTerm);
  };

  
  // On button press, updates serach term to match previously inputted term and resets the filter

  const handleSubmit = () => {
    setSearchTerm(term);
    setFilteredTerm("");
  };

  // Updates filter for returned result based on key stroke

  const handleFilterChange = (filterValue) => {
    setFilteredTerm(filterValue);
  };

  // Uses the searchTerm to make an API call to return a desired subreddit

  useEffect(() => {
    loadListings();
  }, [searchTerm]);

  const loadListings = async () => {
    let request;

    try {
      request = await fetch(`https://www.reddit.com/r/${searchTerm}.json`);
      setError(null);
    } catch (error) {
      setError("That is not a valid subreddit");
      return;
    }

    if (!request.ok) {
      setError("That is not a valid subreddit");
      return;
    }

    const listings = await request.json();

    if (listings.data.children.length === 0) {
      setError("That subreddit does not contain any posts");
      return;
    }

    // Sets data which will be passed to Card Component to render the Cards

    setData(
      listings.data.children.map((listing) => ({
        title: listing.data.title,
        src: listing.data.thumbnail,
        srcHeight: listing.data.thumbnail_height,
        scrWidth: listing.data.thumbnail_width,
        permalink: listing.data.permalink,
        url: listing.data.url,
        description: listing.data.selftext,
        ups: listing.data.ups,
        downs: listing.data.downs,
      }))
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Kind of Like Reddit</h1>
      </header>
      <SearchBar
        handleTermChange={handleTermChange}
        filteredTerm={filteredTerm}
        handleSubmit={handleSubmit}
        handleFilterChange={handleFilterChange}
      />
      <h2>{error}</h2>
      <CardContainer listings={data} filteredTerm={filteredTerm} />
    </div>
  );
};

export default App;
