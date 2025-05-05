const Display = ({persons, filter, removePerson}) => {
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
          <button type = "button" onClick = {() => removePerson(person.id,person.name)}>delete</button>
        </div>
      ))}
    </div>
  )
}

export default Display