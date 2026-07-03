import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardHeaderSkeleton() {
  return (
    <Card className="h-full rounded-3xl border border-border bg-card p-10">
      <div className="flex h-full flex-col justify-between">

        <div className="flex items-start justify-between">

          <div>
            <Skeleton className="h-3 w-32" />
            <Skeleton className="mt-4 h-12 w-48" />
          </div>

          <Skeleton className="h-14 w-[420px] rounded-2xl" />

        </div>

        <div className="space-y-5">

          <Skeleton className="h-9 w-72" />

          <Skeleton className="h-5 w-56" />

          <div className="flex gap-12">

            <Skeleton className="h-12 w-32" />

            <Skeleton className="h-12 w-28" />

            <Skeleton className="h-12 w-32" />

          </div>

        </div>

      </div>
    </Card>
  );
}