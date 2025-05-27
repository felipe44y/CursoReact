export default function ParOuImpar(props) {
  const verificar = props.numero % 2 === 0 ? "par" : "impar";

  const operador = props.numero % 2 === 0;

  return (
    <div>
      <span>
        numero {props.numero} é {verificar} <br></br>
      </span>
      numero {props.numero} é{" "}
      {operador ? (
        <span style={{ color: "green" }}>par</span>
      ) : (
        <span style={{ color: "red" }}>impar</span>
      )}
    </div>
  );
}
