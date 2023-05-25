import React from "react";
import Rating from "./ratingBox";

function Ques(props){
    const state = props.box.id
    // console.log(props)
    return(
        <div className="ques" id= {"ques" + state}>
            <h2>Customer Survey</h2>
            <span>{state}/{props.n}</span><br/><br/>
            <p>{state}.&nbsp;&nbsp;&nbsp;{props.box.question}</p>
            <Rating />
        </div>
    )
}

export default Ques;