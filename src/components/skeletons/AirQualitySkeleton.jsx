import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function AQISkeleton() {
  return (
    <Card className="rounded-3xl border border-border bg-card p-6">

      <Skeleton className="h-3 w-44" />

      <div className="mt-8 grid grid-cols-[180px_1fr] gap-8">

        <Skeleton className="h-44 w-44 rounded-full" />

        <div className="grid grid-cols-2 gap-6">

          {[...Array(6)].map((_, i) => (
            <div key={i}>
              <Skeleton className="h-7 w-16" />
              <Skeleton className="mt-2 h-4 w-12" />
            </div>
          ))}

        </div>

      </div>

      <Skeleton className="mt-8 h-px w-full" />

      <Skeleton className="mt-6 h-6 w-36" />

      <Skeleton className="mt-5 h-5 w-full" />

      <Skeleton className="mt-3 h-5 w-4/5" />

    </Card>
  );
}