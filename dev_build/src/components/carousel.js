import React from 'react';

import Slider from 'react-slick'
import { clubs, settings } from './sfconstants.js';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/carouselstyle.css';

export default function Carousel() {
    return (
        <div className="carousel-container">
            <Slider {...settings}>
                {clubs.map((club) => (
                    <div className="card">
                        <div className="header">
                            <h2 className="club-name">{club.name}</h2>
                        </div>
                        <div className="club-data">
                            <span className="club-desc">{club.desc}</span>
                            <button className="club-bttn">Read More</button>     
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}