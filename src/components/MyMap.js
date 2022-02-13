import React from "react";
import { Map, Marker } from "pigeon-maps";

export default function MyMap(props) {
  const { lat, lng, countryData } = props;

  return (
    <>
      {!countryData ? (
        <p>Loading ...</p>
      ) : (
        <Map height={300} defaultCenter={[lat, lng]} defaultZoom={10}>
          <Marker width={50} anchor={[lat, lng]} />
        </Map>
      )}
    </>
  );
}
