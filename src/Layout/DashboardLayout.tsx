import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import SideBar from "../components/SideBar/SideBar";

const DashboardLayout = () => {
  return (
    <div className="flex flex-col ">
      <NavBar />
      <div className="flex flex-1 overflow-hidden">
        <SideBar />
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
