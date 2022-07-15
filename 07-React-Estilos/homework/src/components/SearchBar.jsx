import React from "react";
import style from "../styleSheets/SearchBar.module.css";
import { HiOutlineSearchCircle } from "react-icons/hi";
import { GiModernCity } from "react-icons/gi";

export default function SearchBar({ onSearch }) {
  return (
    <form className={style.searchBar}>
      <GiModernCity className={style.icon} />
      <input className={style.input} placeholder="City..." />
      <button className={style.submit} type="submit">
        <HiOutlineSearchCircle />
      </button>
    </form>
  );
}
