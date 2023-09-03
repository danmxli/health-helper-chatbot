import React, { useEffect, setState } from 'react';
import '../../styles/AboutMe.css'

const AboutMe = (props) => {
    const { setState } = props;

    return <div className="about-box-item">
        My name is Heather! I am your personal healthcare companion. Here's what I can do:
        <li>
            I can provide health tips to you and your friends.
        </li>
        <li>
            I can provide COVID-19 statistics to keep you updated.
        </li>
    </div>;
}

export default AboutMe;