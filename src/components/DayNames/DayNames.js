import React from 'react'
import "./DayNames.css"

export default function Cells(props) {

    //Getting number of days of month
    const month = new Date().getMonth() + 1
    const year = new Date().getFullYear()
    const numberDaysOfMonth = new Date(year, month, 0).getDate();

    let foo1 = []
    for (let i = 1; i <= numberDaysOfMonth; i++) {
        foo1.push(i)
    }

    //let rangeOfDaysInMonth = foo1.map((elem, index) => {
    //    return <div className="operator" key={index} type={elem}>
    //        {elem}</div>
    //})

    let foo2 =["Charlotte", "Clint", "Michael", "Pawel", "Phil", "Simon"]
    const ops = foo2.map((elem, index) =>{
        return (
            <div className="ops_header" key={index}>
                {elem}{foo1.map((cell, index) =>{
                        return (<div className="operator" key={index} onClick={() => alert("wow")}>{cell}</div>)
                })} 
            </div> )})

    

    //var myObject = { 'a': 1, 'b': 2, 'c': 3 };
    //Object.keys(myObject).map(key => {
    //myObject[key] *= 2;
    //});




    return (
        <div>
            <div className="table">{ops}
                 {/*<div className="cells" onClick={() => alert("wow")}>{ops} </div>
                <div className="cells" onClick={() => alert("wow")}>{ops} </div>
               <div className="cells" onClick={() => alert("wow")}>{rangeOfDaysInMonth} </div>
                <div className="cells" onClick={() => alert("wow")}>{rangeOfDaysInMonth} </div>
                <div className="cells" onClick={() => alert("wow")}>{rangeOfDaysInMonth} </div>
                <div className="cells" onClick={() => alert("wow")}>{rangeOfDaysInMonth} </div>
    <div className="cells" onClick={() => alert("wow")}>{rangeOfDaysInMonth} </div>*/}
            </div >
        </div>
    )
}
