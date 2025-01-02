import { LogOut } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { sidebarContent } from "../../constants/general/sidebarItems";

const Sidebar = () => {
  const handleLogout = () => {
    // Handle logout
  };
  return (
    <div className="flex flex-col gap-4 justify-end w-1/5">
      {sidebarContent.map((item) => (
        <NavLink
          to={item.slug}
          key={item.slug}
          className={({ isActive }) =>
            `flex items-center gap-3 px-5 py-3 justify-end text-xl ${
              isActive &&
              "bg-white border border-black rounded-l-full border-r-8"
            }`
          }
          end={item.slug === "/"}
        >
          <p>{item.title}</p>
          {item.icon}
        </NavLink>
      ))}
      <button
        onClick={handleLogout}
        className="text-[#EE2D47] border-2 border-[#EE2D47] py-4 px-8 rounded-md flex gap-3 items-center justify-end"
      >
        تسجيل الخروج
        <LogOut />
      </button>
    </div>
  );
};

export default Sidebar;
