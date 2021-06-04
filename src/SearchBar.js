import React from "react"

const SearchBar = ({ keyword, onChange:setKeyword }) => {
    const BarStyling = { width: "320px", background: "#ffffff", border: "none", padding: "8px" };
    return (
      <input
        style={BarStyling}
        key="random1"
        value={keyword}
        placeholder={"Search for a baby name"}
        onChange={(e) => setKeyword(e.target.value)}
      />
    );
  }

export default SearchBar
