import React, { useState } from "react";

export default function SearchBar(prop) {
  const { onSearch } = prop;
  const [searchtext, setSearchtext] = useState("");
  const changeHandler = (e) => {
    const data = e.target.value;
    setSearchtext(data);
  };
  const handlePress = (e) => {
    if (e.key === "Enter") {
      onSearch(searchtext);
    }
  };
  return (
    <div className="SearchBar">
      <input
        placeholder="Search"
        type="text"
        value={searchtext}
        onChange={changeHandler}
        onKeyPress={handlePress}
      />
    </div>
  );
}
