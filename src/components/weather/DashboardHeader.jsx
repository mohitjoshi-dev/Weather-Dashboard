import { Search } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useState } from "react";

function DashboardHeader({ city, setCity }) {
const [search, setSearch] = useState(city);

 return (
    <Card className="h-full rounded-3xl border border-border bg-card p-10">

    <div className="flex h-full flex-col justify-between">

      <div className="flex items-start justify-between">

        <div>
            <p className="text-xs uppercase tracking-[0.35em] text-primary">
            Weather Dashboard
            </p>

            <h1 className="mt-3 text-4xl font-bold text-foreground">
            Current Conditions
            </h1>
        </div>

        <div className="flex w-110 items-center gap-3 rounded-2xl border border-border bg-background px-5 py-4 transition-all focus-within:border-primary">
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
        <h2 className="text-3xl font-semibold text-foreground">
             Good Evening{" "}
        <span className="wave inline-block origin-[70%_70%]">
            👋
        </span>
        </h2>

        <p className="mt-2 text-muted-foreground">
            Welcome back! Here's today's weather overview.
        </p>
    </div>

    <div className="flex gap-14">

        <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Location
            </p>

            <p className="mt-1 text-lg text-foreground">
                New Delhi
            </p>
        </div>

        <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Local Time
            </p>

            <p className="mt-1 text-lg text-foreground">
                2:32 PM
            </p>
        </div>

        <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Date
            </p>

            <p className="mt-1 text-lg text-foreground">
                July 1, 2026
            </p>
        </div>

    </div>

</div>



    </Card>
  );
}

export default DashboardHeader;



