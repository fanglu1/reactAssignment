import React, { useState } from "react";

const Button = ({ handleClick, text }) => {
  return (<button onClick={handleClick}>    {text}  </button>)
}

const StatisticsLine = ({ text, value }) => {
  return (
    <>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </>
  );
}
const Statistics = ({ good, bad, neutral, text }) => {


  if (good + bad + neutral === 0) {
    return (
      <div>
        <h2>No feedback given</h2>
      </div>
    );
  }
  else {
    return (
      <div>
        <h2>{text}</h2>
        <table>
          <tbody>
            <StatisticsLine text="Good:" value={good} />
            <StatisticsLine text="Neutral:" value={neutral} />
            <StatisticsLine text="Bad:" value={bad} />
            <StatisticsLine text="All:" value={good + bad + neutral} />
            <StatisticsLine text="Average:" value={(good - bad) / (good + bad + neutral)} />
            <StatisticsLine text="Positive:" value={(good) / (good + bad + neutral) * 100 + "%"} />
          </tbody>
        </table>
      </div>
    )
  };
}

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
      <Button handleClick={goodClick} text='Good' />
      <Button handleClick={neutralClick} text='Neutral' />
      <Button handleClick={badClick} text='Bad' />
      <Statistics text='Statistics' good={good} bad={bad} neutral={neutral} />
    </div>
  )
}



export default App;
