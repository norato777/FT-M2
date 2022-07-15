import React from "react";

export default function Card(props) {
  function agregarGrados(temp) {
    return temp + "°";
  }

  return (
    <div>
      <button onClick={props.onClose}> X </button>
      <div>
        <h2>{props.name}</h2>
      </div>
      <div>
        <h3>Min</h3>
        <h4>{agregarGrados(props.min)}</h4>
      </div>
      <h3>Max</h3>
      <h4>{agregarGrados(props.max)}</h4>
      <div>
        <img
          src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}
          alt="clima"
        />
      </div>
    </div>
  );
}
