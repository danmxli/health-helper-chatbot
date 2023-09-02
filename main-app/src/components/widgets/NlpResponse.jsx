import React, { useEffect, setState, useState } from 'react';
import '../../styles/DisplayConfig.css'

const NlpResponse = (props) => {
    const { setState } = props;
    const [answers, setAnswers] = useState([]);

    useEffect(() => {

        fetch('http://localhost:3001/process-text?text=eyes', {
            method: 'POST',
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error('HTTP request failed');
                }
                return res.json();
            })
            .then((data) => {
                const answer = data.answer.toString();
                setAnswers((prevAnswers) => [...prevAnswers, answer]);
            })
            .catch((error) => {
                console.error('Fetch error:', error);
                throw error;
            });
    }, [setState])

    const renderDefinition = () => {
        const noDuplicate = new Set();
        answers.forEach((answer) => {
            noDuplicate.add(answer);
        });
        var uniqueAnswers = Array.from(noDuplicate);
        var numAnswers = uniqueAnswers.length;

        return (
            <div className='config-box-item'>
                <header>Tips:〘{numAnswers}〙</header>
                <ul>
                    {uniqueAnswers.map((answer, index) => (
                        <li key={index}>{answer}</li>
                    ))}
                </ul>
            </div>
        );
    }

    return renderDefinition();
}

export default NlpResponse;