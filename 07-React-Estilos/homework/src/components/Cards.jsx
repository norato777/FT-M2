import React from "react";
import Card from "./Card.jsx";
import style from "../styleSheets/Cards.module.css";

export default function Cards({ cities }) {
  return (
    <div className={style.cards}>
      {cities.map((city) => (
        <Card
          key={city.id}
          max={city.main.temp_max}
          min={city.main.temp_min}
          name={city.name}
          img={city.weather[0].icon}
          onClose={() => alert(city.name)}
        />
      ))}
    </div>
  );
}
