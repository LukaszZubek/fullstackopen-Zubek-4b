const Search = ({handler, search}) => {
    return(
        <>
            filter shown with <input value={search} onChange={handler}/>
        </>
    )
}

export default Search