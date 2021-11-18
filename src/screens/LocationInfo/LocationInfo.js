import React, { useState, useEffect } from "react";
import "./LocationInfo.scss";
import axios from "axios";
import LocationCard from "../../components/Location/LocationCard";
import Loading from "../../components/Loading/Loading";

const LocationInfo = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      getLocations(lat, long);
    });
  }, [navigator]);

  const getLocations = (lat, long) => {
    setLoading(true);
    axios
      .get(
        `https://www.metaweather.com/api/location/search/?lattlong=${lat},${long}`
      )
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className="main-page">
        {data?.map((loc) => {
          return <LocationCard key={loc.woeid} data={loc} />;
        })}
      </div>
    );
  }
};

export default LocationInfo;
