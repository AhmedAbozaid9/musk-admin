import Providers from "@/lib/Providers";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <Providers>
      <p className="px-12 pt-6 text-right text-4xl font-semibold">Musc</p>
      <div className="flex max-lg:flex-col-reverse justify-end gap-8 p-10">
        <Outlet />
        <Sidebar />
      </div>
    </Providers>
  );
};

export default Layout;
