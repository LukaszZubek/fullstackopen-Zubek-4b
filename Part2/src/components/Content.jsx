import Search from './Search'

const Content = ({persons, search, onDelete}) => {
    return(
        <Search persons={persons} search={search} onDelete={onDelete} />
    )
}

export default Content