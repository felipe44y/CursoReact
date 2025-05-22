import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import ComParametro from "./components/basicos/ComParametro";

function App() {
  return (
    <div>
      <h1>Fundamentos React</h1>
      <Card titulo="DESAFIO ALEATORIO">
        <Aleatorio min={20} max={60} />
      </Card>

      <Card titulo="DESAFIO ALEATORIO">
        <ComParametro aluno=" Felipe" nota={5} />
      </Card>
    </div>
  );
}

export default App;
