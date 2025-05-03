const Display = ({persons, filter}) => {
  return (
  /* Compares the inputted name with the filter and only
     displays the names that comply with the filter (by using map)
  */
    <div>
      {persons
      .filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
      .map(person => (
        <div key={person.id}>
          {person.name} {person.number}
        </div>
      ))}
    </div>
  )
}

export default Display