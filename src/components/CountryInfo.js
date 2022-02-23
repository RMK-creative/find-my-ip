import React from "react";
import "./countryInfo.css";
import { DateTime, FixedOffsetZone } from "luxon";

export default function CountryInfo(props) {
  const { countryData, countryCode } = props;

  // console.log(DateTime.now());

  return (
    <section className="section country-info">
      <h2>Information about your current location</h2>
      {countryData && (
        <section className="country-facts">
          <div className="country-name">
            <img
              src={`https://flagcdn.com/40x30/${countryCode.toLowerCase()}.png`}
              width="40"
              height="30"
              alt={countryData.name.common}
            ></img>
            <h2>{countryData.name.common}</h2>
          </div>

          <div className="country-data">
            <p>Continent: {countryData.region}</p>
            <p>Population: {countryData.population}</p>
            <p>Capital: {countryData.capital[0]}</p>
            <p>
              Currency: {countryData.currencies.EUR.name}
              <span> {countryData.currencies.EUR.symbol}</span>
            </p>
          </div>
        </section>
      )}
    </section>
  );
}
