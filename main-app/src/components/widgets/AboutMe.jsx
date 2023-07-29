import React, { useEffect, setState } from 'react';
import '../../styles/AboutMe.css'

const AboutMe = (props) => {
    const { setState } = props;

    const renderDefinition = () => {
        const message = "I am a website chatbot designed to help you familiarize yourself with insurance terms."
        return message;
    }

    return <div className = "about-box-item">
        {renderDefinition()}
    </div>;
}

export default AboutMe;