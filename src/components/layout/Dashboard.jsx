import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
 
function Dashboard() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto flex max-w-[1600px] gap-8">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default Dashboard;