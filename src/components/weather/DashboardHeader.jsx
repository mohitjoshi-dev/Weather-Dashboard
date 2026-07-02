import { Search } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import useWeather from "@/hooks/useWeather";

function DashboardHeader({ city, setCity }) {
const [search, setSearch] = useState(city);

const { weather, loading, error } = useWeather(city);

if (loading) return null;
if (error) return null;

const hour = new Date(weather.location.localtime).getHours();

const condition = weather.current.condition.text.toLowerCase();

let weatherEmoji = "☀️";

if (condition.includes("cloud")) weatherEmoji = "☁️";
else if (condition.includes("rain")) weatherEmoji = "🌧️";
else if (condition.includes("mist")) weatherEmoji = "🌫️";
else if (condition.includes("snow")) weatherEmoji = "❄️";
else if (condition.includes("thunder")) weatherEmoji = "⛈️";

let greeting = "";

if (hour >= 5 && hour < 12) {
  greeting = "Good Morning";
} else if (hour >= 12 && hour < 17) {
  greeting = "Good Afternoon";
} else if (hour >= 17 && hour < 21) {
  greeting = "Good Evening";
} else {
  greeting = "Good Night";
}


 return (
    <Card className="h-full rounded-3xl border border-border bg-card p-10">

    <div className="flex h-full flex-col justify-between">

      <div className="flex items-start justify-between">

        <div>
            <p className="text-xs uppercase tracking-[0.35em] text-primary">
            LIVE WEATHER DASHBOARD
            </p>

            <h1 className="mt-3 text-4xl font-bold text-foreground">
            Current Conditions
            </h1>
        </div>

        <div className="flex w-110 items-center gap-3 rounded-2xl border border-border bg-background px-5 py-4 transition-all 
                        focus-within:border-primary focus-within:shadow-lg focus-within:shadow-primary/20">
            <Search className="h-5 w-5 text-muted-foreground" />

            <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
               if (e.key === "Enter") {
               setCity(search.trim());
               setSearch("");}
            }}
            placeholder="Search city..."
            className="w-full bg-transparent text-foreground outline-none placeholder:text-muted-foreground"
            />
        </div>

        </div>

    </div>    
           
           
            {/* Greeting Section */}

<div className="space-y-6">

    <div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground">
              {weatherEmoji} {greeting}{" "}
        <span className="wave inline-block origin-[70%_70%]">
            👋
        </span>
        </h2>

        <p className="mt-2 text-muted-foreground">
         Currently {weather.current.condition.text.toLowerCase()} in{" "}
         {weather.location.name}.
        </p>
    </div>

    <div className="flex gap-14">

        <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Location
            </p>

            <p className="mt-1 text-lg text-foreground">
            {weather.location.name}, {weather.location.country}
            </p>
        </div>

        <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Local Time
            </p>

            <p className="mt-1 text-lg text-foreground">
                {new Date(weather.location.localtime).toLocaleTimeString([], {
                hour: "numeric",
                minute: "2-digit",
                hour12: true,
                })}
                
            </p>
                

        </div>

        <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Date
            </p>

            <p className="mt-1 text-lg text-foreground">
                {new Date(weather.location.localtime).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
                })}
            </p>
        </div>

    </div>

</div>



    </Card>
  );
}

export default DashboardHeader;



