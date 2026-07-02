import useWeather from "@/hooks/useWeather";
import AQIGauge from "./AQIGauge";
import { Card } from "@/components/ui/card";
import { CheckCircle2, AlertTriangle } from "lucide-react";


function AQIItem({ label, value }) {

  return (

    <div className="flex items-center gap-3">

      <div className="h-2.5 w-2.5 rounded-full bg-primary" />

      <div>

        <p className="text-lg font-semibold text-foreground">
          {value}
        </p>

        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          {label}
        </p>

      </div>

    </div>

  );

}
function getAQIStatus(aqi) {
  if (aqi <= 50) {
    return {
      title: "Good",
      message: "Air quality is excellent. Perfect for outdoor activities.",
      color: "text-green-400",
    };
  }

  if (aqi <= 100) {
    return {
      title: "Moderate",
      message:
        "Air quality is acceptable. Sensitive people should reduce prolonged outdoor activity.",
      color: "text-yellow-400",
    };
  }

  if (aqi <= 150) {
    return {
      title: "Unhealthy for Sensitive Groups",
      message:
        "Children, older adults and people with respiratory conditions should limit outdoor activity.",
      color: "text-orange-400",
    };
  }

  if (aqi <= 200) {
    return {
      title: "Unhealthy",
      message: "Reduce prolonged outdoor exertion whenever possible.",
      color: "text-red-400",
    };
  }

  return {
    title: "Hazardous",
    message: "Avoid outdoor activities. Air quality is hazardous.",
    color: "text-purple-400",
  };
}

function AirQuality({ city }) {

  const { weather, loading, error } = useWeather(city);

  if (loading) return null;
  if (error) return null;

  const air = weather.current.air_quality;
  const aqi = 55;
  const status = getAQIStatus(aqi);

  return (

    <Card className="rounded-3xl border border-border bg-card p-6 min-h-92.5">

      <p className="text-xs uppercase tracking-[0.35em] text-primary">
        Air Quality Overview
      </p>

     <div className="flex-1 mt-4 grid grid-cols-[170px_1fr] gap-8 items-center">
    
    <AQIGauge value={55} />

    <div className="grid grid-cols-2 gap-y-6">

        <AQIItem label="PM2.5" value={air.pm2_5.toFixed(1)} />

        <AQIItem label="PM10" value={air.pm10.toFixed(1)} />

        <AQIItem label="O₃" value={air.o3.toFixed(1)} />

        <AQIItem label="NO₂" value={air.no2.toFixed(1)} />

        <AQIItem label="SO₂" value={air.so2.toFixed(1)} />

        <AQIItem label="CO" value={Math.round(air.co)} />

    </div>
    
    </div>

      <div className="mt-8 border-t border-border/40 pt-5">

  <p className={`text-lg font-semibold ${status.color}`}>
    {status.title}
  </p>

  <div className="mt-4 space-y-3">

    <div className="flex items-start gap-3">

      <CheckCircle2
        className="mt-0.5 h-5 w-5 text-green-400"
      />

      <p className="text-sm text-muted-foreground">
        Outdoor activities are safe.
      </p>

    </div>

    <div className="flex items-start gap-3">

      <AlertTriangle
        className="mt-0.5 h-5 w-5 text-yellow-400"
      />

      <p className="text-sm text-muted-foreground">
        Sensitive groups should reduce prolonged outdoor exertion.
      </p>

    </div>

  </div>

</div>


    </Card>

  );
}

export default AirQuality;