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
    let rangeOfDaysInMonth = foo1.map((elem, index) => {
        return <div className="operator" key={index} type={elem}>
            {elem}</div>
    })


    return (
        <div>
            <div>TOP OPS</div>
            <div className="table">
                <div className="cells" onClick={() => alert("wow")}>{rangeOfDaysInMonth} </div>
                <div className="cells" onClick={() => alert("wow")}>{rangeOfDaysInMonth} </div>
                <div className="cells" onClick={() => alert("wow")}>{rangeOfDaysInMonth} </div>
                <div className="cells" onClick={() => alert("wow")}>{rangeOfDaysInMonth} </div>
                <div className="cells" onClick={() => alert("wow")}>{rangeOfDaysInMonth} </div>
                <div className="cells" onClick={() => alert("wow")}>{rangeOfDaysInMonth} </div>
            </div >
        </div>
    )
}
