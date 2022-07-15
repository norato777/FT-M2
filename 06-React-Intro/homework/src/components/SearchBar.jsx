import React from "react";

export default function SearchBar({ onSearch }) {
  // acá va tu código
  return (
    <div>
      <input type="text" />
      <button onClick={() => onSearch("...buscando")}>Add</button>
    </div>
  );
}
