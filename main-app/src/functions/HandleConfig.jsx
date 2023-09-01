import React, { useEffect, setState } from 'react';

const handleConfig = () => {
    function fetchData() {
        var answer = "";

        return fetch('http://localhost:8080/config', {
            method: 'GET',
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error('HTTP request failed');
                }
                return res.json();
            })
            .then((data) => {
                console.log(data);
                return data;
            })
            .catch((error) => {
                console.error('Fetch error:', error);
                throw error;
            });
    }
    fetchData();
}

export default handleConfig;