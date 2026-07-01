import { Card } from "@/components/ui/card";
import { CloudSun } from "lucide-react";


function CurrentWeather() {
  return (
    <Card className="h-full rounded-3xl bg-card border border-border p-9">      
      
      <div className="flex h-full flex-col gap-6">

      {/* Cloud Logo */}
    
      <CloudSun className="h-20 w-20 text-primary" />

      {/* Row 1: Status & High/Low */}
    
      <div className="flex items-start justify-between">
        <div className="text-2xl font-bold text-foreground leading-tight">
          Partly<br />Cloudy
        </div>

        
        <div className="w-28 text-right">
          <div className="text-xs uppercase tracking-widest text-muted-foreground">
              High / Low
          </div>
          <div className="text-xl font-medium text-foreground"> 36°/24°</div>
        </div>
      </div>

     
      {/* Row 2: City & Humidity */}
     
      <div className="flex items-center justify-between">
        <div className="text-2xl text-muted-foreground">New Delhi</div>
        <div className="text-right">
       <div className="text-xs uppercase tracking-widest text-muted-foreground">
            Humidity
        </div>
        <p className="text-2xl font-semibold text-primary">
          58%
        </p>    
       </div>
      </div>

      <hr className="border-border/40" />

     
      {/* Row 3: Big Temp & Wind */}
     
      <div className="flex items-center justify-between">
        <div className="text-7xl font-bold tracking-tight text-foreground">31°</div>
        <div className="text-right">
          <div className="text-sm text-muted-foreground">Wind</div>
          <div className="text-xl font-medium text-primary">14 km/h</div>
        </div>
      </div>

      {/* Feels Like */}
    
      <p className="text-base text-muted-foreground">Feels like 34°</p>

      </div>

    </Card>
  );
}

export default CurrentWeather;