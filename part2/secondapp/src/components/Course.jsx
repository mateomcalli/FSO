const Course = (props) => {
  let sum = 0
  props.course.parts.forEach(part => {sum += part.exercises})
  return (
    <div>
      <h1>{props.course.name}</h1>
      {props.course.parts.map(part => <p key={part.id}>{part.name} {part.exercises}</p>)}
      <p><strong>total of {sum} exercises</strong></p>
    </div>
  )
}

export default Course