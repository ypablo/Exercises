import React, { Component } from 'react'
import "./DayNames.css"

export default class DayNames extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bgColor: "lightslategrey",
            isToggleOn: true,
            ID: null
        }
    }




    handleClick = (e) => {
        
        //alert(e.currentTarget.innerHTML);
        //this.setState({ bgColor: "red" })
        //e.preventDefault()

        //if (e.currentTarget.dataset.id === 0 || e.currentTarget.dataset.id) { 
        //}

        this.setState(prevState => ({ isToggleOn: {...prevState.isToggleOn, [e]:!prevState.isToggleOn[e] }}))
        
        
        //console.log(  e.currentTarget.dataset.id )

       /*
       
       if(e.currentTarget.style.backgroundColor  === "yellow") {
            e.currentTarget.style.backgroundColor = "lightslategrey"
            e.currentTarget.style.color = "rgba(171, 183, 183, 0.3)"
            e.currentTarget.innerHTML = e.currentTarget.dataset.id
            
        } else {   
            //prev = e.currentTarget.innerHTML
            e.currentTarget.style.backgroundColor = "yellow"
            e.currentTarget.innerHTML = "H"
            e.currentTarget.style.color = "red"
    
        }
        */
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
                    {elem}{foo1.map((cell, i) => {
                        return (<div
                            className="operator"
                            data-id={cell}
                            key={i}
                            onClick={() => this.handleClick(i)}>
                            {this.state.isToggleOn[i] ? "Holiday" : cell}
                            {/*cell*/}
                            {/*this.state.selected[i] ? cell : "OFF"*/}
                            </div>)
                    })
                    }

                </div >)
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

