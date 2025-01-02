import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <>
      <p className="px-12 pt-6 text-right text-4xl font-semibold">Musc</p>
      <div className="flex max-lg:flex-col justify-end gap-8 p-10">
        <Outlet />
        <Sidebar />
      </div>
    </>
  );
};

export default Layout;
