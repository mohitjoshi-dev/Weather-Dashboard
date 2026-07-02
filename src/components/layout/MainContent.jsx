import CurrentWeather from "../weather/CurrentWeather";
import DashboardHeader from "../weather/DashboardHeader";
import Highlights from "../weather/Highlights";
import Forecast from "../weather/Forecast";
import WeeklyForecast from "../weather/WeeklyForecast";
import WeatherMap from "../weather/WeatherMap";
import AirQuality from "../weather/AirQuality";

import { useState } from "react";

function MainContent() {
  const [city, setCity] = useState("New Delhi");

  return (
    <main className="flex-1">
      <div className="grid gap-6 lg:grid-cols-[1.15fr_1fr_1fr]">

        {/* Current Weather */}
        <CurrentWeather city={city} />

        {/* Header */}
        <div className="lg:col-span-2">
          <DashboardHeader
            city={city}
            setCity={setCity}
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

        {/* Weather Map */}
        <div className="lg:col-span-2">
          <WeatherMap />
        </div>

      </div>
    </main>
  );
}

export default MainContent;