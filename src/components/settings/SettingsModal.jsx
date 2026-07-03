import { useSettings } from "@/context/SettingsProvider";

function SettingsModal({ open, onClose }) {
    
const {
        searchRegion,
        setSearchRegion,
        tempUnit,
        setTempUnit,
        timeFormat,
        setTimeFormat,
    } = useSettings();    
    
  if (!open) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-140 rounded-3xl border border-border bg-card p-8 shadow-2xl"
      >
       <div className="mb-8 flex items-center gap-4">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 border border-primary/30">
                <span className="text-3xl">⚙️</span>
            </div>

            <div>
                <h2 className="text-3xl font-bold text-foreground">
                    Dashboard Settings
                </h2>

                <p className="mt-1 text-sm text-muted-foreground">
                    Customize your weather dashboard experience
                </p>
            </div>

        </div>

        <div className="space-y-8">

        {/* Search Region */}

        <div>

            <h3 className="mb-4 text-lg font-semibold text-foreground">
            🌍 Search Region
            </h3>

            <div className="rounded-2xl border border-border bg-background/40 p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-xl">

                <div className="grid grid-cols-2 overflow-hidden rounded-xl border border-border">
                <button
                    onClick={() => setSearchRegion("india")}
                    className={`flex h-14 items-center justify-center text-sm font-semibold transition-all duration-300 ${
                                searchRegion === "india"
                                    ? "bg-primary text-background"
                                    : "bg-transparent text-muted-foreground hover:bg-secondary"
                                }`} >
                    🇮🇳 India First
                </button>

                <button
                    onClick={() => setSearchRegion("global")}
                    className={`flex h-14 items-center justify-center text-sm font-semibold transition-all duration-300 ${
                                searchRegion === "global"
                                    ? "bg-primary text-background"
                                    : "bg-transparent text-muted-foreground hover:bg-secondary"
                                }`} >
                    🌍 Global
                </button>

                </div>

                </div>

        <div className="rounded-2xl border border-border bg-background/40 p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-xl">

            <h3 className="mb-4 text-lg font-semibold text-foreground">
                🌡 Temperature Units
            </h3>

            <div className="grid grid-cols-2 overflow-hidden rounded-xl border border-border">

                <button
                    onClick={() => setTempUnit("c")}
                    className={`flex h-14 items-center justify-center text-sm font-semibold transition-all duration-300 ${
                        tempUnit === "c"
                            ? "bg-primary text-background"
                            : "bg-transparent text-muted-foreground hover:bg-secondary"
                    }`}
                >
                    Celsius (°C)
                </button>

                <button
                    onClick={() => setTempUnit("f")}
                    className={`flex h-14 items-center justify-center text-sm font-semibold transition-all duration-300 ${
                        tempUnit === "f"
                            ? "bg-primary text-background"
                            : "bg-transparent text-muted-foreground hover:bg-secondary"
                    }`}
                >
                    Fahrenheit (°F)
                </button>

            </div>

        </div>

        </div>
            
            <div className="rounded-2xl border border-border bg-background/40 p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-xl">

                <h3 className="mb-4 text-lg font-semibold text-foreground">
                    🕒 Time Format
                </h3>

                <div className="grid grid-cols-2 overflow-hidden rounded-xl border border-border">

                    <button
                    onClick={() => setTimeFormat("24")}
                    className={`flex h-14 items-center justify-center text-sm font-semibold transition-all duration-300 ${
                        timeFormat === "24"
                        ? "bg-primary text-background"
                        : "bg-transparent text-muted-foreground hover:bg-secondary"
                    }`}
                    >
                    24 Hour
                    </button>

                    <button
                    onClick={() => setTimeFormat("12")}
                    className={`flex h-14 items-center justify-center text-sm font-semibold transition-all duration-300 ${
                        timeFormat === "12"
                        ? "bg-primary text-background"
                        : "bg-transparent text-muted-foreground hover:bg-secondary"
                    }`}
                    >
                    12 Hour
                    </button>

                </div>

                </div>


        </div>

       <div className="mt-8 flex justify-end">

        <button
            onClick={onClose}
            className="rounded-xl bg-primary px-8 py-3 font-semibold text-background shadow-lg transition-all 
                       duration-300 hover:scale-105 hover:shadow-primary/40">
            Done
        </button>

        </div>
            
      </div>
    </div>
  );
}

export default SettingsModal;