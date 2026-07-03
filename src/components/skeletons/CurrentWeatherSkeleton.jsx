import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function CurrentWeatherSkeleton() {
  return (
    <Card className="h-full rounded-3xl border border-border bg-card p-9">
      <div className="flex h-full flex-col gap-6">

        {/* Weather Icon */}
        <Skeleton className="h-20 w-20 rounded-full" />

        {/* Condition + High/Low */}
        <div className="flex items-start justify-between">
          <div>
            <Skeleton className="h-8 w-36" />
          </div>

          <div className="text-right">
            <Skeleton className="ml-auto h-4 w-20" />
            <Skeleton className="mt-2 ml-auto h-6 w-24" />
          </div>
        </div>

        {/* City + Humidity */}
        <div className="flex items-center justify-between">
          <Skeleton className="h-7 w-40" />

          <div className="text-right">
            <Skeleton className="ml-auto h-4 w-20" />
            <Skeleton className="mt-2 ml-auto h-7 w-16" />
          </div>
        </div>

        <hr className="border-border/40" />

        {/* Temperature + Wind */}
        <div className="flex items-center justify-between">
          <Skeleton className="h-20 w-36" />

          <div className="text-right">
            <Skeleton className="ml-auto h-4 w-16" />
            <Skeleton className="mt-2 ml-auto h-7 w-20" />
          </div>
        </div>

        {/* Feels Like */}
        <Skeleton className="h-5 w-40" />

      </div>
    </Card>
  );
}