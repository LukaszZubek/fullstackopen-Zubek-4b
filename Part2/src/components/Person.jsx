const Person = ({name, phone, id, onDelete}) => {
    return(
        <p>
            {name} {phone}
            <button onClick={() => window.confirm(`Delete ${name}?`) ? onDelete(id) : []}>
                delete
            </button>
        </p>
    )
}

export default Person