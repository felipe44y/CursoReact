import React from "react";

export default function ComParametro(props) {
  const apr = props.nota >= 7 ? "Aprovado" : "Reprovado";
  return (
    <div>
      <h1>COM PARAMENTROS</h1>
      <h1>{props.aluno}</h1>
      <h1>{props.nota}</h1>
      <h1>
        {props.disciplina}
        {apr}
      </h1>
    </div>
  );
}
