import React, { useState } from 'react'


const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const [good, setGood] = useState(0)
  const setToGood = (newValue) => {
    setGood(newValue)
  }
  const [neutral, setNeutral] = useState(0)
  const setToNeutral = (newValue) => {
    setNeutral(newValue)
  }
  const [bad, setBad] = useState(0)
  const setToBad= (newValue) => {
    setBad(newValue)
  }

  
  
  

  return (
    
      <div>
      <div>
      <h1>give feedback</h1>
    </div>
      
      <button onClick={() => setToGood(good+ 1)}>
        good
      </button>
      <button onClick={() => setToNeutral(neutral + 1)}>
        neutral
      </button>
      <button onClick={() => setToBad(bad+ 1)}>
        bad
      </button>
      

      <h1>statictics</h1>
      <p>good{good}</p>
      <p>neutral{neutral}</p>
      <p>bad{bad}</p>
      <p>all{good+neutral+bad}</p>
      <p>average{good+neutral+bad/2}</p>
      <p>positive{(good/2)*100}</p>
    </div>

  )
}
export default App