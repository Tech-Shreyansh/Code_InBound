import React from 'react'
import './welcome.css'

function Submit() {

    // const data = localStorage.myMap
    let data = eval(localStorage.getItem("key"))
    console.log(data)

    return(
        <div>
        {data.map((box)=>{
           return <div> question : {box[0]} <br/> answer : {box[1]}  </div>
        })}
        {/* {data} */}
        </div>
    )
}

export default Submit