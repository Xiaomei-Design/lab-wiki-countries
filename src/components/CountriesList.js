import React from "react";
import {Link} from 'react-router-dom'
import wikiCountries from '../countries.json'


function CountriesList() {
    return (
    <div>
      
      {wikiCountries.map(country => {
        return (
          <div key={country.cca3}>
            <ul>
                <li>
                    <Link to={`/countries/${country.cca3}`}>
                    {country.flag} { }
                    {country.name.common}
                    </Link>
                </li>
            </ul>
          </div>
        );
      })}
    </div>
  )
}

export {CountriesList, wikiCountries}

