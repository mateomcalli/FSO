import Course from './components/Course'

const App = () => {
  const course = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          lesson: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          lesson: 'Using props to pass data',
          exercises: 7,   
          id: 2
        },
        {
          lesson: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          lesson: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          lesson: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          lesson: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return <Course course={course} />
}

export default App