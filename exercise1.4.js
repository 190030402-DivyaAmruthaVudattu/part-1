import logo from './logo.svg';
import './App.css';
import React from 'react'
const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  const Content =  ({parts}) => {
    const [part1, part2, part3] = parts;
    return (
      <div>
        <p>Part Name :  {part1.name}       No.of Exercises : {part1.exercises} </p>
        <p>Part Name :  {part2.name}       No.of Exercises : {part2.exercises} </p>
        <p>Part Name :  {part3.name}      No.of Exercises : {part3.exercises} </p>
       
      </div>
    )
    }
  const Total =  ({parts}) => {
    const [part1, part2, part3] = parts;
      return (
        <div >
          <p> Total Number of Exercises : {part1.exercises + part2.exercises + part3.exercises }</p>
        </div>
      
    );
      }
