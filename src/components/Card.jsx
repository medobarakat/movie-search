import React from "react";
import "./cards.css";

export default function Card({ res }) {
  const { Poster, Title, Year, imdbID } = res;
  return (
    <div className="card mt-4" key={imdbID}>
      <img src={Poster} className="card-img-top" alt="Search Image" />
      <div className="card-body">
        <h5 className="card-title">{Title}</h5>
        <p className="card-text">{Year}</p>
      </div>
    </div>
  );
}
