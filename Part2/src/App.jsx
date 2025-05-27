import { useState } from 'react'
import Content from './components/Content'
import personsService from './components/services/persons'
import { useEffect } from 'react'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [search, setSearch] = useState('')

  const handleNameImput = (event) => {
    setNewName(event.target.value)
  }
  const handlePhoneImput = (event) => {
    setNewPhone(event.target.value)
  }
  const handleSearchInput = (event) => {
    setSearch(event.target.value)
  }

  const removePerson = id => {
    personsService.remove(id)
    setPersons(persons.filter(p => p.id !== id))
  }

  useEffect(() => {personsService.getAll().then(response => {setPersons(response)}).catch(() => {alert("error loading phonebook")})}, [])

  const addPerson = (event) => {
    event.preventDefault()
    if(!persons.some(person => person.phone === newPhone))
      {
        if(!persons.some(person => person.name === newName)){
          const newPerson = {
            name: newName,
            phone: newPhone
          }

          personsService.create(newPerson).then(() => setPersons(persons.concat(newPerson)))
        }
        else if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
          const newPerson = {
            name: newName,
            phone: newPhone
          }

          personsService.update(newPerson).then(() => setPersons(persons.map(p => p.id === newPerson.id ? newPerson : p)))
        }
      }
    else
      alert(`${newPhone} is already added to phonebook`)

  }

  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with <input value={search} onChange={handleSearchInput}/>
      <h2>add a new</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNameImput}/>
        </div>
        <div>
          phone: <input value={newPhone} onChange={handlePhoneImput}/>
        </div>
        <div>
          <button type="submit" onClick={addPerson}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Content persons={persons} search={search} onDelete={removePerson}/>
    </div>
    
  )
}

export default App