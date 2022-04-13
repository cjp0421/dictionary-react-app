import React, { useState } from "react";
import "./styles.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search} onChange={handleKeywordChange}>
        <input type="search" autoFocus={true} />
      </form>
    </div>
  );
}
