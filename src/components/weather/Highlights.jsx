import { Card } from "@/components/ui/card";
import {Droplets, Wind, Sun, Gauge,} from "lucide-react";
import useWeather from "@/hooks/useWeather";

function Highlights({city}) {
const { weather, loading, error } = useWeather(city);

if (loading) return <div>Loading...</div>;
if (error) return <div>{error}</div>;

  return (
    <div className="grid h-full grid-cols-2 gap-5">

      {/* Humidity */}
      <Card className="rounded-3xl border border-border bg-card p-6 hover:border-primary/40 transition-all duration-300">

        <Droplets className="h-8 w-8 text-cyan-400" />

        <p className="mt-6 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Humidity
        </p>

        <h2 className="mt-3 text-4xl font-bold">
          {weather.current.humidity}%        
        </h2>

        {/* Progress Bar */}

        <div className="mt-5 h-2 w-full overflow-hidden rounded-full bg-border">

        <div
          className="h-full rounded-full bg-cyan-400 transition-all"
          style={{ width: `${weather.current.humidity}%` }}>
        </div>

        </div>

        <p className="mt-4 text-sm text-primary">
            Comfortable
        </p>

      </Card>

      {/* Wind */}
      <Card className="rounded-3xl border border-border bg-card p-6 hover:border-primary/40 transition-all duration-300">

        <Wind className="h-8 w-8 text-primary" />

        <p className="mt-6 text-xs uppercase tracking-[0.3em] text-muted-foreground">
           Wind
        </p>

        <h2 className="mt-3 text-4xl font-bold">
          {Math.round(weather.current.wind_kph)}
        </h2>

        <div className="mt-5 h-2 w-full overflow-hidden rounded-full bg-border">

        <div
          className="h-full rounded-full bg-primary transition-all"
          style={{
            width: `${Math.min(weather.current.wind_kph * 3, 100)}%`,
          }}>
        </div>

        </div>

        <p className="mt-4 text-sm text-primary">
            km/h
        </p>

     </Card>

      {/* UV */}
      <Card className="rounded-3xl border border-border bg-card p-6">
        <Sun className="mb-5 h-8 w-8 text-yellow-400" />

        <p className="text-sm uppercase tracking-widest text-muted-foreground">
          UV Index
        </p>

        <h2 className="mt-3 text-4xl font-bold text-foreground">
          {weather.current.uv}
        </h2>

        <p className="mt-2 text-primary">
         {weather.current.uv <= 2
          ? "Low"
          : weather.current.uv <= 5
          ? "Moderate"
          : weather.current.uv <= 7
          ? "High"
          : "Very High"}
        </p>
      </Card>

      {/* Pressure */}
      <Card className="rounded-3xl border border-border bg-card p-6">
        <Gauge className="mb-5 h-8 w-8 text-green-400" />

        <p className="text-sm uppercase tracking-widest text-muted-foreground">
          Pressure
        </p>

        <h2 className="mt-3 text-4xl font-bold text-foreground">
         {Math.round(weather.current.pressure_mb)}
        </h2>

        <p className="mt-2 text-primary">
          hPa
        </p>
      </Card>

    </div>
  );
}

export default Highlights;