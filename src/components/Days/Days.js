import React from 'react'
import "./Days.css"

export default function Days() {
    
        const month = new Date().getMonth() + 1
        const year = new Date().getFullYear()
        const numberDaysOfMonth  = new Date(year, month, 0).getDate();
        
       
       let foo = []
        for (let i=1; i <= numberDaysOfMonth; i++){
            foo.push(i)
        }

       let rangeOfDaysInMonth = foo.map(elem => {
           return <div className="numbers" key={elem}>
               {elem}</div> 
       })
   
    return (
        <div>
            <div className="range">
                {rangeOfDaysInMonth}
            </div>
        </div>
    )
}
