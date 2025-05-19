const mongoose = require('mongoose')

const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]
const url = `mongodb+srv://mateomcallisterschool:${password}@fso.whqcewz.mongodb.net/phonebookApp?retryWrites=true&w=majority&appName=FSO`

mongoose.set('strictQuery',false)
mongoose.connect(url)

const personSchema = new mongoose.Schema({
  name: String,
  number: String
})

const Person = mongoose.model('Person', personSchema)

const person = new Person({
  name: name,
  number: number
})

if (process.argv.length === 5) {
  person.save().then(result => {
    console.log(`Person ${name} saved, with number ${number}`);
    mongoose.connection.close()
  })
} else if (process.argv.length === 3) {
  Person.find({}).then(persons => {
    console.log('phonebook:\n')
    persons.forEach(person => {
      console.log(`${person.name} ${person.number}`)
    })
    mongoose.connection.close()
  })
}