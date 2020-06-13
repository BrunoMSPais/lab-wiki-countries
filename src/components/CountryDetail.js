import React from 'react';
import countriesFromJason from '../countries.json'
import { NavLink } from 'react-router-dom';

function CountryDetail(props) {
    let countryDetails = countriesFromJason.find((country) => country.cca3 === props.match.params.id);
    let countriesBorders = countriesFromJason.filter((country) => country.borders.includes(countryDetails.cca3));

    return (
        <div className="col-7">
            <h2>Coutry Details</h2>
            <h3>{countryDetails.name.common}</h3>
            <table class="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: "30%"}}>Capital</td>
                  <td>{countryDetails.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{countryDetails.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                    {countriesBorders.map((country, i) => {
                        return (
                            <li key={i} style={{'list-style': 'none'}}>
                                <NavLink to={`/${country.cca3}`}>
                                    {country.name.common}
                                </NavLink>
                            </li>
                        )
                    })}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
        </div>
    )
};

export default CountryDetail;