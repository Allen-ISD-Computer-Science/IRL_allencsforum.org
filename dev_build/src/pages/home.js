import React from 'react';
import Carousel from '../components/carousel.js'
import TypedSpan from '../components/typedspan.js'
import '../css/pagestyle.css';

export default function HomePage() {
    return (
        <div className="bigcontainer">
            <div className="content accent">
                <h1><span className="outline">This is </span><TypedSpan /></h1>
                <p>Allen ISD's computer science program is dedicated to helping students explore the distinct aspects of technology and programming and prepare for future careers in computer science, cybersecurity, and more.</p>
            </div>
            <div className="content plain">
                <div className="pcontainer">
                    <p>Welcome to the official webpage for Allen ISD's computer science forum. Students are encouraged to attend weekly forum meetings held every Wednesday after school at the STEAM center. The CS Forum has a vast collection of distinct subforums which hold smaller meets during forum times in conjunction with their own special meeting days. Each subforum is focused on their own special fields of focus in regards to computer science. Check them out!</p>
                </div>
                <hr className="shorthr"></hr>
                <Carousel />
            </div>
        </div>
    );
}