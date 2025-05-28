import Countries from "./Countries"
import Search from "./Search"

const Content = ({values, handlers, countries, select}) => {
    const search = {search: values.search}
    const handleSearchInput = {handleSearchInput : handlers.handleSearchInput}
    return(
        <>
            <Search search={values.search} searchHandler={handlers.handleSearchInput}/>
            <Countries countries={countries} select={select}/>
        </>
    )
}

export default Content