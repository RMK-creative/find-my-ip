import React from "react";
import "./countryInfo.css";
import { DateTime, FixedOffsetZone } from "luxon";

export default function CountryInfo(props) {
  const { countryData, countryCode } = props;

  // console.log(DateTime.now());

  return (
    <section className="section country-info">
      {countryData && (
        <>
          <div className="country-title">
            <img
              src={`https://flagcdn.com/72x54/${countryCode.toLowerCase()}.png`}
              width="72"
              height="54"
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
        </>
      )}
    </section>
  );
}
