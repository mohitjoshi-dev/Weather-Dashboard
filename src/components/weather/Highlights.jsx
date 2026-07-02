import { Card } from "@/components/ui/card";
import {Droplets, Wind, Sun, Gauge,} from "lucide-react";
import useWeather from "@/hooks/useWeather";

function Highlights({city}) {
const { weather, loading, error } = useWeather(city);

if (loading) return <div>Loading...</div>;
if (error) return <div>{error}</div>;

  return (
    <div className="grid grid-cols-2 gap-5">
   
      {/* UV */}
      <Card className="h-56 rounded-3xl border border-border bg-card p-6">
        <Sun className="h-10 w-8 text-yellow-400" />

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
      <Card className="h-56 rounded-3xl border border-border bg-card p-6">
        <Gauge className="h-10 w-10 text-green-400" />

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