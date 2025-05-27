import "./App.css";

import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import ComParametro from "./components/basicos/ComParametro";
import Familia from "./components/basicos/Familia";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import Condicional from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <div className="cards">
        <Card titulo="CONDICAO" color="#FA6939">
          <Condicional numero={2} />
          <UsuarioInfo usuario={{ nome: "Fernando" }} />
          <UsuarioInfo usuario={{ email: "Fernando@gmail.com" }} />
        </Card>
        <Card titulo="TABELA PRODUTOS" color="#FA6915">
          <TabelaProdutos />
        </Card>
        <Card titulo="DESAFIO REPETICAO" color="#FA6989">
          <ListaAlunos />
        </Card>
        <Card titulo="DESAFIO ALEATORIO" color="#FA6900">
          <Familia sobrenome="Raimundo" />
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
