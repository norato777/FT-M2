import React from "react";
import Temp from "./Temp";
import style from "../styleSheets/Card.module.css";

export default function Card({ max, min, name, img, onClose, main }) {
  return (
    <div className={[style.card, main ? style.mainCard : ""].join(" ")}>
      <span className={style.name}>{name}</span>
      <button className={style.cardBtn} onClick={onClose}>
        x
      </button>
      <section>
        <Temp className={style.temp} label="Min" value={min} />
        <Temp className={style.temp} label="Max" value={max} />
        <img
          src={`http://openweathermap.org/img/wn/${img}@${main ? 4 : 2}x.png`}
          alt="icon"
        />
      </section>
    </div>
  );
}
