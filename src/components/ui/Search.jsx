import React, { useState } from "react";

const Search = ({ getQuery, getQueryType }) => {
  const [searchedValue, setSearchedValue] = useState("");
  const [option, setOption] = useState("name");

  const handleSearchedValue = (event) => {
    setSearchedValue(event.target.value);
    getQuery(event.target.value);
  };

  const handleSelect = (event) => {
    setOption(event.target.value);
    getQueryType(event.target.value);
  };

  return (
    <section className="search">
      <input
        placeholder="Search characters"
        type="text"
        className="form-control"
        autoFocus
        value={searchedValue}
        onChange={handleSearchedValue}
      />
      <select onChange={handleSelect} value={option}>
        <option value="name">Name</option>
        <option value="nickname">Nickname</option>
        <option value="portrayed">Portrayed</option>
      </select>
    </section>
  );
};

export default Search;
