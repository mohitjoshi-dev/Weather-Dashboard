import { Card } from "@/components/ui/card";

function MainContent() {
  return (
    <main className="flex-1">

      <div className="grid gap-6 lg:grid-cols-3">

        {/* Current Weather */}

        <Card className="h-[380px] rounded-3xl bg-slate-900 border-slate-800" />

        {/* Highlights */}

        <Card className="lg:col-span-2 h-[380px] rounded-3xl bg-slate-900 border-slate-800" />

        {/* Forecast */}

        <Card className="h-[320px] rounded-3xl bg-slate-900 border-slate-800" />

        {/* Map */}

        <Card className="lg:col-span-2 h-[320px] rounded-3xl bg-slate-900 border-slate-800" />

      </div>

    </main>
  );
}

export default MainContent;