import { Card } from "@/components/ui/card";
import useWeather from "@/hooks/useWeather";
import AnimatedWeatherIcon from "./AnimatedWeatherIcon";
import { useSettings } from "@/context/SettingsProvider";


{/* created array for easiness */}


function Forecast({city}) {
const { weather, loading, error } = useWeather(city);

if (loading) return <div>Loading...</div>;
if (error) return <div>{error}</div>;

const { tempUnit, timeFormat } = useSettings();

const currentHour = new Date().getHours();

const todayHours =
  weather.forecast.forecastday[0].hour.slice(currentHour);

const tomorrowHours =
  weather.forecast.forecastday[1].hour;

const hourlyForecast = [...todayHours, ...tomorrowHours].slice(0, 4);


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
                  minute: "2-digit",
                  hour12: timeFormat === "12",
                })}
            </p>
            </div>

            <div className="my-5 h-14 flex items-center justify-center">
              <AnimatedWeatherIcon
                condition={item.condition.text}
                isDay={item.is_day}
                size={index === 0 ? 110 : 100}
              />
            </div>

            <h3 className="text-xl font-semibold">
              {tempUnit === "c"
                ? Math.round(item.temp_c)
                : Math.round(item.temp_f)}
              °{tempUnit.toUpperCase()}
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