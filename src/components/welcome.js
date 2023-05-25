import React from "react";
import { useNavigate } from "react-router-dom";
import './welcome.css'

function Welcome () {

    const navHandler = useNavigate()

    return(
        <div id="home">
            <h1>
            Welcome to Our Store !! 
            </h1>
            <h3>Hope You Had a great experience here !! Please Fill This feedback form to help us improve :)</h3>
            <div id="start" onClick={()=>{navHandler('/quiz')}}>Start</div>
        </div>
    )
}

export default Welcome;
