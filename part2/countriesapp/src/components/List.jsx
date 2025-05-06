import Display from './Display'

const List = ({ country, allCountries }) => {
  if (country === null) {
    return null
  }

  const matches = allCountries.filter(i => i.name.common.toLowerCase().includes(country.toLowerCase()))
  
  if (matches.length > 10) {
    return <p>Too many matches, specify further.</p>
  }

  else if (matches.length === 1) {
    return (
      <Display country = {matches[0]}/>
    )
  }
  return (
    <div>
      {matches.map(match => 
        <div key = {match.name.common}>{match.name.common}</div>
      )}
    </div>
  )
}

export default List