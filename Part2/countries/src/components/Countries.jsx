import Country from "./Country"
import CountryFull from "./CountryFull"

const Countries = ({countries, select}) => {
    const selCountry = select.selCountry
    const setSelCountry = select.setSelCountry

    if (selCountry != null)
        return <div><CountryFull country={countries.find(c => c.cca2 === selCountry)} /></div>
    else if (countries.length > 10) 
        return <div>Too many matches, specify another filter</div>
    else if (countries.length > 1) 
        return <div>{countries.map(c => <Country key={c.cca2} country={c} setSelCountry={setSelCountry}/>)}</div>
    else if (countries.length < 1)
        return <div>No matches, specify another filter</div>
    else
        return <div><CountryFull country={countries[0]}/></div>
}

export default Countries