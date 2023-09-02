import React, { useEffect, setState, useState } from 'react';
import '../../styles/DisplayConfig.css'

const NlpResponse = (props) => {
    const { setState } = props;
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        var users = {};

        fetch('http://localhost:8080/config')
            .then(response => response.json())
            .then(documents => {
                if (documents && documents.data) {
                    users = documents.data;
                    console.log(users)
                }

                users.forEach((item) => {
                    fetch(`http://localhost:3001/process-text?text=${item.prompt}`, {
                        method: 'POST',
                    })
                        .then((res) => {
                            if (!res.ok) {
                                throw new Error('HTTP request failed');
                            }
                            return res.json();
                        })
                        .then((data) => {
                            const answer = item.name.toString() + ": " + data.answer.toString();
                            setAnswers((prevAnswers) => [...prevAnswers, answer]);
                        })
                        .catch((error) => {
                            console.error('Fetch error:', error);
                            throw error;
                        });
                })
            })

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