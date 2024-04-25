import React from 'react';
const User = (props) => {
    console.warn('props:',props.data.name);
    return (
        <div>
            <h1>Hello There</h1>
            {props.data.name}
            <br/>
            {props.data.profile}
        </div>
    )
}

export default User;