import React from 'react';
import './UserOutput.css';

const useroutput = (props) => {
    return (
        <div>
            <p className="username">My username is {props.username}</p>
            <p className="para">Paragraph 2</p>
        </div>    
    )
}

export default useroutput;