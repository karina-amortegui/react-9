import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [response, setResponse] = useState<any>([]);

  async function fetchData() {
    try {
      const data = await fetch("http://localhost:8787/ping")
      .then(response => response.json());
      console.log(data.data);
      setResponse(data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <>
      <h1>Testing My New App</h1>
      {response?.map((item: any, index: number) => (
        <div key={index}>
          <p>name: {item.name}</p>
          <h2>difficulty: {item.difficulty}</h2>
        </div>
      ))}
    </>
  )
}

export default App
