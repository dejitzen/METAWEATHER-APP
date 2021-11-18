import moment from "moment";
import React from "react";
import "./WeatherCard.scss";

export default function WeatherCard({ data }) {
  const {
    min_temp,
    max_temp,
    applicable_date,
    weather_state_name,
    weather_state_abbr,
  } = data;
  return (
    <div className="weather-card-wrapper">
      <div className="wave -one"></div>
      <div className="wave -two"></div>
      <div className="wave -three"></div>
      <div className="weathercon">
        <img
          alt="weather-icon"
          src={`https://www.metaweather.com/static/img/weather/${weather_state_abbr}.svg`}
        />
      </div>
      <div className="info">
        <h2 className="location">{weather_state_name}</h2>
        <p className="date">
          {moment(applicable_date).format("dddd | MMM DD")}
        </p>
        <h1 className="temp">
          {parseFloat(min_temp).toFixed(1)} &deg;C |{" "}
          {parseFloat(max_temp).toFixed(1)} &deg;C
        </h1>
      </div>
    </div>
  );
}
