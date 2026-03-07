import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";

export default function DashboardLayout() {
  return (
    <div className="flex h-screen bg-gray-100">

   

      <div className="flex-1 flex flex-col">
        <Header />

        <main className="p-6 flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>

    </div>
  );
}