/*
    No HTML/CSS to be found here, literally just constants that are mapped/unpacked as arguments for slider formatting (thus *SF*constants.js)
*/

/*
    Slider settings, don't change the appearance but they do change behavior (swap speed, autoplay, # of slides shown, etc.)
    Documentation found at react-slick-carousel (google), @ mohib please LMK if the behavior seems off 
*/
export const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    draggable: false,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1
};

/*
    Placeholder bum text for clubs because half of these don't have mission statements! Mr. Ben, please force them to make some!!
    Unsure whether or not to make buttons redirect to club homepages or just compile clubs into one page with regurgitated mission statements because
    I only know one organization that has a genuine website (Cybersecurity)
*/

export const clubs = [
    {
        name: 'CSHS',
        orgtype: 'Clubs',
        img: '../assets/lou.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        name: 'Game Development',
        orgtype: 'Clubs',
        img: '../assets/lou.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        name: 'Mr. Ben Merch Store',
        orgtype: 'Clubs',
        img: '../assets/lou.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        name: 'Cybersecurity',
        orgtype: 'Competitions',
        img: '../assets/lou.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        name: 'OC3',
        orgtype: 'Competitions',
        img: '../assets/lou.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        name: 'Project RENEW',
        orgtype: 'Projects',
        img: '../assets/lou.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        name: 'Project MAE',
        orgtype: 'Projects',
        img: '../assets/lou.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        name: 'IRL Dev',
        orgtype: 'Internships',
        img: '../assets/lou.jpg',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
]