import React from 'react';
import { NavLink } from 'react-router-dom';
import countrieFromJason from '../countries.json';

function CountriesList() {
    return (
        <div className="col-5" style={{'max-height': '90vh', overflow: 'scroll'}}>
            <h2>Countries</h2>
            <ul className="list-group">
            {countrieFromJason.map((country, i) => {
                return (
                    <li style={{'list-style': 'none'}}>
                        <NavLink to={`/${country.cca3}`}>
                            <div class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                <img src={`https://www.countryflags.io/${country.cca2}/flat/64.png`} alt="flag" className="col-4" style={{width: '100%', height: '50%'}}/>
                                <strong className="col-8">{country.name.common}</strong>
                            </div>
                        </NavLink>
                    </li>
                )
            })}
            </ul>
        </div>
    )
};

export default CountriesList;