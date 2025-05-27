const NewPersonForm = ({handlers, values}) => {
    return(
        <form>
        <div>
          name: <input value={values.newName} onChange={handlers.handleNameInput}/>
        </div>
        <div>
          phone: <input value={values.newPhone} onChange={handlers.handlePhoneInput}/>
        </div>
        <div>
          <button type="submit" onClick={handlers.addPerson}>add</button>
        </div>
      </form>
    )
}

export default NewPersonForm