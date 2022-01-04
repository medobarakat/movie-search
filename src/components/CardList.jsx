import React from "react";
import Card from "../components/Card";

export default function CardList({ results }) {
  const renderResult = results.map((res) => {
    return (
      <div className="cards">
        <Card res={res} />
      </div>
    );
  });

  return <div className="CardList">{renderResult}</div>;
}
