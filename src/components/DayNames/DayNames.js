import React, { Component } from 'react'
import "./DayNames.css"

export default class DayNames extends Component {

    constructor(props) {
        super(props)
        this.state = {
            bgColor: "#FFD712",
            isToggleOn: {},
            array: ["Holiday", "D", "N", "Project", "Edit", "Sick"],
            colors: ["#FFD712", "#58ACFA", "#58ACFA", "#58ACFA", "#58ACFA", "#FF4000"],
            font_colors: ["red", "white", "white", "white", "white", "white"],
            first_click: true,
            count: 0
        }
    }

    handleSwitch = () => {
        //if (this.state.first_click === false) {
        this.setState({ count: (this.state.count + 1) % this.state.array.length })

        console.log(this.state.colors[this.state.count])
    }


    handleClick = (row, col) => {
        //const newColor = this.state.bgColor === "lightslategrey" ? "#FFD712" : "lightslategrey"
        this.setState(prevState => ({
            isToggleOn: {
                ...prevState.isToggleOn,
                [row]: { ...prevState.isToggleOn[row], [col]: !(prevState.isToggleOn[row] && prevState.isToggleOn[row][col]) }
            },
            //newColor,
            //first_click: false,
            //count: (this.state.count + 1) % this.state.array.length
        }), this.handleSwitch())
        console.log(this.state.count)
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
                                onClick={() => { this.handleClick(i, index) }}>
                                {this.state.isToggleOn[i] && this.state.isToggleOn[i][index] ?
                                    <div className="holiday" style={{ backgroundColor: this.state.colors[this.state.count], color: this.state.font_colors[this.state.count] }}>{this.state.array[this.state.count]}</div> : cell}

                            </div>)
                    })
                    }
                </div>)
        })

        // var myObject = { 'a': 1, 'b': 2, 'c': 3 };
        // Object.keys(myObject).map(key => {
        // myObject[key] *= 2;
        // });
        //onClick={() => this.handleSwitch()}>

        return (
            <div>
                <div className="table">
                    {ops}
                </div>
            </div>
        )
    }
}

