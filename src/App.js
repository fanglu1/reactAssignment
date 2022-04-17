import React, { useState } from "react";

const Button = ({ handleClick1, handleClick2, handleClick3 }) => {
  return (
  <div>
  <button onClick={handleClick1}> Good </button>
  <button onClick={handleClick2}> Neutral </button>
  <button onClick={handleClick3}> Bad </button>
  </div>
  )
  };

const StatisticsLine = (props) => {
  return (
    <>
      <p>{props.text} {props.value}</p>
    </>
);
  }

const Statistics = ({good, bad, neutral}) => {
  if (good + bad + neutral === 0) {
  return (
    <div>
    <h2>No feedback given</h2>
  </div>
  );
}
else{
  return (
    <div>
    <StatisticsLine text={"Good:"} value={good} />
      <StatisticsLine text={"Neutral:"} value={neutral} />
      <StatisticsLine text={"Bad:"} value={bad} />
      <StatisticsLine text={"All:"} value={good + bad + neutral} />
      <StatisticsLine text={"Average:"} value={(good - bad) / (good + bad + neutral)} />
      <StatisticsLine text={"Positive:"} value={(good) / (good + bad + neutral) * 100 + "%"}/>
      </div>
  )
};
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodClick = () => {
    setGood(good + 1);
  };

  const badClick = () => {
    setBad(bad + 1);
  };

  const neutralClick = () => {
    setNeutral(neutral + 1);
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick1={goodClick} handleClick2={neutralClick} handleClick3={badClick} />
      
      <Statistics />
      
    </div>
  );
};

export default App;
