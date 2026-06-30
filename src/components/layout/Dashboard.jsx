import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-950 p-6">
      <div className="mx-auto flex max-w-[1600px] gap-6">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default Dashboard;