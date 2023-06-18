import React from 'react'

const TestComponent = (props) => {
    console.log(props.test);
    return (
        <div>
            <h1>Added test component</h1>
            <p>{props.test}</p>
        </div>
    );
}


export default TestComponent