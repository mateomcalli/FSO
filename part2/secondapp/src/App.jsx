import { useState } from 'react'
import Filter from './components/Filter'
import AddNew from './components/AddNew'
import Display from './components/Display'

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Vicky Molina', number: '305-610-8813', id: 1}]) 
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [filter, setFilter] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.some(person => person.name === name)) {
      alert(`${name} is already in the phonebook.`)
    } else if (name === '' || number === '') {
      alert(`Cannot submit a person without a name and number.`)
    } else {
      setPersons(persons.concat({
        name: name,
        number: number,
        id: persons.length + 1
      }))
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