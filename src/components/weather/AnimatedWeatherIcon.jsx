import ClearDay from "@meteocons/svg/fill/clear-day.svg";
import ClearNight from "@meteocons/svg/fill/clear-night.svg";

import PartlyCloudyDay from "@meteocons/svg/fill/partly-cloudy-day.svg";
import PartlyCloudyNight from "@meteocons/svg/fill/partly-cloudy-night.svg";

import Cloudy from "@meteocons/svg/fill/cloudy.svg";
import Overcast from "@meteocons/svg/fill/overcast.svg";

import Mist from "@meteocons/svg/fill/mist.svg";
import Fog from "@meteocons/svg/fill/fog.svg";
import Haze from "@meteocons/svg/fill/haze.svg";

import Rain from "@meteocons/svg/fill/rain.svg";
import Drizzle from "@meteocons/svg/fill/drizzle.svg";

import Thunderstorms from "@meteocons/svg/fill/thunderstorms.svg";

import Snow from "@meteocons/svg/fill/snow.svg";
import Sleet from "@meteocons/svg/fill/sleet.svg";

export default function AnimatedWeatherIcon({
  condition,
  isDay,
  size = 90,
}) {
  const text = condition.toLowerCase();

  let icon = isDay ? ClearDay : ClearNight;

  if (text.includes("mist")) {
    icon = Fog;
  }

  else if (text.includes("fog")) {
    icon = Fog;
  }

  else if (text.includes("haze")) {
    icon = Haze;
  }

  else if (text.includes("overcast")) {
    icon = Overcast;
  }

  else if (text.includes("cloud")) {
    icon = isDay
      ? PartlyCloudyDay
      : PartlyCloudyNight;
  }

  else if (
    text.includes("rain") ||
    text.includes("shower")
  ) {
    icon = Rain;
  }

  else if (
    text.includes("drizzle")
  ) {
    icon = Drizzle;
  }

  else if (
    text.includes("thunder")
  ) {
    icon = Thunderstorms;
  }

  else if (
    text.includes("snow")
  ) {
    icon = Snow;
  }

  else if (
    text.includes("sleet")
  ) {
    icon = Sleet;
  }

  else if (
    text.includes("clear") ||
    text.includes("sunny")
  ) {
    icon = isDay
      ? ClearDay
      : ClearNight;
  }

const actualSize =
  !isDay
    ? size + 18
    : size;

return (
  <img
    src={icon}
    alt={condition}
    width={actualSize}
    height={actualSize}
    draggable={false}
    className="select-none object-contain transition-transform duration-300 hover:scale-110"
  />
);
}