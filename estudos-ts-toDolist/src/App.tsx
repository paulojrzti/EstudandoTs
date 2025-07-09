import { useEffect, useState } from "react";
import { useTheme } from "./themeContext";
import "./App.css";

interface toDoitem {
  id: string;
  texto: string;
  concluido: boolean;
}

function App() {
  const { theme, toggleTheme } = useTheme();
  const [toDo, setToDo] = useState<toDoitem[]>([]);
  const [newToDo, setNewToDo] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (loading) {
      localStorage.setItem("toDoList", JSON.stringify(toDo));
    }
  }, [toDo, loading]);
  useEffect(() => {
    const storedToDo = localStorage.getItem("toDoList");
    if (storedToDo) {
      setToDo(JSON.parse(storedToDo));
    }
    setLoading(true);
  }, []);
  
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

  const numberOfTasks = (): number => {
    return toDo.filter((item) => item.concluido).length;
  };

  return (
    <>
      <div className={`app ${theme}`}>
        <div className={`container ${theme}`}>
          <h1>
            Lista de Tarefas - {numberOfTasks()}/{toDo.length}
          </h1>
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
                <span
                  style={{
                    textDecoration: toDoItem.concluido
                      ? "line-through"
                      : "none",
                  }}
                >
                  {toDoItem.texto}
                </span>
                <button onClick={() => removeToDo(toDoItem.id)}>Remover</button>
              </li>
            ))}
          </ul>
        <button className="theme-toggle" onClick={toggleTheme}>
          alterar tema ({theme === "light" ? "dark" : "light"})
        </button>
        </div>
      </div>
    </>
  );
}

export default App;
