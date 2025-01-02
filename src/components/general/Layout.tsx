import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="flex justify-end gap-5 p-10">
      <Outlet />
      <Sidebar />
    </div>
  );
};

export default Layout;
