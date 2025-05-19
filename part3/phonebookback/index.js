require('dotenv').config()
const express = require('express')
const Person = require('./models/mongo_setup')
const cors = require('cors')
const morgan = require('morgan')
const app = express()

app.use(express.json())
app.use(morgan('tiny'))
app.use(cors())
app.use(express.static('dist'))

app.get('/api', (request, response) => {
  response.send(`
    <h1>Phonebook backend root</h1>
    <p>Use the commands '/api/contacts' or '/api/contacts/id'</p>
  `)
})

app.get('/api/contacts', (request, response) => {
  Person.find({}).then(contacts => {
    response.json(contacts)
  })
})

app.get('/api/contacts/:id', (request, response) => {
  Person.findById(request.params.id).then(person => {
    response.json(person)
  })
})

app.delete('/api/contacts/:id', (request, response) => {
  Person.findByIdAndDelete(request.params.id).then(person => {
    response.json(`deleted ${person.name}`)
  })
})

app.post('/api/contacts/', (request, response) => {
  const body = request.body

  if (!body.name || !body.number) {
    return response.status(400).json({
      error: 'name or number is miissing'
    })
  }

  const contact = new Person({
    name: body.name,
    number: body.number
  })

  contact.save().then(savedContact => {
    response.json(savedContact)
  })
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})