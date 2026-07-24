import { useState, useEffect } from 'react';

import { useFetchData } from "wherever";



const useFetchData = () => {
  const [data, setData] = useState();
  
  async function fetchData() {
    try {
      const { data } = await fetch("url");
    } catch (err) {
      console.error(err);
    }
  }

  return data;
}


import "./App.css";
import { Greeting } from "./components/Greeting"
import { MovementCard } from "./components/MovementCard";
import { Footer } from "./components/Footer";



// api requests, take user input, button, search bar, smart components


// function addTwoNumbers(a, b) {
//   return a + b;
// }

function App() {

  const deadPointData = { 
    id: 1,
    movement: "dead point", 
    shortSummary: "Dead Point summary", 
    fullDescription: "This is the full description", 
    difficulty: 7, 
    style: "Dynamic", 
    exercises: []
  };

  const dropKneeData = { 
    id: 2,
    movement: "Drop Knee", 
    shortSummary: "Drop Knee summary", 
    fullDescription: "This is the full description", 
    difficulty: 4, 
    style: "Static", 
    exercises: []
  };

  // const filteredMovements = movements.filter(movement => movement.difficulty > 5);
  // 1. Dead Point
  // 2. Drop Knee

  //return -> what you are displaying to the screen in a component
  return (
    <>
      {/* Dead Point */}
      First one
      <MovementCard id={1} movement="Dead Point" difficulty={7} style="dynamic" />
      
      Second One
      {/* Drop Knee */}
      <MovementCard id={2} movement="Drop Knee" difficulty={4} style="static" />

      <Footer />
    </>
  );
}

export default App;