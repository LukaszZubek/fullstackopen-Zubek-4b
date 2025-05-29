const Person = ({name, phone, id, onDelete}) => {
    return(
        <p>
            {name} {phone}
            <button style={{marginLeft: '5px'}} onClick={() => window.confirm(`Delete ${name}?`) ? onDelete(id) : []}>
                delete
            </button>
        </p>
    )
}

export default Person