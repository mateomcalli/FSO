import { useState } from 'react'
import Search from './components/Search'
import List from './components/List'
import Display from './components/Display'
import './styles.css'

const App = () => {
  const [country, setCountry] = useState(null)
  const [allCountries, setAllCountries] = useState(null)
  const [selected, setSelected] = useState(null)

  const handleChange = (event) => {
    event.preventDefault()
    setCountry(event.target.value)
    setSelected(null)
  }

  return (
    <div>
      <h1>Search for a country</h1>
      <Search allCountries = {allCountries} country = {country} handleChange = {handleChange} setAllCountries = {setAllCountries}/>
      <List country = {country} allCountries = {allCountries} setSelected = {setSelected}/>
      {selected && <Display country={selected}/>}
    </div>
  )
}

export default App