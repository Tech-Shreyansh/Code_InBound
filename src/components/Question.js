import React from "react";
import { useNavigate } from "react-router-dom";
import Rating from "./ratingBox";

function Ques(props){
    const navHandler = useNavigate()
    const state = props.box.id
    return(
        <div className="ques" id= {"ques" + state}>
            <h2>Customer Survey</h2>
            <span>{state}/{props.n}</span><br/><br/>
            <p>{state}.&nbsp;&nbsp;&nbsp;{props.box.question}</p>
            {(props.box.answerType==1)?<Rating question={props.box.question} n={5} q={state} />:(props.box.answerType==2)?<Rating question={props.box.question} n={10} q={state} />:<Rating question={props.box.question} n={0} q={state} />}<br/> 
            {(state===1)?<></>:<div className="prev" onClick={()=>{document.getElementById("ques" + (state-1)).style.display = "block"}}>
            Previous
            </div>}
            {(state===props.n)?<div className="next" onClick={()=>{navHandler('/answer')}}>Submit</div>:<div className="next" onClick={()=>{document.getElementById("ques" + state).style.display = "none"}}>
            Next
        </div>}
        </div>
    )
}

export default Ques;