import React, { useState ,useEffect } from "react";
import Ques from "./Question";
import './quizPage.css'
const data = [
    {
      "id": 1,
      "question": "How satisfied are you with our products?",
      "answerType": 1
    },
    {
      "id": 2,
      "question": "How fair are the prices compared to similar retailers?",
      "answerType": 1
    },
    {
        "id": 3,
        "question": "How satisfied are you with the value for money of your purchase?",
        "answerType": 1
    },
    {
    "id": 4,
    "question": "On a scale of 1-10 how would you recommend us to your friends and family?",
    "answerType": 2
    },
    {
        "id": 5,
        "question": "What could we do to improve our service?",
        "answerType": 3
    },
]
function Quiz () {

    const size = data.length

    return (
        <div id="QuesList">
        {
            data.map((box,index)=>{return<Ques n={size} box={box} key={box.id}/>})
        }
        </div>
    )
}

export default Quiz;