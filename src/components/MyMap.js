import React from "react";
import { Map, Marker } from "pigeon-maps";
import "./map.css";

export default function MyMap(props) {
  const { lat, lng, countryData } = props;

  return (
    <section className="map">
      {!countryData ? (
        <p>Loading ...</p>
      ) : (
        <Map height={400} defaultCenter={[lat, lng]} defaultZoom={10}>
          <Marker width={50} anchor={[lat, lng]} />
        </Map>
      )}
    </section>
  );
}
