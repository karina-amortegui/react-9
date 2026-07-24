import { useState } from "react";
import "./App.css";
//import SmartCounter from "./components/useState/Counter";
//import CharacterCounter from "./components/useState/CharacterCountInput";
//import RandomUser from "./components/useEffect/FetchData";
//import FetchWithStates from "./components/useEffect/ImprovedFetch";
//import { ContactForm } from "./components/useState/SimpleForm";
import { RenderLogger }

import TodoList from "./components/useState/todo-app/TodoList";

function App() {
  const [name, setName] = useState("Joe");

  function updateName() {
    setName("Riley");
  }

  return (
    <>
      {/* <CharacterCounter /> */}
      {/* <SmartCounter /> */}
      {/*<RandomUser /> */}
      {/* <FetchWithStates /> */}
      {/* <ContactForm /> */}
      <RenderLogger />
      {/* <TodoList /> */}
    </>
  );
}

export default App;
