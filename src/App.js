import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import SearchBar from "./components/SearchBar";
import CardList from "./components/CardList";
export default function App() {
  const [state, setState] = useState({
    results: [],
  });
  const onSearch = async (data) => {
    const results = await axios.get(
      `https://www.omdbapi.com/?apikey=e8e5a653&s=${data}`
    );
    setState((prestate) => {
      return { ...prestate, results: results.data.Search };
    });
  };
  return (
    <div className="text-center mt-5">
      <div className="row">
        <div className="col">
          <h1>This is A search template Site</h1>
          <h4>Made With React</h4>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <SearchBar onSearch={onSearch} />
        </div>
      </div>
      <div className="row">
        {state.results ? (
          <CardList results={state.results} />
        ) : (
          <h1>There is Error , Check The Search and Try again</h1>
        )}
      </div>
      <footer>
        <h5>Made By :Ahmed Barakat</h5>
      </footer>
    </div>
  );
}
