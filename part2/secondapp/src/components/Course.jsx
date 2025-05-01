const Course = ({course}) => {
  return (
    <>
      <h1>Web development curriculum</h1>
      {course.map(course =>
        <div key={course.id}>
          <h2>{course.name}</h2>
            {course.parts.map(part =>
              <p key={part.id}>
                {part.lesson} {part.exercises}
              </p>
            )}
          <p><strong>total of {course.parts.reduce((sum, part) => sum + part.exercises, 0)} exercises</strong></p>
        </div>
      )}
    </>
  )
}

export default Course