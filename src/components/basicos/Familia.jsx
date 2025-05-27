import React from "react";
import FamiliaMembro from "./FamiliaMembro";

export default function Familia(props) {
  return (
    <div>
      <FamiliaMembro nome="Pedro" sobrenome={props.sobrenome} />
      <FamiliaMembro nome="Felipe" {...props} />
      <FamiliaMembro nome="Santos" sobrenome="Silva" />
    </div>
  );
}
