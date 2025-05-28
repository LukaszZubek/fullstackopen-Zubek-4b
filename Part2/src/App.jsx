import { useState } from 'react'
import Content from './components/Content'
import personsService from './components/services/persons'
import { useEffect } from 'react'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [search, setSearch] = useState('')
  const [notification, setNotification] = useState(null)

  const handleNameInput = (event) => {
    setNewName(event.target.value)
  }
  const handlePhoneInput = (event) => {
    setNewPhone(event.target.value)
  }
  const handleSearchInput = (event) => {
    setSearch(event.target.value)
  }

  useEffect(() => {personsService.getAll().then(response => {setPersons(response)}).catch(() => {alert("error loading phonebook")})}, [])

  const newNotification = (text, time) => {
    setNotification(text)
    console.log(text, time)
    setTimeout(() => {
      setNotification(null)
    }, time * 1000);
  }

  const removePerson = id => {
    personsService.remove(id)
    setPersons(persons.filter(p => p.id !== id))
    newNotification(`Removed ${persons.find(p => p.id === id).name}`, 5)
  }
  
  const resetInput = () => {
    setNewPhone('')
    setNewName('')
  }
  const addPerson = (event) => {
    event.preventDefault()
    if(!persons.some(person => person.phone === newPhone))
      {
        if(!persons.some(person => person.name === newName)){
          const newPerson = {
            name: newName,
            phone: newPhone
          }

          personsService.create(newPerson)
            .then(
              r => {
                setPersons(persons.concat(r))
                newNotification(`Added ${newName}`, 5)
                resetInput()
              }
            )
        }
        else if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
          const personToUpdate = persons.find(p => p.name === newName)

          const newPerson = {
            ...personToUpdate,
            phone: newPhone
          }

          personsService.update(newPerson)
            .then(
              () => {
                setPersons(persons.map(p => p.id === newPerson.id ? newPerson : p))
                newNotification(`Updated ${newName} (${personToUpdate.phone} -> ${newPhone})`, 5)
                resetInput()
              }
            )
        }
      }
    else
      alert(`${newPhone} is already added to phonebook`)
  }

  return (
    <div>
      <Content persons={persons} values={{newName, newPhone, search}} notification={notification} handlers={{handleSearchInput, handleNameInput, handlePhoneInput, addPerson, removePerson}}/>
    </div>
    
  )
}

export default App