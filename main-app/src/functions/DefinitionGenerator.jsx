import React, { useEffect, setState } from 'react';

const fetchDefinition = (prompt) => {
    function fetchData() {
        var answer = "";

        return fetch('http://localhost:3001/process-text?text=hello Dan', {
            method: 'POST',
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error('HTTP request failed');
                }
                return res.json();
            })
            .then((data) => {
                answer = data.answer.toString();
                console.log("bot response: " + answer);
                return answer;
            })
            .catch((error) => {
                console.error('Fetch error:', error);
                throw error;
            });
    }
    
    var botResponse = "";

    if (prompt === "define") {
        fetchData();
        return botResponse;
    }
}

export default fetchDefinition;