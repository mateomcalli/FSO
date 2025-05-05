import axios from 'axios'

const link = 'http://localhost:3001/persons'

const get = () => {
  return (
    axios
    .get(link)
    .then(response => response.data)
  )
}

const add = (newPerson) => {
  return (
    axios
      .post(link, newPerson)
      .then(response => response.data)
  )
}
export default {get,add}