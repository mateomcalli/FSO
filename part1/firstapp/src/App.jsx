const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.name}, {props.exercises}</p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.name} exercises={props.exercises}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Total exercises {props.total}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course}/>
      <Content name={parts[0].name} exercises={parts[0].exercises}/>
      <Content name={parts[1].name} exercises={parts[1].exercises}/>
      <Content name={parts[2].name} exercises={parts[2].exercises}/>
      <Total total={parts[0].exercises+parts[1].exercises+parts[2].exercises}/>
    </div>
  )
}

export default App