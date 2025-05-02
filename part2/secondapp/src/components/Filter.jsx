const Filter = ({filter, setFilter}) => {
  const handleFilterChange = (event) => {
      setFilter(event.target.value)
    } 

  return (
    <form>
      filter shown with <input value={filter} onChange={handleFilterChange}></input>
    </form>
  )
}

export default Filter
