import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="flex max-lg:flex-col justify-end gap-8 p-10">
      <Outlet />
      <Sidebar />
    </div>
  );
};

export default Layout;
