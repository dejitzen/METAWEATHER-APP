import React from "react";
import faker from "faker";
import { useNavigate } from "react-router-dom";
import "./LocationCard.scss";

export default function LocationCard({ data }) {
  const navigate = useNavigate();
  const navigateToWeatherScreen = (woeid) => {
    navigate(`/weather/${woeid}`);
  };
  const { title, woeid } = data;
  return (
    <div
      onClick={() => {
        navigateToWeatherScreen(woeid);
      }}
      className="location-card"
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${
          faker.image.abstract() + `?random:${data.woeid}`
        })`,
      }}
    >
      <p>{title}</p>
    </div>
  );
}
