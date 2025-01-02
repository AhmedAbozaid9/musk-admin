import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex bg-pink-200">
      layout
      <Outlet />
    </div>
  );
};

export default Layout;
