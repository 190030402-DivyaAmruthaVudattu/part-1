import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0); //Since the value is 0, the first anecdote will always by the first in the Anedoctes Array
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0]); //Since we have 6 anecdotes, we now have a array with 6 spaces for hold the votes for each anecdote

  let change; //This variable will hold the current

  const newAnecdote = () => {
    change = () => Math.floor(Math.random() * anecdotes.length); //This will generate a random number from 0 to the length of the array
    setSelected(change);
  };

  const addVote = () => {
    //1) Copy of the last state of votes
    const votesCopy = [...votes];
    //2) Increment by one the value for the correspondent anecdote
    votesCopy[selected] += 1; //Grab the last value and add 1
    //3) Set the array with the update votes to the component's state
    setVotes(votesCopy);
  };

  return (
    <div>
      {anecdotes[selected]}
      <br />
      has {votes[selected]} votes
      <div>
        <button onClick={addVote}>vote</button>
        <button onClick={newAnecdote}>new anecdote</button>
      </div>
    </div>
  );
};
const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
];
ReactDOM.render(
  <React.StrictMode>
    <App anecdotes={anecdotes} />
  </React.StrictMode>,
  document.getElementById("root")
);
export default App