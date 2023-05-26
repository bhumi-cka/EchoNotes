import React from "react";
import LaptopImg from "../Resources/Images/laptop.png";
import Splash from "../Resources/Images/splash.png";
import BulletPoint from "../Resources/Images/bulletpoint.png";
import { Link } from "react-router-dom";
import Background from "../Resources/Images/background.png";

function LandingPage() {
    return (
        <>
        <img class="background" src={Background}></img>
        <div class="landing-page">
        
            {/* Left Side  */}
            <div class="landing-left-side">


                <h1><span class="echo">Echo</span><span class="notes">Notes</span></h1>
                <h3>Effortless Audio Transcription for Online Meetings and Classes.</h3>

                {/* <div class="img-p-flex">
                    <img src={BulletPoint}></img>
                    <p>Ideal for online meetings, conferences, and classes.</p>
                </div>
                <div class="img-p-flex">
                    <img src={BulletPoint}></img>
                    <p>Simplifies note-taking and enhances productivity.</p>
                </div>
                <div class="img-p-flex">
                    <img src={BulletPoint}></img>
                    <p>Supports Indian languages like Hindi and Marathi.</p>
                </div> */}

                <p>Capture and transcribe audio with ease using EchoNotes. Perfect for online meetings, conferences, and classes, this app simplifies note-taking and boosts productivity. With support for Indian languages like <span class="font-reduce">हिंदी</span>, <span class="font-reduce">मराठी</span>, <span class="font-reduce">தமிழ்</span>, and more, breaking language barriers is a breeze. </p>
                
                <Link to="/record">
                    <button class="start-record">Start Transcripting</button>
                </Link>
            </div>

            {/* Right Side  */}
            <div class="landing-right-side">
                <img src={LaptopImg}></img>
            </div>
        </div>
        </>
    )
}

export default LandingPage;