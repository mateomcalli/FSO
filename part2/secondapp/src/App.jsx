import { useState, useEffect } from 'react'
import PhonebookData from './services/PhonebookData'
import Filter from './components/Filter'
import AddNew from './components/AddNew'
import Display from './components/Display'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    // React effect hook, GETs data from server and
    // uses it to populate the persons array.
    PhonebookData
    .get()
    .then(initial => setPersons(initial))
  })

  const addPerson = (event) => {
  /* Goes through various checks and adds a person to the 
     persons array, adding their name, number and id. Also
     resets the text fields at the end.    
  */
    event.preventDefault()
    if (persons.some(person => person.name === name)) {
      alert(`${name} is already in the phonebook.`)
    } else if (name === '' || number === '') {
      alert(`Cannot submit a person without a name and number.`)
    } else {
      const newPerson = {
        name: name,
        number: number
      }
      PhonebookData
      .add(newPerson)
      .then(newPerson => setPersons(persons.concat(newPerson)))
    }
    setName('')
    setNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter = {filter} setFilter = {setFilter}/>
      <h3>Add a new</h3>
      <AddNew 
        name = {name}
        number = {number} 
        addPerson = {addPerson} 
        setName = {setName} 
        setNumber = {setNumber}
      />
      <h3>Numbers</h3>
      <Display filter = {filter} persons = {persons}/>
    </div>
  )
}

export default App