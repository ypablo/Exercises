import React, { Component } from 'react'
import './App.css';
import Days from "./components/Days/Days"
import DayNames from "./components/DayNames/DayNames"
import Side from "./components/Side/Side"


export default class App extends Component {



  render() {
    return (
      <div className="App">
      <Side/>
        <Days />
        <DayNames />
      </div>
    )
  }
}
