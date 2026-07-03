import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import SettingsModal from "@/components/settings/SettingsModal";
import { useState } from "react";
 
function Dashboard() {
  const [settingsOpen, setSettingsOpen] = useState(false);  
  return (
    <div className="min-h-screen bg-background p-8">
     <div
         className={`mx-auto flex max-w-[1600px] gap-8 transition-all duration-300 ${
          settingsOpen
            ? "scale-[0.98] blur-sm pointer-events-none select-none"
            : "scale-100"
        }`}
     >
        <Sidebar setSettingsOpen={setSettingsOpen} />
        <MainContent />
      </div>
      <SettingsModal
        open={settingsOpen}
        onClose={() => setSettingsOpen(false)}
      />  
    </div>
  );
}

export default Dashboard;