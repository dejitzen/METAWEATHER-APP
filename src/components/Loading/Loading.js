import React from "react";
import "./Loading.scss";
import weatherLoading from "../../assets/weatherLoading.json";
import Lottie from "react-lottie";

export default function Loading() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: weatherLoading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="loading">
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
}
