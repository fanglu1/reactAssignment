import React, { useState } from "react";

const Button = ({ handleClick, text }) => (<button onClick={handleClick}>    {text}  </button>)
const Statistics = (props) => {
  return (
    <h2>{props.Statistics}</h2>
  )}
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodClick = () => {
    setGood(good + 1)
  }
  const neutralClick = () => {
    setNeutral(neutral + 1)
  }
  const badClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={goodClick} text='Good'/>
      <Button handleClick={neutralClick} text='Neutral'/>
      <Button handleClick={badClick} text='Bad'/>
      <Statistics text={Statistics}/>
      <h2> Statistics </h2>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      <p>All {good + bad +neutral}</p>
      <p>Average {(good -bad) / ( good +bad + neutral)}</p>
      <p>Positive {(good)  / ( good +bad + neutral) * 100 + "%"} </p>
    </div>
  )
}
export default App;
