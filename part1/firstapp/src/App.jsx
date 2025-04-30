import { useState } from 'react'

const Header = () => <h1>We would appreciate your feedback!</h1>

const Button = ({onClick, text}) => {
  return (
    <button onClick = {onClick}>
      {text}
    </button>
  )
}

const StatisticLine = (props) => { // must be enclosed in a table to work
  return (
    <tbody>
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr>
    </tbody>
  )
}

const Statistics = (props) => {
  return (
    <table>
      <StatisticLine text = 'good' value = {props.good}/>
      <StatisticLine text = 'bad' value = {props.bad}/>
      <StatisticLine text = 'neutral' value = {props.neutral}/>
      <StatisticLine text = 'total' value = {props.total}/>
      <StatisticLine text = 'average' value = {props.average}/>
      <StatisticLine text = 'positive' value = {props.positive}/>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)
  let total = good+bad+neutral
  let average = (good + (-1*bad)) / total
  let positive = (good/total)*100 + '%'
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