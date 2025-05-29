const Note = ({ note, toggleImportance }) => {
  return (
    <li className="note">
      {note.content}
      <button onClick={toggleImportance}>
        make {note.important ? 'not' : ''} important
      </button>
    </li>
  )
}

export default Note