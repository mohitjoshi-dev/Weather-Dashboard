import { Card } from "@/components/ui/card";
import useWeather from "@/hooks/useWeather";
import AnimatedWeatherIcon from "./AnimatedWeatherIcon";
import { useSettings } from "@/context/SettingsProvider";
import WeeklyForecastSkeleton from "@/components/skeletons/WeeklyForecastSkeleton";

function WeeklyForecast({ city }) {

  const { weather, loading, error } = useWeather(city);
  const { tempUnit } = useSettings();

  if (loading) return <WeeklyForecastSkeleton />;
  if (error) return <div>{error}</div>;

  const weeklyForecast = weather.forecast.forecastday;

  return (
    <Card className="h-full rounded-3xl border border-border bg-card p-5">

      <p className="text-xs uppercase tracking-[0.35em] text-primary">
        7 Day Forecast
      </p>

      <div className="mt-6 space-y-3">

        {weeklyForecast.map((day) => (

  <div
  key={day.date}
  className="flex items-center justify-between rounded-xl p-2 transition-all duration-300 hover:bg-background hover:translate-x-1 hover:scale-[1.02] 
             cursor-pointer">

    <div className="flex items-center gap-3">

      <AnimatedWeatherIcon
        condition={day.day.condition.text}
        isDay={1}
        size={42}
      />

      <div>

        <p className="font-medium">
          {new Date(day.date).toLocaleDateString("en-US", {
            weekday: "short",
          })}
        </p>

        <p className="text-xs text-muted-foreground">
          {day.day.condition.text}
        </p>
      </div>
    </div>

         <p className="font-semibold">

            {tempUnit === "c"
              ? Math.round(day.day.maxtemp_c)
              : Math.round(day.day.maxtemp_f)}
            °{tempUnit.toUpperCase()}

            /

            {tempUnit === "c"
              ? Math.round(day.day.mintemp_c)
              : Math.round(day.day.mintemp_f)}
            °{tempUnit.toUpperCase()}

        </p>
  </div>

))}

    </div>

    </Card>
  );
}

export default WeeklyForecast;