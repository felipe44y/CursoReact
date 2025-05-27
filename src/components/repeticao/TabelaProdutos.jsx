import React from "react";
import Produtos from "../../data/produtos";

export default function TabelaProdutos() {
  const listaProdutos = Produtos.map((produto, id) => {
    return (
      <tr key={produto.id} className={id % 2 === 0 ? "par" : "impar"}>
        <td>{produto.id}</td>
        <td>{produto.nome}</td>
        <td>R$ {produto.preco.toFixed(2).replace(".", ",")}</td>
      </tr>
    );
  });

  return (
    <div>
      <table border="1" cellPadding="10" style={{ width: "100%" }}>
        <thead style={{ backgroundColor: "#FA6915" }}>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>{listaProdutos}</tbody>
      </table>
    </div>
  );
}
