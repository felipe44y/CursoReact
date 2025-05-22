import React from "react";

export default function Aleatorio(props) {
  const aleatorio =
    parseInt(Math.random() * (props.max - props.min)) + props.min;
  return (
    <div>
      <h1>
        valor maximo: {props.max} e valor minino: {props.min}
      </h1>
      <h1> valor escolhido: {aleatorio}</h1>
    </div>
  );
}
