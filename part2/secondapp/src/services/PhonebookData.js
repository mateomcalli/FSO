import axios from 'axios'

const link = '/api/contacts'

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

const remove = (id) => {
  return (
    axios
    .delete(`http://localhost:3001/api/contacts/${id}`)
    .then(response => response.data)
  )
}

const update = (id, newPerson) => {
  return (
    axios
    .put(`http://localhost:3001/api/contacts/${id}`, newPerson)
    .then(response => response.data)
  )
}
export default { get, add, remove, update }