//importing files
import React, { useState } from "react"
import BabyNames from "./BabyNames"
import SearchBar from "./SearchBar"
import { BabyNamesData } from "./BabyNameData"
import logo from './logo.svg';
import './App.css';

function App() {

  const [input, setInput] = useState('');
  const [babyList, setBabyList] = useState(BabyNamesData);
  
  const updateInput = (input) => {
    const newBaby = BabyNamesData
    const filtered = newBaby.filter(baby => {
      return (
        baby.name.toLowerCase().includes(input.toLowerCase())
      )
    })
    setInput(input);
    setBabyList(filtered);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3>Baby Names Picker</h3>
        <SearchBar input={input} onChange={updateInput} />
        <BabyNames babyList={ babyList }/>
      </header>
    </div>
  )
}

export default App;
