import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <main className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
