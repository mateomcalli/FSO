import { useState } from 'react'

const Header = () => <h1>We would appreciate your feedback!</h1>

const Button = ({onClick, text}) => {
  return (
    <button onClick = {onClick}>
      {text}
    </button>
  )
}

const Statistics = (props) => {
  return (
    <p>
    Good ratings: {props.good}<br/>
    Bad ratings: {props.bad}<br/>
    Neutral ratings: {props.neutral}<br/>
    Total ratings: {props.total}<br/>
    Average: {props.average}<br/>
    Positive rating %: {props.positive}%
  </p>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)
  let total = good+bad+neutral
  let average = (good + (-1*bad)) / total
  let positive = (good/total)*100
  const checker = () => {
    if (total === 0) {
      return <p>No feedback given.</p>
    } 
    return (
      <Statistics
        good = {good}
        bad = {bad}
        neutral = {neutral}
        total = {total}
        average = {average}
        positive = {positive}
      />
    )
}
    
  return (
    <div>
      <Header />
      <Button onClick = {() => setGood(good + 1)} text = 'good'/>
      <Button onClick = {() => setBad(bad + 1)} text = 'bad'/>
      <Button onClick = {() => setNeutral(neutral + 1)} text = 'neutral'/>
      {checker()}
    </div>
  )
}

export default App