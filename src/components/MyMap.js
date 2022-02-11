import React, { useState } from "react";
import { Map, Marker } from "pigeon-maps";

export default function MyMap(props) {
  const { lat, lng } = props;
  // console.log(lat, lng);

  return (
    // <Map height={300} defaultCenter={[lat, lng]} defaultZoom={11}>
    //   <Marker width={50} anchor={[lat, lng]} />
    // </Map>
    <Map height={300} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
      <Marker width={50} anchor={[50.879, 4.6997]} />
    </Map>
  );
}
