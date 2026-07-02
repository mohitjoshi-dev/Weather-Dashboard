import { Card } from "@/components/ui/card";
import { CloudSun } from "lucide-react";
import useWeather from "@/hooks/useWeather";

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
    
      <CloudSun className="h-20 w-20 text-primary" />

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
        <div className="text-2xl text-muted-foreground">{weather.location.name}</div>
        <div className="text-right">
       <div className="text-xs uppercase tracking-widest text-muted-foreground">
           HUMIDITY
        </div>
        <p className="text-2xl font-semibold text-primary">
          {weather.current.humidity}%
        </p>    
       </div>
      </div>

      <hr className="border-border/40" />

     
      {/* Row 3: Big Temp & Wind */}
     
      <div className="flex items-center justify-between">
        <div className="text-7xl font-bold tracking-tight text-foreground">{Math.round(weather.current.temp_c)}°</div>
        <div className="text-right">
          <div className="text-sm text-muted-foreground">WIND</div>
          <div className="text-xl font-medium text-primary">{weather.current.wind_kph} km/h</div>
        </div>
      </div>

      {/* Feels Like */}
    
      <p className="text-base text-muted-foreground">Feels like {Math.round(weather.current.feelslike_c)}°</p>

      </div>

    </Card>
  );
}

export default CurrentWeather;