import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu </div>
          <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"></img>{" "}
          <div className="WeatherForcast-temperature">
            <spann className="WeatherForecast-temperature-max me-1">19°</spann>
            <spann className="WeatherForecast-temperature-min opacity-75 ms-1">
              10°
            </spann>
          </div>
        </div>
      </div>
    </div>
  );
}
