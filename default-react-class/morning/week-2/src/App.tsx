import { useState } from "react";
import SmartCounter from "./components/useState/Counter";
import "./App.css";
import CharacterCounter from "./components/useState/CharacterCountInput";
import TodoList from "./components/useState/todo-app/TodoList";
import RandomUser from "./components/useEffect/FetchData";

function App() {
  const [name, setName] = useState("Joe");

  function updateName() {
    setName("Riley");
  }

  return (
    <>
      {/* <SmartCounter /> */}
      {/* <CharacterCounter /> */}

      {/* <TodoList /> */}
      <RandomUser />
    </>
  );
}

export default App;
