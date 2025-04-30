import { useState } from 'react'

const Header = () => <h1>We would appreciate your feedback!</h1>

const Button = ({onClick, text}) => {
  return (
    <button onClick = {onClick}>
      {text}
    </button>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)
  let total = good+bad+neutral
  let average = (good + (-1*bad)) / total
  let positive = (good/total)*100

  return (
    <div>
      <Header />
      <Button onClick = {() => setGood(good + 1)} text = 'good'/>
      <Button onClick = {() => setBad(bad + 1)} text = 'bad'/>
      <Button onClick = {() => setNeutral(neutral + 1)} text = 'neutral'/>
      <p>
        Good ratings: {good}<br/>
        Bad ratings: {bad}<br/>
        Neutral ratings: {neutral}<br/>
        Total ratings: {total}<br/>
        Average: {average}<br/>
        Positive rating %: {positive}%
      </p>
    </div>
  )
}

export default App