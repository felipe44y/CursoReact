import "./App.css";

import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import ComParametro from "./components/basicos/ComParametro";
import Familia from "./components/basicos/Familia";

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>

      <div className="cards">
        <Card titulo="DESAFIO ALEATORIO" color="#FA6900">
          <Familia />
        </Card>

        <Card titulo="DESAFIO ALEATORIO" color="#FA6900">
          <Aleatorio min={20} max={60} />
        </Card>

        <Card titulo="DESAFIO POR PARAMETROS">
          <ComParametro aluno=" Felipe" nota={5} />
        </Card>
      </div>
    </div>
  );
}

export default App;
