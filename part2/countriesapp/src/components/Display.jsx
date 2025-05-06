const Display = ({country}) => {
  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>Capital country: {country.capital}</p>
      <p>Area code: {country.area}</p>
      <h2>Languages</h2>
      <div>{Object.values(country.languages).map(lang => <li>{lang}</li>)}</div>
      <img src = {country.flags.png}></img>
    </div>
  )
}

export default Display