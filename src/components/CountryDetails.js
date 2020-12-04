import React from 'react'
import { wikiCountries } from './CountriesList'
import {Link} from 'react-router-dom'

export default function CountryDetails(props) {
    console.log(wikiCountries)
    const countryId = props.match.params.id;
    console.log(props.match)
    const country = wikiCountries.find(country => country.cca3 === countryId) 
    return (
        <div className="countryDetails">
            <h2>{country.name.common}</h2>
            <hr/>
            <p>Capital: {country.capital}</p>
            <p>Area: {country.area} km<sup>2</sup></p>
            <p>Borders: </p> 
            <ul> {
                country.borders.map(bordercounty => {
                    return (
                    <li>{bordercounty}</li> )
                })
            }
            </ul>
        </div>
    )
}
