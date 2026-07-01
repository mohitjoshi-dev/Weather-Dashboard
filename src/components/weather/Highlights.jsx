import { Card } from "@/components/ui/card";
import {
  Droplets,
  Wind,
  Sun,
  Gauge,
} from "lucide-react";

function Highlights() {
  return (
    <div className="grid h-full grid-cols-2 gap-5">

      {/* Humidity */}
      <Card className="rounded-3xl border border-border bg-card p-6 hover:border-primary/40 transition-all duration-300">

        <Droplets className="h-8 w-8 text-cyan-400" />

        <p className="mt-6 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Humidity
        </p>

        <h2 className="mt-3 text-4xl font-bold">
            58%
        </h2>

        {/* Progress Bar */}

        <div className="mt-5 h-2 w-full overflow-hidden rounded-full bg-border">

            <div className="h-full w-[58%] rounded-full bg-cyan-400"></div>

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
            14
        </h2>

        <div className="mt-5 h-2 w-full overflow-hidden rounded-full bg-border">

            <div className="h-full w-[35%] rounded-full bg-primary"></div>

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
          7
        </h2>

        <p className="mt-2 text-primary">
          High
        </p>
      </Card>

      {/* Pressure */}
      <Card className="rounded-3xl border border-border bg-card p-6">
        <Gauge className="mb-5 h-8 w-8 text-green-400" />

        <p className="text-sm uppercase tracking-widest text-muted-foreground">
          Pressure
        </p>

        <h2 className="mt-3 text-4xl font-bold text-foreground">
          1011
        </h2>

        <p className="mt-2 text-primary">
          hPa
        </p>
      </Card>

    </div>
  );
}

export default Highlights;