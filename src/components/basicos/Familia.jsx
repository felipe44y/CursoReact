import React from "react";
import FamiliaMembro from "./FamiliaMembro";

export default function Familia(props) {
  return (
    <div>
      <FamiliaMembro nome="Pedro" sobrenome="Ferreira" />
      <FamiliaMembro nome="Felipe" sobrenome="Sousa" />
      <FamiliaMembro nome="Santos" sobrenome="Silva" />
    </div>
  );
}
