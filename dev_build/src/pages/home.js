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
        <div className="bigcontainer">
            <div className="content accent">
                <h1><span className="outline">This is </span><TypedSpan /></h1> {/* TypedSpan found in ../components/typedspan.js, typewriter component that's messy and big due to software limitations so it got abstracted */}
                <p>Allen ISD's computer science program is dedicated to helping students explore the distinct aspects of technology and programming and prepare for future careers in computer science, cybersecurity, and more.</p>
            </div>
            <div className="content plain">
                <div className="pcontainer">
                    <p>Welcome to the official webpage for Allen ISD's computer science forum. Students are encouraged to attend weekly forum meetings held every Wednesday after school at the STEAM center. The CS Forum has a vast collection of distinct subforums which hold smaller meets during forum times in conjunction with their own special meeting days. Each subforum is focused on their own special fields of focus in regards to computer science. Check them out!</p>
                </div>
                <hr className="shorthr"></hr>
                <Carousel /> {/* Carousel found in ../components/carousel.js, slideshow component/card carousel that also would clutter this page's code since it requires a bunch of tables & constants */}
            </div>
        </div>
    );
}
