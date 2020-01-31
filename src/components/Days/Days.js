import React from 'react'
import "./Days.css"

export default function Days() {

    const month = new Date().getMonth() + 1
    const year = new Date().getFullYear()
    const numberDaysOfMonth = new Date(year, month, 0).getDate();


    let foo1 = []
    for (let i = 1; i <= numberDaysOfMonth; i++) {
        foo1.push(i)
    }
    let rangeOfDaysInMonth = foo1.map(elem => {
        return <div className="numbers" key={elem}>
            {elem}</div>
    })




    let x = new Date(year, month, (0 - numberDaysOfMonth) + 1)
    const option = { weekday: "long" }
    let nameDay = x.toLocaleDateString('en-GB', option)
    console.log(nameDay, x)

    let foo2 = []

    for (let i = 0; i < numberDaysOfMonth; i++) {
        foo2.push(x.toLocaleDateString('en-GB', { weekday: 'long' }));
        x.setDate(x.getDate() + 1);
    }
    let namesOfDaysInMonth = foo2.map((elem, index) => {
        return <div className="numbers" key={index}>
            {elem}</div>
    })

    return (
        <div className="month">
            <div className="day-range">
                {rangeOfDaysInMonth}
            </div>
            <div className="day-names">
                {namesOfDaysInMonth}
            </div>
        </div>
    )
}
