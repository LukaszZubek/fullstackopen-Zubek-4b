import Person from './Person'

const Content = ({persons}) => {
    return(
        <div>
            {persons.map(person => <Person key={person.name} name={person.name} />)}
        </div>
    )
}

export default Content