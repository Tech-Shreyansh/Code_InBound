import React from "react";
var globalMap = new Map();

function Rating (props) {

    var bubbles = []
    for(let i=1;i<=props.n;i++)
    bubbles.push(<div id={props.q+ "bub" + i } className="bubble" onClick={()=>{
        globalMap.set(props.question,i);
        // localStorage.setItem("globalMap",globalMap);
        console.log(globalMap)
        for(let a=1;a<=props.n;a++)
        document.getElementById(props.q+ "bub" + a ).style.backgroundColor="white";
        document.getElementById(props.q+ "bub" + i ).style.backgroundColor="green"
    }}>{i}</div>)
    return(
        <div className="rating">
        {(props.n===0)?<textarea onChange={(e)=>{globalMap.set(props.box.question,e.target.value);console.log(globalMap)}} maxLength={500} className="textArea" />:bubbles}
        </div>
    )
}

export default Rating;