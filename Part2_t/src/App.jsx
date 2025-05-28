import { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './components/Note'
import Notification from './components/Notification'
import Footer from './components/Footer'
import noteService from './components/services/notes'


const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    noteService.getAll()
      .then(allNotes => setNotes(allNotes))
      .catch(() => {
        setErrorMessage("couldnt load notes"); setTimeout(
          () => {
            setErrorMessage(null)
          }, 5000
        );
      })
  }, [])

  console.log('render', notes.length, 'notes')

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      id: (notes.length + 1).toString(),
      content: newNote,
      important: Math.random() > 0.5,
    }

    noteService.create(noteObject).then(
      createdNote => {
        setNotes(notes.concat(createdNote))
        setNewNote('')
      }
    ).catch(
      () => {
        setErrorMessage("Note creation error")
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000);
      }
    )
  }

  const toggleImportanceOf = (id) => {
    const note = notes.find(n => n.id === id)
    noteService.update(id, {...note, important: !note.important}).then(
      updatedNote => {
        setNotes(notes.map(note => note.id === id ? updatedNote : note))
      }
    )
    .catch(
      () => {
        setErrorMessage(`note ${note.content} is already deleted`),
        setNotes(notes.filter(n => n.id !== id))
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000);
      }
    )
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const notesToShow = showAll ? notes : notes.filter(note => note.important === true)

  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage} />
      <ul>
        {notesToShow.map(note => 
          <Note key={note.id} note={note} toggleImportance={() => toggleImportanceOf(note.id)}/>
        )}
      </ul>

      <form>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit" onClick={addNote}>
          save
        </button>
        <button type="button" onClick={() => setShowAll(!showAll)}>
          show {showAll ? "important" : "all"}
        </button>
      </form>
      <Footer />
    </div>
  )
}

export default App