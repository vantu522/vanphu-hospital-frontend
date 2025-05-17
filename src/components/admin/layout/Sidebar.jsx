import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const links = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Users", path: "/dashboard/users" },
    { name: "Settings", path: "/dashboard/settings" },
  ];

  return (
    <aside className="w-64 bg-gray-800 text-white p-4 space-y-2">
      <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
      {links.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={`block px-4 py-2 rounded hover:bg-gray-700 ${
            location.pathname === link.path ? "bg-gray-700" : ""
          }`}
        >
          {link.name}
        </Link>
      ))}
    </aside>
  );
};

export default Sidebar;
