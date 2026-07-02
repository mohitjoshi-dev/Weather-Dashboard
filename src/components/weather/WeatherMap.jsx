import { Card } from "@/components/ui/card";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import useWeather from "@/hooks/useWeather";

import L from "leaflet";
import "leaflet/dist/leaflet.css";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});



const WAQI_KEY = import.meta.env.VITE_WAQI_API_KEY;

function ChangeView({ center }) {
  const map = useMap();

  useEffect(() => {
    map.setView(center, map.getZoom(), {
      animate: true,
    });
  }, [center, map]);

  return null;
}

function WeatherMap({ city }) {

  const [view, setView] = useState("weather");
  const { weather } = useWeather(city);
  
  const position = weather
  ? [weather.location.lat, weather.location.lon]
  : [28.6139, 77.209];
 
  return (
    <section id="maps">
    <Card className="h-full rounded-3xl border border-border bg-card p-6">

      <div className="grid grid-cols-2 gap-6">

        <div>
          <p className="text-xl font-semibold uppercase tracking-[0.35em] text-primary">
            Weather Map
          </p>
        </div>

        <div>
          <p className="text-xl uppercase font-semibold tracking-[0.35em] text-primary">
            Satellite Map
          </p>
        </div>

      </div>

      <div className="mt-5 flex items-center gap-6">

        <div className="flex rounded-xl border border-border overflow-hidden">

          <button
            onClick={() => setView("weather")}
            className={`px-4 py-2 text-sm transition ${
              view === "weather"
                ? "bg-primary text-background"
                : "bg-card text-muted-foreground"
            }`}
          >
            Weather
          </button>

          <button
            onClick={() => setView("aqi")}
            className={`px-4 py-2 text-sm transition ${
              view === "aqi"
                ? "bg-primary text-background"
                : "bg-card text-muted-foreground"
            }`}
          >
            AQI
          </button>

        </div>

      </div>

      <div className="mt-5 grid h-125 grid-cols-2 gap-6">

        <div className="overflow-hidden rounded-2xl">

        <MapContainer
          center={position}
          zoom={10}
          scrollWheelZoom={true}
          className="h-full w-full"
        >
          <ChangeView center={position} />

          <TileLayer
            attribution="&copy; OpenStreetMap"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {view === "aqi" && (
            <TileLayer
              opacity={0.65}
              url={`https://tiles.waqi.info/tiles/usepa-aqi/{z}/{x}/{y}.png?token=${WAQI_KEY}`}
            />
          )}

          <Marker position={position} />

        </MapContainer>

        </div>

        <div className="flex h-full flex-col">

        <div className="flex-1 overflow-hidden rounded-2xl">

          <MapContainer
            center={position}
            zoom={10}
            scrollWheelZoom={true}
            className="h-full w-full"
          >
            <ChangeView center={position} />

            {/* Satellite Image */}
            <TileLayer
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            />

             {/* Labels */}
            <TileLayer
              url="https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}"
            />

            <Marker position={position} />

          </MapContainer>

        </div>

      </div>
      
      </div>

    </Card>
    </section>
  );
}

export default WeatherMap;