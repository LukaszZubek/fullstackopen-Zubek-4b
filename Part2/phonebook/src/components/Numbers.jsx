import Person from './Person'

const Numbers = ({persons, search, onDelete}) => {
    console.log(persons)
    return(
        <div>
            {
                (search.trim() != '')
                ? persons.filter(person => (person.name.toLowerCase().includes(search) || person.phone.includes(search))).map(person => <Person key={person.id} name={person.name} phone={person.phone} id={person.id} onDelete={onDelete} />)
                : persons.map(person => <Person key={person.id} name={person.name} phone={person.phone} id={person.id} onDelete={onDelete}/>)
            }
        </div>
    )
}

export default Numbers