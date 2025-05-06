import { useState, useEffect } from 'react'
import PhonebookData from './services/PhonebookData'
import S_Notification from './components/S_Notification'
import Filter from './components/Filter'
import AddNew from './components/AddNew'
import Display from './components/Display'
import './styles.css'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [notiMessage, setNotiMessage] = useState(null)

  useEffect(() => {
    // React effect hook, GETs data from server and
    // uses it to populate the persons array.
    PhonebookData
    .get()
    .then(initial => setPersons(initial))
  }, [])

  const addPerson = (event) => {
  /* Goes through various checks and adds a person to the 
     persons array, adding their name, number and id. Also
     resets the text fields at the end.    
  */
    event.preventDefault()
    if (persons.some(person => person.name === name)) {
      const existingPerson = persons.find(person => person.name === name)

      if (window.confirm(`${name} is already in the phonebook. Replace the old number?`)) {
        const updatedPerson = {...existingPerson, number: number}
        PhonebookData
        .update(updatedPerson.id, updatedPerson)
        .then(uP => {
          setPersons(persons.map(person => person.id !== updatedPerson.id ? person : uP))
          setNotiMessage(`${updatedPerson.name} has been added to the phonebook.`)
          setTimeout(() => {
            setNotiMessage(null)
          }, 3000)
        })
      }

    } else if (name === '' || number === '') {
      alert(`Cannot submit a person without a name and number.`)
    } else {
      const newPerson = {
        name: name,
        number: number
      }
      PhonebookData
      .add(newPerson)
      .then(newPerson => {
        setPersons(persons.concat(newPerson))
        setNotiMessage(`${newPerson.name} has been added to the phonebook.`)
          setTimeout(() => {
            setNotiMessage(null)
          }, 3000)
      })
    }
    setName('')
    setNumber('')
  }
  const removePerson = (id,n) => {
    if (window.confirm(`delete ${n}?`)) {
      PhonebookData
      .remove(id)
      .then(() => setPersons(persons.filter(person => person.id !== id)))
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <S_Notification message = {notiMessage}/>
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
      <Display filter = {filter} persons = {persons} removePerson={removePerson}/>
    </div>
  )
}

export default App