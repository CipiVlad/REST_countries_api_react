import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


const AllCountries = () => {
    const [allCountries, setAllCountries] = useState([]);
    const baseUrl = 'https://restcountries.com/v3.1/';

    const [search, setSearch] = useState([])
    const handleSubmit = (e) => e.preventDefault()
    const handleSearch = (e) => {
        if (!e.target.value) return setSearch(allCountries)
        const resultArray =
            allCountries.filter(country => country.name.common.includes(e.target.value))
        setSearch(resultArray)
        console.log(resultArray)
    }

    useEffect(() => {
        fetch(baseUrl + 'all')
            .then(response => response.json())
            .then((json) => {
                setAllCountries(json)
                return json
            })
            .then(json => {
                setSearch(json)
            }
            )
    }, [])
    return (
        <div onSubmit={handleSubmit}>
            <div>
                <input
                    type="text"
                    placeholder="search for a country"
                    onChange={handleSearch} />
            </div >
            <div styles={search ? 'block' : 'none'} >
                {
                    search.map((country, i) =>
                        <div key={i} >
                            <Link to={`/name/${country.name.common.toLowerCase()}`}>
                                <img src={country.flags.png} alt="" />
                            </Link>
                            <h2>{country.name.common}</h2>
                            <p>Population: {country.population}</p>
                            <p>Region: {country.region}</p>
                            <p>Capital: {country.capital}</p>
                        </div>
                    )
                }
            </div>

        </div>
    )
}

export default AllCountries