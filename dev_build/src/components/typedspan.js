import Typewriter from 'typewriter-effect';

/*
    Custom component for the typewriter effect on the home page; moved from pages/home.js -> here to prevent less clutter on the page
*/
export default function TypedSpan() {
    return (
        <Typewriter
        onInit={(typewriter) => {
            typewriter.changeDelay(70)
            {/* 
                Unfortunately due to limitations of the typewriter package I have to manually write out the strings/wait/deletion durations 
                because the much easier autoplay feature is not able to be configured to avoid deletion of the final string 
            */}
            typewriter.typeString('CS Honor Society')
            .pauseFor(1500)
            .deleteAll()
            typewriter.typeString('Cybersecurity')
            .pauseFor(1500)
            .deleteAll()
            typewriter.typeString('OC3')
            .pauseFor(1500)
            .deleteAll()
            typewriter.typeString('Project RENEW')
            .pauseFor(1500)
            .deleteChars(5)
            typewriter.typeString('MAE')
            .pauseFor(1500)
            .deleteAll()
            typewriter.typeString('Allen CS.')
            .start();
        }}
        />
    );
};