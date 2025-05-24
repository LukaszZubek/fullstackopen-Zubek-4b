import { useState } from 'react'
import Content from './components/Content'

const App = () => {
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      phone: '780 213 458'
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

  const handleNameImput = (event) => {
    setNewName(event.target.value)
  }
  const handlePhoneImput = (event) => {
    setNewPhone(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    if(!persons.some(person => person.name === newName))
      {
        if(!persons.some(person => person.phone === newPhone)){
          const newPerson = {
            name: newName,
            phone: newPhone
          }
          setPersons(persons.concat(newPerson))
        }
        else
          alert(`${newPhone} is already added to phonebook`)
      }
    else
      alert(`${newName} is already added to phonebook`)

  }

  return (
    <div>
      <h2>Phonebook</h2>
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
      <Content persons={persons} />
    </div>
    
  )
}

export default App