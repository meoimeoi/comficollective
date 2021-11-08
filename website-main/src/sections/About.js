import photo from '../images/ME.png';

import robotics1 from '../images/high-school/robot1.png';

import pc from '../images/cosplay/pc.png';

import cosplay1 from '../images/cosplay/COSPLAY1.png';
import cosplay2 from '../images/cosplay/cosplay2.png';
import cosplay3 from '../images/cosplay/cosplay3.png';

import fb1 from '../images/fb/fb1.png';
import fb2 from '../images/fb/fb2.png';

function About() {
    return (
        <div className="section">
            <div className="section-left">
                <div className="section-header">
                    Hi! I'm Xiuli
                </div>
                <div className="section-content">
                    <p>
                        I'm a senior software engineer passionate about learning and diving into different technologies to support building impactful sofware based solutions for people.  My expertise is within web and mobile app development end to end,
                        with a focus on thoughtful planning of the architectural design of the system without compromising end user experience and system reliability.
                    </p>

                    <p>
                        Outside of my immediate focus as a software engineer and developer, I am a jack of all trades hobbyist. I enjoy 3d printing/modeling, graphic design, gaining deeper knowledge around music and sound through practicing the violin, and gaming.
                    </p>

                    <p>
                        <b><a href="meoimeoi.co">meoimeoi.co</a></b> is currently a personal portfolio of what I'm working on and random thoughts I've always wanted to share
                        but never put down and articulated on the internet.  I hope whoever stumbles upon this site finds some of the content
                        interesting and useful :) 
                    </p>
                </div>
            </div>

            <div className="section-right">
                <div className="image-section">
                    <img src={photo} className="about-me-photo" alt="xiuli_its_me" />
                    <img src={robotics1} className="about-me-photo" alt="xiuli_its_me" />
                    <img src={pc} className="about-me-photo" alt="xiuli_its_me" />
                    <img src={cosplay1} className="about-me-photo" alt="xiuli_its_me" />
                </div>
                <div className="image-section">
                    
                </div>
            </div>
        </div>);
}
export default About;