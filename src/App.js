import React, { useState, useEffect } from "react";
import "./App.css";
import CardContainer from "./Components/Card/CardContainer";
import SearchBar from "./Components/SearchBar/SearchBar";

const App = () => {
  const [error, setError] = useState("");
  const [term, setTerm] = useState("");
  const [searchTerm, setSearchTerm] = useState("cowboys");

  const handleTermChange = (event) => {
    let parsedTerm = event.target.value.replaceAll(/[" ", "'"]/g, "");
    setTerm(parsedTerm);
  };

  const handleSubmit = () => {
    setSearchTerm(term);
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    loadListings();
  }, [searchTerm]);

  const loadListings = async () => {
    
    let request;

    try {
      request = await fetch(`https://www.reddit.com/r/${searchTerm}.json`);
      setError(null);
    } catch (error) {
      setError('That is not a valid subreddit');
      return;
    }
   
    if(!request.ok) {
      setError('That is not a valid subreddit');
      return; 
    };

    const listings = await request.json();

    //console.log(listings.data);

    if(listings.data.children.length === 0) {
      setError('That subreddit does not contain any posts');
      return;
    };



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
        downs: listing.data.downs
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
        term={term}
        handleSubmit={handleSubmit}
      />
      <h2>{error}</h2>
      <CardContainer listings={data} />
    </div>
  );
};

export default App;
