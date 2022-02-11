import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import MyMap from "./components/MyMap";
import CountryInfo from "./components/CountryInfo";

function App() {
  const [location, setLocation] = useState("");
  const [ipAddress, setIpAddress] = useState("");
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [countryData, setCountryData] = useState("");

  useEffect(() => {
    getIP();
    getCountryInfo();
  }, []);

  function getIP() {
    axios
      .get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_IPIFY_KEY}`
      )
      .then((res) => {
        // console.log(res.data.location);
        setLocation(res.data.location);
        setIpAddress(res.data.ip);
        setLat(res.data.location.lat);
        setLng(res.data.location.lng);
      })
      .catch((err) => console.log("err", err));
  }

  function getCountryInfo() {
    axios
      .get(`https://restcountries.com/v3.1/alpha/${location.country}`)
      .then((res) => {
        // console.log(res.data[0]);
        setCountryData(res.data[0]);
      })
      .catch((err) => console.log("err", err));
  }

  return (
    <div className="App">
      <h1>Find my IP</h1>
      {location ? (
        <ul>
          <li>IP: {ipAddress}</li>
          <li>Country: {location.country}</li>
          <li>Region: {location.region}</li>
          <li>City: {location.city}</li>
          <li>Timezone: {location.timezone}</li>
          <li>Latitude: {lat}</li>
          <li>Longitude: {lng}</li>
        </ul>
      ) : (
        <p>Loading...</p>
      )}
      <div>
        <MyMap lat={lat} lng={lng} />
      </div>
      <div>
        <CountryInfo countryData={countryData} />
      </div>
    </div>
  );
}

export default App;
