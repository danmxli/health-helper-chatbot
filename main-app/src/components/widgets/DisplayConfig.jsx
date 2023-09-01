import React, { useEffect, setState } from 'react';
import '../../styles/DisplayConfig.css';

const DisplayConfig = (props) => {
    const { setState } = props;

    useEffect(() => {
        // fetch 
        fetch('http://localhost:8080/config')
            .then(response => response.json())
            .then(data => {
                if (data && data.data) {
                    console.log(data);
                    setState((state) => ({ ...state, displayConfig: data.data }));
                }
            })
    }, [setState])

    const renderDefinition = () => {
        const { displayConfig } = props;
        if (!displayConfig || displayConfig.length === 0) {
            return <p>No data to display</p>;
        }

        return (
            <div className='config-box-item'>
                <ul>
                    {displayConfig.map((item) => (
                        <li key={item._id}>
                            name: {item.name}, prompt: {item.prompt}
                        </li>
                    ))}
                </ul>
            </div>

        );
    }

    return renderDefinition();
}

export default DisplayConfig;
