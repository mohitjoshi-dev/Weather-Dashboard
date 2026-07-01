import { Card } from "@/components/ui/card";
import {Cloud, CloudRain, Moon, Sun,} from "lucide-react";



{/* created array for easiness */}
const forecast = [
  {
    time: "Now",
    icon: <Sun className="h-6 w-6 text-primary" />,
    temp: "31°",
  },
  {
    time: "2 PM",
    icon: <Sun className="h-6 w-6 text-yellow-400" />,
    temp: "32°",
  },
  {
    time: "5 PM",
    icon: <Cloud className="h-6 w-6 text-slate-300" />,
    temp: "29°",
  },
  {
    time: "8 PM",
    icon: <CloudRain className="h-6 w-6 text-cyan-400" />,
    temp: "26°",
  },
  {
    time: "11 PM",
    icon: <Moon className="h-6 w-6 text-blue-300" />,
    temp: "24°",
  },
];

function Forecast() {
  return (
    <Card className="h-full rounded-3xl border border-border bg-card p-8">

      <p className="text-xs uppercase tracking-[0.35em] text-primary">
        Hourly Forecast
      </p>


        <div className="mt-8 flex justify-between">
        {forecast.map((item) => (
          <div
            key={item.time}
            className={`flex flex-col items-center rounded-2xl px-5 py-4 transition-all duration-300 ${
            item.time === "Now"
                ? "bg-primary/10 border border-primary/20"
                : "hover:bg-background"
            }`}
          >
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              {item.time}
            </p>

            <div className="my-5">
              {item.icon}
            </div>

            <h3 className="text-xl font-semibold">
              {item.temp}
            </h3>
          </div>
        ))}

    </div>    

    </Card>
  );
}

export default Forecast;