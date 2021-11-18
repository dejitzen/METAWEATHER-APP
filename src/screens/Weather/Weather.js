import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Loading from "../../components/Loading/Loading";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import "./Weather.scss";

export default function Weather() {
  const { woeid } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    getWeatherById(woeid);
  }, [woeid]);
  const getWeatherById = (woeid = '839722') => {
    axios
      .get(`https://www.metaweather.com/api/location/${woeid}`)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  if (loading) {
    return <Loading />;
  } else {
    const { title, parent, consolidated_weather } = data;
    const countryName = parent.title;
    return (
      <div className="weather-wrapper">
        <div className="back-and-title">
          <h1>
            {title}, {countryName}
          </h1>
          <b
            onClick={() => {
              navigate("/");
            }}
          >
            Go to locations
          </b>
        </div>
        <div className="weather-list">
          {consolidated_weather.map((weather) => {
            return <WeatherCard key={weather.id} data={weather} />;
          })}
        </div>
      </div>
    );
  }
}
