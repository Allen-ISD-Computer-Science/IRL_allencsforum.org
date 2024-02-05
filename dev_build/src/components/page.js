import React from 'react';
import Carousel from './carousel.js'
import lou from '../assets/lou.jpg'
import '../css/pagestyle.css';

export default function Page() {
    return (
        <div className="bigcontainer">
            <div className="content accent">
                <h1><span className="outline">This is </span>Allen CS.</h1>
                <hr></hr>
                <p>Allen ISD's computer science program is dedicated to helping students explore the distinct aspects of technology and programming and prepare for future careers in computer science, cybersecurity, and more.</p>
            </div>
            <div className="content plain">
                <div className="align-lr">
                    <p className="align-left">Welcome to the official webpage for Allen ISD's computer science forum. Students are encouraged to attend weekly forum meetings held every Wednesday after school at the STEAM center.</p>
                    <img className="align-right" src={lou} alt="placeholder" title="no official image yet. check out my cat"></img>
                </div>
	            <p>The CS Forum has a vast collection of distinct subforums which hold smaller meets during forum times in conjunction with their own special meeting days. Each subforum is focused on their own special fields of focus in regards to computer science. Check them out!</p>
                <hr className="shorthr"></hr>
                <Carousel />
            </div>
        </div>
    );
}