import Numbers from './Numbers'
import Notification from './Notification'
import Header from './Header'
import Search from './Search'
import NewPersonForm from './NewPersonForm'

const Content = ({persons, values, notification, handlers}) => {
    return(
        <>
            <Header text={'Phonebook'} />
                <Search handler={handlers.handleSearchInput} />
            <Header text={'add a new'} />
                <NewPersonForm handlers={{handleNameInput : handlers.handleNameInput, handlePhoneInput : handlers.handlePhoneInput, addPerson : handlers.addPerson}} values={{newName : values.newName, newPhone : values.newPhone}}/>
            <Header text={'Numbers'} />
                <Notification text={notification}/>
                <Numbers persons={persons} search={values.search} onDelete={handlers.removePerson} />
        </>
    )
}

export default Content