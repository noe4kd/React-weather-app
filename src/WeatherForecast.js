import axios from "axios";
import React, { useState } from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState();

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">Thu </div>
            <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"></img>{" "}
            <div className="WeatherForcast-temperature">
              <spann className="WeatherForecast-temperature-max me-1">
                19°
              </spann>
              <spann className="WeatherForecast-temperature-min opacity-75 ms-1">
                10°
              </spann>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "342951afb0fafa28b3f533o92049314t";
    let latitude = props.coordinates.longitude;
    let longitude = props.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }
}
