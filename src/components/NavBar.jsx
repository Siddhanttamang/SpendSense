import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-3 flex justify-between items-center shadow-md">
      <Link to="/" className="text-2xl font-bold">💸 SpendSense</Link>
      <div className="flex gap-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `hover:text-yellow-300 ${isActive ? "font-semibold underline" : ""}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `hover:text-yellow-300 ${isActive ? "font-semibold underline" : ""}`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `hover:text-yellow-300 ${isActive ? "font-semibold underline" : ""}`
          }
        >
          Dashboard
        </NavLink>
      </div>
    </nav>
  );
}
