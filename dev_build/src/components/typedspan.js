import Typewriter from 'typewriter-effect';

export default function TypedSpan() {
    return (
        <Typewriter
        onInit={(typewriter) => {
            typewriter.changeDelay(70)

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