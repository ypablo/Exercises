import React, { Component } from 'react'
import "./DayNames.css"

export default class DayNames extends Component {

    constructor(props) {
        super(props)
        this.state = {
            bgColor: "#FFD712",
            isToggleOn: {},   
        }
    }

    handleClick = (row, col) => {
        const newColor = this.state.bgColor === "lightslategrey" ? "#FFD712" : "lightslategrey";
        this.setState( prevState => ({
        isToggleOn: {
            ...prevState.isToggleOn,
            [row]:{...prevState.isToggleOn[row],[col]: !(prevState.isToggleOn[row] && prevState.isToggleOn[row][col])},  
        },
        newColor
        }));      
    }


    render() {
        //Getting number of days of month
        const month = new Date().getMonth() + 1
        const year = new Date().getFullYear()
        const numberDaysOfMonth = new Date(year, month, 0).getDate();
        

        let foo1 = []
        for (let i = 1; i <= numberDaysOfMonth; i++) {
            foo1.push(i)
        }

        let foo2 = ["Ops1", "Ops2", "Ops3", "Ops4", "Ops5", "Ops6"]
        const ops = foo2.map((elem, index) => {
            return (
                <div className="ops_header" key={index}>
                    {elem}
                    {foo1.map((cell, i) => {
                        return (
                            <div
                                className="operator"
                                data-id={cell}
                                key={i}
                                onClick={() => this.handleClick(i, index)}>
                                {this.state.isToggleOn[i] && this.state.isToggleOn[i][index] ? 
                                <div className="holiday" style={{backgroundColor : this.state.bgColor}}>Holiday</div> : cell }
                                {/*(() => {
                                    switch (this.state.isToggleOn[i] && this.state.isToggleOn[i][index]) {
                                      case cell:   return "Holiday";
                                      case "Holiday": return "D";
                                      case "D":  return "N";
                                      default:      return cell;
                                    }
                                })()*/}
                            </div>)
                    })}
                </div>)
        })

        // var myObject = { 'a': 1, 'b': 2, 'c': 3 };
        // Object.keys(myObject).map(key => {
        // myObject[key] *= 2;
        // });

        return (
            <div>
                <div className="table">
                    {ops}
                </div>
            </div>
        )
    }
}

