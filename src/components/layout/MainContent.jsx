import { Card } from "@/components/ui/card";

import CurrentWeather from "../weather/CurrentWeather";

import DashboardHeader from "../weather/DashboardHeader";

import Highlights from "../weather/Highlights";

import Forecast from "../weather/Forecast";

import WeatherMap from "../weather/WeatherMap";

import { useState } from "react";

function MainContent() {
  const [city, setCity] = useState("New Delhi");

  return (
    <main className="flex-1">

      <div className="grid gap-6 lg:grid-cols-3">

        {/* Current Weather */}

        <CurrentWeather city={city} />
         
        {/* Highlights */}

       <div className="lg:col-span-2">
          <DashboardHeader 
           city={city}
            setCity={setCity}/>
       </div>
        {/* Forecast */}

        <Highlights city={city} />

        {/* Map */}

        <div>
          <div className="lg:col-span-3"></div>
          <Forecast city={city} />
        </div>


        <div className="lg:col-span-2">
          <WeatherMap />
        </div>

      </div>

    </main>
  );
}

export default MainContent;