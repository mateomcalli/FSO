const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const app = express()

app.use(express.json())
app.use(morgan('tiny'))
app.use(cors())
app.use(express.static('dist'))

let contacts = [
  { 
    "id": "1",
    "name": "Arto Hellas", 
    "number": "040-123456"
  },
  { 
    "id": "2",
    "name": "Ada Lovelace", 
    "number": "39-44-5323523"
  },
  { 
    "id": "3",
    "name": "Dan Abramov", 
    "number": "12-43-234345"
  },
  { 
    "id": "4",
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122"
  }
]

app.get('/', (request, response) => {
  response.send(`
    <h1>Phonebook backend root</h1>
    <p>Use the commands '/api/contacts' or '/api/contacts/id'</p>
  `)
})

app.get('/api/contacts', (request, response) => {
  response.json(contacts)
})

app.get('/api/contacts/:id', (request, response) => {
  const id = request.params.id
  const contact = contacts.find(contact => contact.id === id)

  if (contact) {
    response.json(contact)
  } else {
    response.status(404).end()
  }
})

app.get('/info', (request, response) => {
  const time = new Date()
  response.send(`
    <p>Phonebook has info for ${contacts.length} people</p>
    <p>${time}</p>
  `)
})

app.delete('/api/contacts/:id', (request, response) => {
  const id = request.params.id
  contacts = contacts.filter(contact => contact.id !== id)
  response.status(204).end()
})

app.post('/api/contacts/', (request, response) => {
  const new_id = Math.max(...contacts.map(contact => Number(contact.id))) + 1
  const body = request.body

  if (!body.name || !body.number) {
    return response.status(400).json({
      error: 'name or number is miissing'
    })
  } else if (contacts.some(contact => contact.name.toLowerCase() === body.name.toLowerCase())) {
    return response.status(400).json({
      error: 'duplicate entry detected'
    })
  }

  const contact = {
    id: new_id.toString(),
    name: body.name,
    number: body.number
  }

  contacts = contacts.concat(contact)
  response.json(contact)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})