import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.info.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.info.date} />
        </li>
        <li className="text-capitalize">{props.info.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <img src={props.info.iconUrl} alt={props.info.description} />
          <span className="temperature">{props.info.temperature}</span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>humidity: {props.info.humidity}%</li>
            <li>wind: {props.info.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
