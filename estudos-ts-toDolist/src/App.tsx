import { useState } from "react";
import "./App.css";

interface toDoitem {
  id: string;
  texto: string;
  concluido: boolean;
}

function App() {
  const [toDo, setToDo] = useState<toDoitem[]>([]);
  const [newToDo, setNewToDo] = useState<string>("");

  const adicionarTarefa = () => {
    if (newToDo !== "") {
      const newId = crypto.randomUUID();
      const newToDoItem: toDoitem = {
        id: newId,
        texto: newToDo,
        concluido: false,
      };
      setToDo([...toDo, newToDoItem]);
      setNewToDo("");
    }
  };

  const taskCompleted = (id: string) => {
    const updateToDo = toDo.map((item) => {
      if (item.id === id) {
        return { ...item, concluido: !item.concluido };
      }
      return item;
    });
    setToDo(updateToDo);
  };
  const removeToDo = (id: string) => {
    const updateToDo = toDo.filter((item) => item.id !== id);
    setToDo(updateToDo);
  };

  return (
    <>
      <div className="app">
        <div className="container">
          <h1>Lista de Tarefas</h1>
          <div className="input-container">
            <input
              type="text"
              placeholder="insira sua tarefa"
              value={newToDo}
              onChange={(e) => setNewToDo(e.target.value)}
            />
            <button onClick={adicionarTarefa}>Adicionar tarefa</button>
          </div>
          <ul>
            {toDo.map((toDoItem) => (
              <li key={toDoItem.id}>
                <input
                  type="checkbox"
                  checked={toDoItem.concluido}
                  onChange={() => taskCompleted(toDoItem.id)}
                />
                <span style={{ textDecoration: toDoItem.concluido ? 'line-through' : 'none' }}>{toDoItem.texto}</span>
                <button onClick={() => removeToDo(toDoItem.id)}>Remover</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
