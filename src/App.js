import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import MyMap from "./components/MyMap";
import CountryInfo from "./components/CountryInfo";

function App() {
  const [location, setLocation] = useState("");
  const [ipAddress, setIpAddress] = useState("");
  const [lat, setLat] = useState([]);
  const [lng, setLng] = useState([]);
  const [countryData, setCountryData] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [timezone, setTimezone] = useState("");

  useEffect(() => {
    getLocationData();
  }, []);

  const getLocationData = () => {
    getIP().then((countryCode) => {
      getCountryInfo(countryCode);
    });
  };

  const getIP = async () => {
    return new Promise((getCountryCode) => {
      try {
        axios
          .get(
            `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_IPIFY_KEY}`
          )
          .then((res) => {
            // console.log("get IP res", res);
            setLocation(res.data.location);
            setIpAddress(res.data.ip);
            setLat(res.data.location.lat);
            setLng(res.data.location.lng);
            // setTimezone(res.data.timezones[0]);
            getCountryCode(res.data.location.country);
          });
      } catch (error) {
        console.log("err", error);
      }
    });
  };

  const getCountryInfo = async (countryCode) => {
    try {
      const resp = await axios
        .get(`https://restcountries.com/v3.1/alpha/${countryCode}`)
        .then((res) => {
          // console.log("CountryInfo", res);
          setCountryData(res.data[0]);
          setCountryCode(countryCode);
        });
    } catch (error) {
      console.log("err", error);
    }
  };

  // console.log(timezone);

  return (
    <div className="App">
      <h1 className="heading">Find my IP</h1>
      <section className="section ip-detail">
        {location ? (
          <div>
            <h2 className="subheading">IP: {ipAddress}</h2>
            <ul className="ip-facts">
              <li>Country: {location.country}</li>
              <li>Region: {location.region}</li>
              <li>City: {location.city}</li>
              <li>Timezone: {location.timezone}</li>
              <li>Latitude: {lat}</li>
              <li>Longitude: {lng}</li>
            </ul>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </section>
      <div>
        <MyMap lat={lat} lng={lng} countryData={countryData} />
      </div>

      <div>
        <CountryInfo countryData={countryData} countryCode={countryCode} />
      </div>
    </div>
  );
}

export default App;
