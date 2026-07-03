import { CloudSun, House, MapPinned, MoonStar, Sun, Settings, UserCircle,} from "lucide-react";
import { useTheme } from "@/context/ThemeProvider";

function Sidebar({ setSettingsOpen }) {const { theme, toggleTheme } = useTheme();

  return (
    
    <aside className="sticky top-0 flex h-screen w-22 flex-col items-center justify-between border-r border-border bg-card py-6 shadow-xl">

      {/* Logo */}
      <div className="rounded-2xl bg-primary p-3">
        <CloudSun className="h-6 w-6 text-foreground" />
      </div>

      {/* Navigation */}
      <div className="flex flex-col gap-7">

        <button
          onClick={() =>
            document.getElementById("home")?.scrollIntoView({
              behavior: "smooth",
            })
          }
          className="rounded-xl bg-primary p-3 text-foreground transition hover:scale-110" >
          <House size={22} />
        </button>

        <button
          onClick={() =>
            document.getElementById("maps")?.scrollIntoView({
              behavior: "smooth",
            })
          }
          className="rounded-xl p-3 text-slate-400 transition hover:bg-secondary hover:text-foreground">
          <MapPinned size={22} />
        </button>

        <button 
        onClick={toggleTheme}
        className="rounded-xl p-3 text-slate-400 transition-all duration-300  hover:bg-secondary hover:text-foreground">
          {theme === "dark" ? (
          <MoonStar size={22} />
        ) : (
          <Sun size={22} />
        )}
        </button>

        <button
          onClick={() => setSettingsOpen(true)}
          className="rounded-xl p-3 text-slate-400 transition hover:bg-secondary hover:text-foreground">
          <Settings size={22} />
        </button>

      </div>

      {/* Profile */}
      <div className="rounded-full bg-slate-700 p-2">
        <UserCircle className="h-8 w-8 text-foreground" />
      </div>
    
    </aside>
  );
}

export default Sidebar;