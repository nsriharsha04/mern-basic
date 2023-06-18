import React, {useState} from 'react';

import GoalList from './components/GoalList/GoalList';
import TestComponent from './components/TestComponent';
import NewGoal from './components/NewGoal/NewGoal'
import './App.css';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    {id: 'cg1', text: 'Finish the Course'},
    {id: 'cg2', text: 'Learn all about the Course Main Topic'},
    {id: 'cg3', text: 'Help other students in the Course Q&A'},
  ]);
  // const courseGoals = [
  //   {id: 'cg1', text: 'Finish the Course'},
  //   {id: 'cg2', text: 'Learn all about the Course Main Topic'},
  //   {id: 'cg3', text: 'Help other students in the Course Q&A'},
  // ];

  const addNewGoalHandler = (newgoal) => {
    // setCourseGoals(courseGoals.concat(newGoal));
    setCourseGoals(prevCourseGoals => prevCourseGoals.concat(newgoal));
    // courseGoals.push(newgoal)
    console.log(newgoal);
  }
  const test = 'Hello'
  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <NewGoal addNewGoal = {addNewGoalHandler}/>
      <GoalList goals= {courseGoals}/>
      <TestComponent test= {test}/>
    </div>
  );
};

export default App;
