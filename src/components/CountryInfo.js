import React from "react";
import { DateTime, FixedOffsetZone } from "luxon";

export default function CountryInfo(props) {
  const { countryData, countryCode } = props;
  // console.log(countryCode);
  // console.log(countryData);

  console.log(DateTime.now());

  return (
    <section>
      {countryData && (
        <>
          <img
            src={`https://flagcdn.com/28x21/${countryCode.toLowerCase()}.png`}
            width="55"
            height="41"
            alt={countryData.name.common}
          ></img>
          <h2>{countryData.name.official}</h2>
          <div></div>
          <div>
            <p>Continent: {countryData.region}</p>
            <p>Population: {countryData.population}</p>
            <p>Capital: {countryData.capital[0]}</p>
            <p>
              Currency: {countryData.currencies.EUR.name}
              <span> {countryData.currencies.EUR.symbol}</span>
            </p>
            <p>Timezone: {countryData.timezones[0]}</p>
          </div>
        </>
      )}
    </section>
  );
}
