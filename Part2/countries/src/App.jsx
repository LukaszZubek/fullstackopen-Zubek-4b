import { useState } from 'react'
import { useEffect } from 'react'
import Content from './components/Content'
import CountriesService from './components/services/CountriesService'

function App() {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')
  const [selCountry, setSelCountry] = useState(null)

  const searchResult = () => {
    if (search.trim() != '')
      return countries.filter(c => c.name.common.includes(search))
    else
      return countries
  }

  const handleSearchInput = event => {
    setSearch(event.target.value)
    setSelCountry(null)
  }

  useEffect(() => {CountriesService.getAll().then(r => setCountries(r))}, [])
  return (
    <>
      <Content values={{search}} handlers={{handleSearchInput}} countries={searchResult()} select={{selCountry, setSelCountry}} />
    </>
  )
}

export default App
