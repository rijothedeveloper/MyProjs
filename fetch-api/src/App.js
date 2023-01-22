import "./App.css";
import React, { useEffect } from "react";

function App() {
  const [catFact, setCatFact] = React.useState("");
  const fetchData = () => {
    fetch("https://catfact.ninja/fact")
      .then((resp) => resp.json())
      .then((data) => {
        setCatFact(data.fact);
      });
  };
  useEffect(fetchData, []);

  return (
    <div className="App">
      <button onClick={fetchData}>Generate cat fact</button>
      <p> {catFact} </p>
    </div>
  );
}

export default App;
