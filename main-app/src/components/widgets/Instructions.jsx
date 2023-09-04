import React, { useEffect, setState } from 'react';
import '../../styles/AboutMe.css'

const Instructions = (props) => {
    const { setState } = props;

    return <div className="instructions-box-item">
        <h4>Display configuration settings for tips:</h4>
        <li>
            Write "<code>config</code>" and hit <code>enter</code>
        </li>
        <h4>Generate health tips:</h4>
        <li>
            Write "<code>tip</code>" and hit <code>enter</code>
        </li>
        <h4>Add a configuration setting</h4>
        <li>In progress and hit <code>enter</code></li>
        <h4>Remove a configuration setting</h4>
        <li>In progress and hit <code>enter</code></li>
    </div>;
}

export default Instructions;