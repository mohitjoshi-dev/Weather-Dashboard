import { Card } from "@/components/ui/card";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const WAQI_KEY = import.meta.env.VITE_WAQI_API_KEY;

function AQIMap({ lat, lon }) {
  return (
    <Card className="rounded-3xl border border-border bg-card p-6">
      <p className="mb-6 text-sm uppercase tracking-[0.35em] text-primary">
        AQI MAP
      </p>

      <div className="overflow-hidden rounded-2xl">
        <MapContainer
          center={[lat, lon]}
          zoom={10}
          scrollWheelZoom={true}
          className="h-105 w-full rounded-2xl"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <TileLayer
            opacity={0.65}
            url={`https://tiles.waqi.info/tiles/usepa-aqi/{z}/{x}/{y}.png?token=${WAQI_KEY}`}
          />
        </MapContainer>
      </div>
    </Card>
  );
}

export default AQIMap;