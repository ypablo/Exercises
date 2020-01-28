import React from 'react';
import './App.css';
import Days from "./components/Days/Days"
import DayNames from "./components/DayNames/DayNames"

function App() {
  return (
    <div className="App">
      <Days/>
      <DayNames/>
    </div>
  );
}

export default App;
