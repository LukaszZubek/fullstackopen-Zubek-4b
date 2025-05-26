import Person from './Person'

const Content = ({persons, search}) => {
    return(
        <div>
            {
                (search.trim() != '')
                ? persons.filter(person => (person.name.toLowerCase().includes(search) || person.phone.includes(search))).map(person => <Person key={person.name} name={person.name} phone={person.phone} />)
                : persons.map(person => <Person key={person.name} name={person.name} phone={person.phone} />)
            }
        </div>
    )
}

export default Content