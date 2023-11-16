import { Outlet } from "react-router-dom";
import SideNav from "../pages/SideNav";

export default function AppLayout() {
  return (
    <div className="container">
      <div className="inner-container">
        <SideNav />
        <div className="outlet-container">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
