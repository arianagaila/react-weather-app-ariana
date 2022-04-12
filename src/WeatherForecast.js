import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";
import { useState } from "react";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    console.log(response.data);
  }

  if (loaded) {
    let apiKey = "abe8133e2a18c1d21a8707cbc98dbdb8";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=,metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  } else {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">Thu</div>
            <WeatherIcon code="01d" size={25} />
            <div className="WeatherForecast-temp">
              <span className="WeatherForecast-temperature-max">19°</span>
              <span className="WeatherForecast-temperature-min">10°</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
