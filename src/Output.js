import React from 'react';
export default function Output(props) {
    return (
        <div>
            <input disabled value={props.output}/><br/>
            <input disabled value={props.inputValue}/>
        </div>
    )
}