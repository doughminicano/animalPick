import './App.css';
import { useState } from "react";
import AnimalShow from "./AnimalShow";

function getRamdomAnimal() {
  const animals = ["birds", "cat", "cow", "dog", "horse"];

  return animals[Math.floor(Math.random() * animals.length)];
}

// console.log(getRamdomAnimal())

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRamdomAnimal()]);
  };

  const renderAnimals = animals.map((animal, index) => {


    return <AnimalShow key={index} type={animal} />

    
  })

  return (
    <div className="app">
      <button onClick={handleClick}>Add Animal</button>
      <div className="animal-list"> {renderAnimals} </div>
    </div>
  );
}

export default App;
