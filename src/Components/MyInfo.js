import React from "react";

var firstName = "Andrew";
var lastName = "Ball";
var someWord = "ball";
const MyInfo = () =>
    <div>
        <h1>{`${firstName} ${lastName}`} And A {someWord}</h1>
        <p>There's a lot of stuff to say about me.</p>
        <p className="other-works">LINKS TO OTHER WORKS</p>
        <p><a href="https://andrewball79.github.io/laserLinks/DiceRoller">DICE ROLLER</a></p>
        <p><a href="https://andrewball79.github.io/laserLinks/mrLewis">MR. LEWIS & THE FUNERAL 5</a></p>
        <p><a href="https://gardenseedr.com">GARDENSEEDR</a></p>
        <p><a href="https://andrewball79.github.io/laserLinks/weatherMap">WEATHER MAP</a></p>
        <p><a href="https://andrewball79.github.io/laserLinks/gradientLife">GRADIENT MIND</a></p>
    </div>;

export default MyInfo