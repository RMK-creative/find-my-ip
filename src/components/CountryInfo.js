import React from "react";
import { DateTime } from "luxon";

export default function CountryInfo(props) {
  const { countryData } = props;
  let countryCode = countryData.cca2.toLowerCase();
  // console.log(countryData.cca2);
  // console.log(instance(offset: number): FixedOffsetZone)

  return (
    <section>
      <h2>{countryData.name.official}</h2>
      <div>
        <img
          src={`https://flagcdn.com/40x30/${countryCode}.png`}
          srcset={`https://flagcdn.com/40x30/${countryCode}.png 2x,
    https://flagcdn.com/72x54/${countryCode}.png 3x`}
          width="80"
          height="50"
          alt="flag"
        />
      </div>
      <div>
        <p>Continent: {countryData.region}</p>
        <p>Population: {countryData.population}</p>
      </div>
    </section>
  );
}
