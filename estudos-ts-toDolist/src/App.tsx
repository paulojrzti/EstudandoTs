import { useState } from "react";
import "./App.css";

interface jogadorFutebol {
  id: string;
  nome: string;
  idade: number;
  posicao: string;
}

function App() {
  const [jogadores, setJogadores] = useState<jogadorFutebol[]>([]);
  // Lista de jogadores armazenada no estado.
  // `setJogadores` serve para adicionar novos jogadores à lista.

  const [nome, setNome] = useState<string>("");
  // Armazena o nome do novo jogador sendo cadastrado.

  const [idade, setIdade] = useState<number | "">("");
  // Armazena a idade. Começa como string vazia, mas será convertida para número.

  const [posicao, setPosicao] = useState<string>("");
  // Armazena a posição do novo jogador.

  const adicionarJogador = () => {
    // Função chamada ao clicar no botão de adicionar jogador

    if (nome !== "" && idade !== "" && posicao !== "") {
      // Verifica se todos os campos estão preenchidos

      const novoJogador: jogadorFutebol = {
        id: crypto.randomUUID(), // Gera um ID único para cada jogador
        nome: nome, // Define o nome informado
        idade: Number(idade), // Converte a idade para número
        posicao: posicao, // Define a posição informada
      };

      setJogadores([...jogadores, novoJogador]);
      // Adiciona o novo jogador à lista, mantendo os anteriores

      setNome(""); // Limpa o campo de nome
      setIdade(""); // Limpa o campo de idade
      setPosicao(""); // Limpa o campo de posição
    }
  };

  return (
    <>
      <div className="app">
        <div className="container">
          <h1>lista de jogadores de futebol</h1>
          <div className="inputs-container">
            <input
              type="text"
              value={nome}
              placeholder="nome"
              onChange={(e) => setNome(e.target.value)}
            />
            <input
              type="number"
              value={idade}
              placeholder="idade"
              onChange={(e) =>
                setIdade(e.target.value === "" ? "" : Number(e.target.value))
              }
            />
            <input
              type="text"
              value={posicao}
              placeholder="posição"
              onChange={(e) => setPosicao(e.target.value)}
            />
            <button onClick={adicionarJogador}> Adicionar jogador </button>
          </div>
          <ul>
            {jogadores.map((jogador) => (
              <li key={jogador.id}>
                <strong>{jogador.nome}</strong> - {jogador.idade} anos, posição:
                  {jogador.posicao}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
