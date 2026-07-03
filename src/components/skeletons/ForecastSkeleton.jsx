import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function ForecastSkeleton() {
  return (
    <Card className="rounded-3xl border border-border bg-card p-5">

      <Skeleton className="h-3 w-40" />

      <div className="mt-8 grid grid-cols-4 gap-3">

        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="rounded-2xl border border-border p-5"
          >
            <Skeleton className="mx-auto h-4 w-10" />

            <Skeleton className="mx-auto mt-5 h-14 w-14 rounded-full" />

            <Skeleton className="mx-auto mt-6 h-8 w-12" />

            <Skeleton className="mx-auto mt-5 h-4 w-16" />

          </div>
        ))}

      </div>

    </Card>
  );
}