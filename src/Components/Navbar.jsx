import { useContext, useEffect, useState } from "react";
import { IoMdLogOut } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState("register");
  const activeStyle = "font-semibold text-primary dark:text-primary ";

  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const theme = darkMode ? "mydarktheme" : "mytheme";
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const [isScrolled, setIsScrolled] = useState(false);

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? activeStyle : "")}
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/about-us"
          className={({ isActive }) => (isActive ? activeStyle : "")}
        >
          About
        </NavLink>
      </li>

      {user?.email && (
        <>
          <li>
            <NavLink
              to="/tasks"
              className={({ isActive }) => (isActive ? activeStyle : "")}
            >
              Tasks
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/addtask"
              className={({ isActive }) => (isActive ? activeStyle : "")}
            >
              Add Task
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOutUser();
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg dark:bg-gray-900"
          : "bg-transparent dark:bg-transparent"
      }`}
    >
      <div className="navbar   container max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="0"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-60 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="text-2xl font-bold text-primary dark:text-primary">
            <NavLink to="/">TaskPilot</NavLink>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-3 px-1">{links}</ul>
        </div>

        <div className="navbar-end">
          {user && user?.email ? (
            <div className="dropdown dropdown-end">
              <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                <div className="w-12 rounded-full">
                  <img src={user?.photoURL} alt="Profile Picture" />
                </div>
              </label>
              <ul
                tabIndex="0"
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-80 z-50"
              >
                {/* User Profile */}
                <li className="flex items-center justify-between">
                  <div className="flex items-center flex-row">
                    <img
                      src={user?.photoURL}
                      alt="Profile Picture"
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <p className="font-bold">
                        {user?.displayName || "User Name"}
                      </p>
                    </div>

                    <input
                      type="checkbox"
                      checked={darkMode}
                      onChange={toggleDarkMode}
                      className="toggle toggle-primary theme-controller"
                    />
                  </div>
                </li>

                <li className="ml-10">
                  <a
                    onClick={handleSignOut}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <IoMdLogOut className="text-2xl" />
                    <span>Logout</span>
                  </a>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                to="/login"
                className={`${
                  activeTab === "login"
                    ? "bg-primary text-white font-semibold"
                    : "text-cyan-900"
                } px-6 py-2 rounded-lg text-sm font-normal`}
                onClick={() => setActiveTab("login")}
              >
                Sign In
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
