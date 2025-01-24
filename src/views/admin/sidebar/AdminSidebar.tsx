import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTachometerAlt,
  faTimes,
  faBox,
  faTruck,
  faReceipt,
  faCogs,
  faArchive,
  faUsers,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const links = [
    { path: "/admin/pos", icon: faTachometerAlt, label: "Dashboard" },
    { path: "/admin/cashier", icon: faUsers, label: "Cashier" },
    { path: "/admin/products", icon: faBox, label: "Products" },
    { path: "/user-settings", icon: faArchive, label: "Stock Management" },
    { path: "/user-settings", icon: faTruck, label: "Suppliers" },
    { path: "/logout", icon: faReceipt, label: "Transaction" },
    { path: "/user-settings", icon: faChartLine, label: "Sales Report" },
    { path: "/user-settings", icon: faCogs, label: "Settings" },
  ];

  const handleNavigation = (path:any) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        className={`hidden md:flex md:z-50 fixed top-4 left-4 z-50 text-accent bg-primary p-2 rounded-md shadow-md transition-opacity duration-300 ease-in-out ${
          isOpen ? "hidden" : ""
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed h-full bg-primary border  border-white md:z-40 text-accent z-40 transition-opacity duration-75 ease-in-out${
          isOpen ? "w-[265px] opacity-100" : "w-[265px] opacity-100"
        } md:w-[265px] md:opacity-100 slg:w-[265px] slg:opacity-100 md:flex md:rounded-r-[5px]  rounded-r-[5px] overflow-hidden ${
          !isOpen && "md:hidden"
        } md:transition-all md:duration-500 md:ease-in-out`}
      >
        <div className="w-full h-full flex flex-col items-center justify-between py-6">
          {/* Logo Section */}
          <div
            className="flex justify-center cursor-pointer"
            onClick={() => handleNavigation("/admin")}
          >
            <img src="../../logo/png/1.png" alt="Logo" className="w-36 h-36" />
          </div>
          <hr className="w-full border-white md:mt-5" />

          {/* Navigation Menu */}
          <nav className="w-full">
            <ul className="w-full flex flex-col items-center gap-y-2">
              {links.map((link) => (
                <li
                  key={link.path}
                  onClick={() => handleNavigation(link.path)}
                  className={`w-full border border-primary rounded-md flex justify-start items-center transition duration-200 ${
                    location.pathname === link.path
                      ? "bg-white text-primary"
                      : "bg-transparent hover:bg-gray-100 hover:text-primary"
                  }`}
                >
                  <div className="flex items-center gap-3 text-xl w-full px-4 py-2 cursor-pointer">
                    <FontAwesomeIcon icon={link.icon} className="w-5 h-5" />
                    <span>{link.label}</span>
                  </div>
                </li>
              ))}
            </ul>
          </nav>

         
          <div className="text-center text-sm text-white pb-4">
            © {new Date().getFullYear()} BrosPOS Company
          </div>
        </div>
      </div>

      
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:transition-opacity md:duration-300 md:ease-in-out"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default AdminSidebar;
