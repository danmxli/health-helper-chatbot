import React, { useEffect, setState } from 'react';
import handleConfig from '../../functions/HandleConfig';
import '../../styles/DisplayConfig.css';

const DisplayConfig = (props) => {
    const { setState } = props;

    const renderDefinition = () => {
        const message = "I am your personal healthcare companion."
        return message;
    }

    return <div className="config-box-item">
        {renderDefinition()}
    </div>;
}

export default DisplayConfig;
