const Display = ({country}) => {
  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>Capital country: {country.capital}</p>
      <p>Area: {country.area}km<sup>2</sup></p>
      <h2>Languages</h2>
      <div>{Object.values(country.languages).map(lang => <li key={lang}>{lang}</li>)}</div>
      <br></br><img className = "flag" src = {country.flags.png}></img>
    </div>
  )
}

export default Display