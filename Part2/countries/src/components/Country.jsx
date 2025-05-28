import CountryFull from "./CountryFull"

const Country = ({country, setSelCountry}) => {
    
    return (
        <div>
            {country.name.common}
            <button onClick={() => setSelCountry(country.cca2)}>
                show
            </button>
        </div>
    )
}

export default Country