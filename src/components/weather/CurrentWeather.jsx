import { Card } from "@/components/ui/card";
import { Droplets, Wind } from "lucide-react";
 import useWeather from "@/hooks/useWeather";
import AnimatedWeatherIcon from "./AnimatedWeatherIcon";

function CurrentWeather({ city }) {

  const { weather, loading, error } = useWeather(city);

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>{error}</div>;
    }

  return (
    <Card className="h-full rounded-3xl bg-card border border-border p-9">      
      
      <div className="flex h-full flex-col gap-6">

      {/* Cloud Logo */}
    
      <AnimatedWeatherIcon
        condition={weather.current.condition.text}
        isDay={weather.current.is_day}
        size={90}
      />

      {/* Row 1: Status & High/Low */}
    
      <div className="flex items-start justify-between">
        <div className="text-2xl font-bold text-foreground leading-tight">
          {weather.current.condition.text}
        </div>

        
        <div className="w-28 text-right">
          <div className="text-xs uppercase tracking-widest text-muted-foreground">
              High / Low
          </div>
          <div className="text-xl font-medium text-foreground">
            {Math.round(weather.forecast.forecastday[0].day.maxtemp_c)}° /
            {Math.round(weather.forecast.forecastday[0].day.mintemp_c)}°
          </div>
        </div>
      </div>

     
      {/* Row 2: City & Humidity */}
     
      <div className="flex items-center justify-between">
        <div className="text-2xl font-medium text-muted-foreground ">{weather.location.name}</div>
        <div className="text-right mt-7">
        <div className="flex items-center justify-end gap-2">
          <Droplets className="h-6 w-6 text-cyan-400" />

          <span className="text-xs uppercase tracking-widest text-muted-foreground">
            Humidity
          </span>
        </div>

        <p className="mt-1 text-2xl font-semibold text-primary">
          {weather.current.humidity}%
        </p>
       </div>
      </div>

      <hr className="border-border/40" />

     
      {/* Row 3: Big Temp & Wind */}
     
      <div className="flex items-center justify-between">
        <div className="text-7xl font-bold tracking-tight text-foreground">{Math.round(weather.current.temp_c)}°</div>
        <div className="text-right">
        <div className="flex items-center justify-end gap-2">
          <Wind className="h-7 w-7 text-primary" />

          <span className="text-xs uppercase tracking-widest text-muted-foreground">
            Wind
          </span>
        </div>

        <p className="mt-1 text-xl font-medium text-primary">
          {weather.current.wind_kph} km/h
        </p>
      </div>
      </div>

      {/* Feels Like */}
    
      <p className="text-base text-muted-foreground">Feels like {Math.round(weather.current.feelslike_c)}°</p>

      </div>

    </Card>
  );
}

export default CurrentWeather;