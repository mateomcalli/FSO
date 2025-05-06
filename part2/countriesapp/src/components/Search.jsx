import axios from 'axios'
import { useEffect } from 'react'

const Search = ({ country, handleChange, setAllCountries, allCountries }) => {
  const nameLink = `https://studies.cs.helsinki.fi/restcountries/api/name/${country}`

  useEffect(() => {
    const mainLink = `https://studies.cs.helsinki.fi/restcountries/api/all`
    axios.get(mainLink).then(response => setAllCountries(response.data))
  }, [])

  return (
    <input onChange = {handleChange}></input>
  )
}

export default Search