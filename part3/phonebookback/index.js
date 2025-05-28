require('dotenv').config()
const express = require('express')
const Person = require('./models/mongo_setup')
const cors = require('cors')
const morgan = require('morgan')
const app = express()

app.use(express.static('dist'))
app.use(express.json())
app.use(morgan('tiny'))
app.use(cors())


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

app.get('/api/contacts/:id', (request, response, next) => {
  Person.findById(request.params.id)
  .then(person => {
    if (person) {
      response.json(person)
    } else {
      response.status(404).send({error:'id does not match anyone'})
    }
  })
  .catch(error => next(error))
})

app.delete('/api/contacts/:id', (request, response, next) => {
  Person.findByIdAndDelete(request.params.id).then(person => {
    if (person){
      response.json(`deleted ${person.name}`)
    } else {
      response.status(404).send({error: 'id does not match anyone'})
    }
  })
  .catch(error => next(error))
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

  return contact.save().then(savedContact => {
    response.json(savedContact)
  })
})

app.put('/api/contacts/:id', (request, response, next) => {
  const {name, number} = request.body

  Person.findById(request.params.id)
  .then(person => {
    if (person){
      person.name = name
      person.number = number
      return person.save().then(updatedPerson => {
        response.json(updatedPerson)
      })
    } else {
      response.status(404).send({error:'id does not match anyone'})
    }
  })
  .catch(error => next(error))
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({error: 'unknown endpoint'})
}
app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  if (error.name === 'CastError'){
    return response.status(400).send({error: 'malformatted id'})
  }
  next(error)
}
app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})