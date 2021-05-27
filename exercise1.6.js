import React, { useState } from 'react'


  
const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const [value, setValue] = useState(10)

  const setToValue = (newValue) => {
    setValue(newValue)
  }
  

  return (
    
      <div>
      <div>
      <h1>give feedback</h1>
    </div>
      
      <button onClick={() => setToValue(value + 1)}>
        good
      </button>
      <button onClick={() => setToValue(value + 1)}>
        neutral
      </button>
      <button onClick={() => setToValue(value + 1)}>
        bad
      </button>
      <h1>statictics</h1>
      <p>good{value}</p>
      <p>neutral{value}</p>
      <p>bad{value}</p>
    </div>

  )
}
export default App