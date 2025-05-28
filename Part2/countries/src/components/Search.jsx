const Search = ({search, searchHandler}) => {
    return(
        <>
            find countries <input value={search} onChange={searchHandler}></input>
        </>
    )
}

export default Search