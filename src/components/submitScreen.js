import React from 'react'
import './welcome.css'

function Submit() {

    // const data = localStorage.myMap
    let data = eval(localStorage.getItem("key"))
    console.log(data)

    return(
        <div id="submit">
        <h1>
            Thanks For The Feedback !! 
        </h1>
        {data.map((box)=>{
           return <div className='response'> <strong>Question :</strong> {box[0]} <br/> <strong>Answer :</strong> {box[1]} <br/> <br/></div>
        })}
        </div>
    )
}

export default Submit