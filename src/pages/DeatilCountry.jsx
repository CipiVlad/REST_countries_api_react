import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const DeatilCountry = () => {
    const { name } = useParams();
    const [detail, setDetail] = useState([]);
    const [flag, setFlag] = useState([])
    const [countryName, setCountryName] = useState([]);
    const [nativeName, setNativeName] = useState([]);
    const [currency, setCurrency] = useState([]);
    const [languages, setLanguages] = useState([])
    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${name}`)
            .then(response => response.json())
            .then(data => {
                setFlag(data[0].flags)
                setDetail(data[0])
                setCountryName(data[0].name)
                setNativeName(Object.values(data[0].name.nativeName)[0])
                setCurrency(Object.values(data[0].currencies)[0])
                setLanguages(Object.values(data[0].languages))
            }
            )
    }, [name])

    if (detail)

        return (
            <div>
                <Link to={'/'}>Back</Link>
                <img src={flag.png} alt="" />
                <h2>{countryName.common}</h2>
                <div >
                    <div>
                        <p>Native Name: {nativeName.official}</p>
                        <p>Population: {detail.population}</p>
                        <p>Region: {detail.region}</p>
                        <p>Subregion: {detail.subregion}</p>
                        <p>Capital: {detail.capital}</p>
                    </div>
                    <div>
                        <p>Top Level Domain: {detail.tld}</p>
                        <p>Currencies: {currency.name}</p>
                        <p>Languages: {languages + ""}</p>

                    </div>
                </div>
                <p>{detail.borders + " "}</p>
            </div>
        )
    else return (<h1>Loading...</h1>)

}

export default DeatilCountry