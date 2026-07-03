import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function WeeklyForecastSkeleton() {
  return (
    <Card className="rounded-3xl border border-border bg-card p-5">

      <Skeleton className="h-3 w-36" />

      <div className="mt-6 space-y-5">

        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-3">

              <Skeleton className="h-10 w-10 rounded-full" />

              <div>
                <Skeleton className="h-5 w-16" />
                <Skeleton className="mt-2 h-4 w-24" />
              </div>

            </div>

            <Skeleton className="h-5 w-20" />

          </div>
        ))}

      </div>

    </Card>
  );
}