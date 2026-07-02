import { Card } from "@/components/ui/card";
import {Cloud, CloudRain, Moon, Sun,} from "lucide-react";
import useWeather from "@/hooks/useWeather";



{/* created array for easiness */}


function Forecast({city}) {
const { weather, loading, error } = useWeather(city);

if (loading) return <div>Loading...</div>;
if (error) return <div>{error}</div>;

const currentHour = new Date().getHours();

const hourlyForecast = weather.forecast.forecastday[0].hour
  .slice(currentHour, currentHour + 4);

  return (
    <Card className="h-full w-full rounded-3xl border border-border bg-card p-5">

      <p className="text-xs uppercase tracking-[0.35em] text-primary">
        Hourly Forecast
      </p>


        <div className="mt-8 grid grid-cols-4 gap-3">
        {hourlyForecast.map((item, index) => (
          <div
            key={item.time}
            className={`flex-1 flex flex-col items-center justify-between rounded-2xl p-5 transition-all duration-300 ${
                index === 0
                  ? "bg-primary/15 border border-primary/40 shadow-lg shadow-primary/20"
                  : "hover:bg-background"
                }`}
            >
            <div className="h-8 flex items-center justify-center">
            <p className="text-xs uppercase tracking-wide text-muted-foreground text-center">
              {index === 0
              ? "NOW"
              : new Date(item.time).toLocaleTimeString([], {
                  hour: "numeric",
                  hour12: true,
                })}
            </p>
            </div>

            <div className="my-5 h-14 flex items-center justify-center">
            <img
              src={`https:${item.condition.icon}`}
              alt={item.condition.text}
              className="h-12 w-12 object-contain"
            />
            </div>

            <h3 className="text-xl font-semibold">
              {Math.round(item.temp_c)}°
            </h3>

            <p className="mt-2 h-12 text-[11px] text-center leading-4 text-muted-foreground">
              {item.condition.text}
            </p>
          </div>
        ))}

    </div>    

    </Card>
  );
}

export default Forecast;