import React from "react";
import style from "../styleSheets/SearchBar.module.css";
import { HiOutlineSearchCircle } from "react-icons/hi";
import { GiModernCity } from "react-icons/gi";

export default function SearchBar({ onSearch }) {
  return (
    <form
      className={style.searchBar}
      onSubmit={(e) => {
        e.preventDefault();
        const input = document.getElementById("cityInput");
        onSearch(input.value);
        input.value = "";
      }}
    >
      <GiModernCity className={style.icon} />
      <input id="cityInput" className={style.input} placeholder="City..." />
      <button className={style.submit} type="submit">
        <HiOutlineSearchCircle />
      </button>
    </form>
  );
}
