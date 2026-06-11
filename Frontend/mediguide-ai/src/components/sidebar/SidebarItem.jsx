import { NavLink } from "react-router-dom";

function SidebarItem({ icon, title, path }) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-3 rounded-xl transition-all
        ${
          isActive
            ? "bg-sky-500 text-white"
            : "hover:bg-slate-100 text-slate-700"
        }`
      }
    >
      {icon}
      <span>{title}</span>
    </NavLink>
  );
}

export default SidebarItem;