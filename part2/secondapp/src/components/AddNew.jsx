const AddNew = ({name, number, addPerson, setName, setNumber}) => {
  const handleNameChange = (event) => {
    setNumber(event.target.value)
  }
    
  const handleChange = (event) => {
    setName(event.target.value)
  }

  return (
    <form>
      <div>
        name: <input value={name} onChange={handleChange}/>
      </div>
      <div>
        number: <input value={number} onChange={handleNameChange}/>
      </div>
      <div>
        <button type="submit" onClick = {addPerson}>add</button>
      </div>
    </form>
  )
}

export default AddNew