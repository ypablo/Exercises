import React from 'react'





export default function Days() {
    
        const month = new Date().getMonth() + 1
        const year = new Date().getFullYear()
        const numberDaysOfMonth  = new Date(year, month, 0).getDate();
        
       
       let foo = []
        for (let i=1; i <= numberDaysOfMonth; i++){
            foo.push(i)
        }

       let rangeOfDaysInMonth = foo.map(elem => elem)
   
    return (
        <div>
            {numberDaysOfMonth}
        <br/>
            {rangeOfDaysInMonth}
        
        </div>
    )
}
