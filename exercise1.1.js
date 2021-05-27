import logo from './logo.svg';
import './App.css';
import React from 'react'
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    
    const Header = (args) => {
      return (
      <div >
      <h1 >{args.course}</h1>
      </div>
  )
}

     const Content =  (props) => {
     return (
      <div >
      <p>Part Name :  {props.part1}  <br/>      No.of Exercises : {props.exercises1} </p>
     
      </div>
  )
}

      const Total =  (props) => {
      return (
      <div >
      <p> Total Number of Exercises : {props.exercises1 + props.exercises2 + props.exercises3 }</p>
      </div>
      )
    }
  
    
  );
}
 export default App
