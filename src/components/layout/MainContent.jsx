import { Card } from "@/components/ui/card";

import CurrentWeather from "../weather/CurrentWeather";

import DashboardHeader from "../weather/DashboardHeader";

import Highlights from "../weather/Highlights";

import Forecast from "../weather/Forecast";

import WeatherMap from "../weather/WeatherMap";

function MainContent() {
  return (
    <main className="flex-1">

      <div className="grid gap-6 lg:grid-cols-3">

        {/* Current Weather */}

        <CurrentWeather className="h-95 rounded-3xl bg-card border border-border shadow-xl hover:shadow-2xl transition-all duration-300" />

        {/* Highlights */}

       <div className="lg:col-span-2">
          <DashboardHeader />
       </div>
        {/* Forecast */}

        <Highlights />

        {/* Map */}

        <div>
          <Forecast />
        </div>


        <div className="lg:col-span-2">
          <WeatherMap />
        </div>

      </div>

    </main>
  );
}

export default MainContent;