import { Card } from "@/components/ui/card";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function WeatherMap() {
  const position = [28.6139, 77.209];

  return (
    <Card className="h-full rounded-3xl border border-border bg-card p-6">

      <p className="text-xs uppercase tracking-[0.35em] text-primary">
        Weather Map
      </p>

      <div className="mt-5 h-105 overflow-hidden rounded-2xl">

        <MapContainer
          center={position}
          zoom={10}
          scrollWheelZoom={true}
          className="h-full w-full"
        >
          <TileLayer
            attribution='&copy; OpenStreetMap'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={position} />

        </MapContainer>

      </div>

    </Card>
  );
}

export default WeatherMap;