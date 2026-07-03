import { Search } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import useWeather from "@/hooks/useWeather";
import { searchLocations } from "@/api/geocode";
import { useSettings } from "@/context/SettingsProvider";

function DashboardHeader({
  city,
  setCity,
  setDisplayLocation,
}) {
  const [search, setSearch] = useState(city);
  const [suggestions, setSuggestions] = useState([]);

  const { weather, loading, error } = useWeather(city);
  const { timeFormat } = useSettings();

  useEffect(() => {
    if (search.trim().length < 2) {
      setSuggestions([]);
      return;
    }

    // 1. ADDED: An active flag to prevent API race conditions
    let active = true;

    const timer = setTimeout(async () => {
      try {
        const data = await searchLocations(search);
        // Only update state if this is the most recent keystroke
        if (active) {
          setSuggestions(data);
        }
      } catch (err) {
        console.error(err);
      }
    }, 300);

    return () => {
      // Clean up the flag and timer when the user types a new letter
      active = false; 
      clearTimeout(timer);
    };
  }, [search]);

  // 2. REMOVED: `if (loading) return null;` 
  // We want the search bar to stay on screen no matter what!

  // Safely extract weather data only if it exists and isn't loading
  let hour, condition, weatherEmoji = "☀️", greeting = "";

  if (weather && !loading && !error) {
    hour = new Date(weather.location.localtime).getHours();
    condition = weather.current.condition.text.toLowerCase();

    if (condition.includes("cloud")) weatherEmoji = "☁️";
    else if (condition.includes("rain")) weatherEmoji = "🌧️";
    else if (condition.includes("mist")) weatherEmoji = "🌫️";
    else if (condition.includes("snow")) weatherEmoji = "❄️";
    else if (condition.includes("thunder")) weatherEmoji = "⛈️";

    if (hour >= 5 && hour < 12) {
      greeting = "Good Morning";
    } else if (hour >= 12 && hour < 17) {
      greeting = "Good Afternoon";
    } else if (hour >= 17 && hour < 21) {
      greeting = "Good Evening";
    } else {
      greeting = "Good Night";
    }
  }

  return (
    <Card className="h-full rounded-3xl border border-border bg-card p-10">
      <div className="flex h-full flex-col justify-between">
        
        {/* Top Half: Header & Search Bar (Always Visible) */}
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-primary">
              LIVE WEATHER DASHBOARD
            </p>
            <h1 className="mt-3 text-4xl font-bold text-foreground">
              Current <br></br>
              Conditions
            </h1>
          </div>

          <div className="relative flex w-110 items-center gap-3 rounded-2xl border border-border bg-background px-5 py-4 transition-all focus-within:border-primary focus-within:shadow-lg focus-within:shadow-primary/20">
            <Search className="h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  if (suggestions.length > 0) {
                    const first = suggestions[0];
                    setCity(`${first.lat},${first.lon}`);
                    setDisplayLocation(first.name);
                    setSearch(first.name);
                  } else {
                    setCity(search.trim());
                  }
                  setSuggestions([]);
                }
              }}
              placeholder="Search city, locality, airport..."
              className="w-full bg-transparent text-foreground outline-none placeholder:text-muted-foreground"
            />

            {suggestions.length > 0 && (
              <div className="absolute left-0 top-[110%] z-50 w-full overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
                {suggestions.map((location) => (
                  <button
                    key={`${location.name}-${location.lat}-${location.lon}`}
                    type="button"
                    onClick={() => {
                      setCity(`${location.lat},${location.lon}`);
                      setDisplayLocation(location.name);
                      setSearch(location.name);
                      setSuggestions([]);
                    }}
                    className="flex w-full items-start gap-3 border-b border-border/40 px-5 py-4 text-left transition-colors hover:bg-primary/10 last:border-b-0"
                  >
                    <span className="mt-1 text-lg">📍</span>
                    <div>
                      <p className="font-medium text-foreground">
                        {location.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {location.region}, {location.country}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Bottom Half: Greeting & Details (Conditionally Visible) */}
        {loading && (
          <div className="mt-6 animate-pulse space-y-4">
             <div className="h-8 w-1/3 rounded bg-muted"></div>
             <div className="h-4 w-1/4 rounded bg-muted"></div>
          </div>
        )}

        {!loading && !error && weather && (
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                {weatherEmoji} {greeting}{" "}
                <span className="wave inline-block origin-[70%_70%]">👋</span>
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
                    hour12: timeFormat === "12",
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
        )}

      </div>
    </Card>
  );
}

export default DashboardHeader;