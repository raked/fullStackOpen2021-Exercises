import React, { useState } from 'react'

const Header = (props) => {
  return(
  <>
  <h1>{props.name}</h1>
  </>
  )
}

const Button = (props) => {
  return(
  <>
  <button onClick={props.funct}>
    {props.name}
  </button>
  </>
  )
}

const Statistics = (props) => {
  if (props.allCount === 0){
    return(
      <>
      <tr><td>No feedback given</td></tr>
      </>
    )
  }
  return(
    <>
    <tr><td>{props.name}</td><td>{props.count}{props.symbol}</td></tr>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header name="give feedback"/>
      <Button name="good" funct={() => setGood(good + 1)}/>
      <Button name="neutral" funct={() => setNeutral(neutral + 1)}/>
      <Button name="bad" funct={() => setBad(bad + 1)}/>
      <Header name="statistics"/>
      <table>
        <tbody>
      <Statistics name="good" count={good} allCount={good + neutral + bad}/>
      <Statistics name="neutral" count={neutral} allCount={good + neutral + bad}/>
      <Statistics name="bad" count={bad} allCount={good + neutral + bad}/>
      <Statistics name="all" count={good + neutral + bad} allCount={good + neutral + bad}/>
      <Statistics name="average" count={(good - bad) / (good + neutral + bad)} allCount={good + neutral + bad}/>
      <Statistics name="positive" count={((good) / (good + neutral + bad)) * 100} symbol="%" allCount={good + neutral + bad}/>
      </tbody>
      </table>
    </div>
  )
}

export default App