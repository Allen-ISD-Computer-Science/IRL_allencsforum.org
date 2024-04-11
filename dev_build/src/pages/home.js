
import React from 'react';
import Carousel from '../components/carousel.js'
import TypedSpan from '../components/typedspan.js'
import '../css/pagestyle.css';

/*
    Current splash page for the website. Mostly just filler yapping until told otherwise that there's official mission statements for the forum
    divs and paragraphs! yay!
*/

export default function HomePage() {
    return (
        <>
            <div id="splash">
                <div id="splashcontainer">
                    <h1><span className="outline">This is </span><TypedSpan /></h1> {/* TypedSpan found in ../components/typedspan.js, typewriter component that's messy and big due to software limitations so it got abstracted */}
                    <p>Allen ISD's computer science program is dedicated to helping students explore the distinct aspects of technology and programming and prepare for future careers in computer science, cybersecurity, and more.</p>
                </div>
            </div>
            <div className="buffer"></div>
            <div className="fill-partway imgdesc">
                <div className="spanholder">
                    <h4>Welcome to the official webpage for Allen ISD's computer science program!</h4>
                    <span className="yapping">Students are encouraged to attend weekly forum meetings held every Wednesday after school at the STEAM center. The CS Forum has a vast collection of distinct subforums which hold smaller meets during forum times in conjunction with their own special meeting days. Each subforum is focused on their own special fields of focus in regards to computer science.</span>
                </div>
                <img src={require('../assets/Illustration3.png')}></img>
            </div>
            <div className="buffer"></div>
            <div className="fill-screen justify-center">
                <span className="thin-header">Here are a few of the student-driven clubs and organizations we host.</span>
                <Carousel/>
            </div>
        </>
    );
}
