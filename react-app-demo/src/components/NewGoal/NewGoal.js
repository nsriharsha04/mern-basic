import React, { useState } from "react";

import './NewGoal.css';

const NewGoal = (props) => {

    const [enteredText, setEnteredText] = useState('');

    const addGoalHandler = (event) => {
        event.preventDefault();

        const newGoal = {
            id: Math.random().toString(),
            text: enteredText//'My new goal!'
        };

        console.log(newGoal);

        setEnteredText('');

        props.addNewGoal(newGoal);
    }


    const newTextHandler = (event) => {
        setEnteredText(event.target.value);
    }

    return (
        <form className="new-goal" onSubmit={addGoalHandler}>
            <input type="text" value={enteredText} onChange={newTextHandler} />
            <button type="submit">Add Goal</button>
        </form>
    );
}



export default NewGoal;


