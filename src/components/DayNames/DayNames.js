import React, { Component } from 'react'
import "./DayNames.css"

export default class DayNames extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bgColor: "lightslategrey",
            isToggleOn: true
        }
    }

    handleClick = (e) => {
        
        //alert(e.currentTarget.innerHTML);
        //this.setState({ bgColor: "red" })
        e.preventDefault()
        if (e.currentTarget.dataset.id === 0 || e.currentTarget.dataset.id) {
           // e.currentTarget.style.backgroundColor = "yellow"
          //  e.currentTarget.innerHTML = "H"
        } else {
            e.currentTarget.innerHTML = e.currentTarget.dataset.id
        }
        
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn,
            
          }));
        console.log(  e.currentTarget.dataset.id )
    
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


        let foo2 = ["Ops1", "Clint", "Michael", "Pawel", "Ops2", "Simon"]
        const ops = foo2.map((elem, index) => {
            return (
                <div className="ops_header" key={index}>
                    {elem}{foo1.map((cell, index) => {
                        return (<div
                            className="operator"
                            data-id={cell}
                            key={index}
                            onClick={(e) => this.handleClick(e)}>
                            {/*this.state.isToggleOn ?  cell : 'OFF'*/}
                            {cell}
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

