import React from "react";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let hours = props.hour.getHour();
  let minutes = props.minutes.getMinutes();
  return (
    <div>
      {day} {hours}:{minutes}
    </div>
  );
}
