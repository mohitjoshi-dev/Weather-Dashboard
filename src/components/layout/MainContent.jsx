import CurrentWeather from "../weather/CurrentWeather";
import DashboardHeader from "../weather/DashboardHeader";
import Highlights from "../weather/Highlights";
import Forecast from "../weather/Forecast";
import WeeklyForecast from "../weather/WeeklyForecast";
import WeatherMap from "../weather/WeatherMap";
import AirQuality from "../weather/AirQuality";
 
import { useState, useEffect } from "react";

function MainContent() {
  const [city, setCity] = useState(
  localStorage.getItem("lastCity") || "New Delhi");

  const [displayLocation, setDisplayLocation] = useState(
  localStorage.getItem("lastDisplayLocation") || "New Delhi"
);

   useEffect(() => {
          localStorage.setItem("lastCity", city);
    }, [city]);

    useEffect(() => {
  localStorage.setItem("lastDisplayLocation", displayLocation);
}, [displayLocation]);

  return (
    <main className="flex-1">
      <div className="grid gap-6 lg:grid-cols-[1.15fr_1fr_1fr]">

        {/* Current Weather */}
        <CurrentWeather
          city={city}
          displayLocation={displayLocation}
        />

        {/* Header */}
        <div className="lg:col-span-2">
          <DashboardHeader
            city={city}
            setCity={setCity}
            setDisplayLocation={setDisplayLocation}
          />
        </div>

        {/* Weather Highlights */}
        <div className="space-y-5">
          <Highlights city={city} />
          <AirQuality city={city} />
        </div>

        {/* Hourly Forecast */}
        <div>
          <Forecast city={city} />
        </div>

        {/* Weekly Forecast */}
        <div>
          <WeeklyForecast city={city} />
        </div>

        {/* Maps */}
        <div className="lg:col-span-3">
          <WeatherMap city={city} />
        </div>

      </div>
    </main>
  );
}

export default MainContent;