import React from 'react'
import "./DayNames.css"

export default function Cells() {

    //const month = new Date().getMonth() + 1
    //const year = new Date().getFullYear()
    //const numberDaysOfMonth  = new Date(year, month, 0).getDate();

    //let d = new Date()
    //const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ]

    //var date = new Date(dateStr);
    //date.toLocaleDateString(locale, { weekday: 'long' }); 

    let weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date().getDay()]



    // let foo = []
    // for (let i = 1; i <= numberDaysOfMonth; i++) {
    //     foo.push(i)
    // }

    // let nameOfTheDay = weekday.map(elem => {
    //     return <div className="structure" key={elem}>
    //         {elem}</div> 
    // })

    return (
        <div className="structure">
            {weekday}
        </div>
    )
}
