import React, { useEffect, setState } from 'react';
import '../styles/DisplayUsers.css';

const DisplayUsers = (props) => {
    const { setState } = props;

    useEffect(() => {
        // fetch 
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(data => data.json())
            // .then(json => console.log(json))
            .then(data => {
                if (data) {
                    const dataArray = Object.values(data)
                    console.log(dataArray)
                    const slicedArray = dataArray.slice(0, 6)
                    setState(state => ({ ...state, displayUsers: slicedArray }))
                }
            })
    }, [])


    const renderDisplayUsers = () => {
        return props.displayUsers.map((user) => {
            const message = (
                "username: " + user.username + " | website: " + user.website);
            return (<li className='widget-list-item' key={user.id}>
                {message}
            </li>);

        })

    }

    return <div className="todos-widget">
        <ul>
            {renderDisplayUsers()}
        </ul>
    </div>
}

export default DisplayUsers;    