const Note = ({ note, toggleImportance }) => {
  return (
    <li>
      {note.content}
      <button onClick={toggleImportance}>
        make {note.important ? 'not' : ''} important
      </button>
    </li>
  )
}

export default Note