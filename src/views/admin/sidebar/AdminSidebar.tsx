import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTachometerAlt, faTimes, faBox, faTruck, faReceipt, faCogs, faArchive, faUsers, faChartLine } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { href: "/admin/pos", icon: faTachometerAlt, label: "Dashboard" },
    { href: "/admin/cashier", icon: faUsers, label: "Cashier" },
    { href: "/admin/products", icon: faBox, label: "Products" },
    { href: "/user-settings", icon: faArchive, label: "Stock Management" },
    { href: "/user-settings", icon: faTruck, label: "Suppliers" },
    { href: "/logout", icon: faReceipt, label: "Transaction" },
    { href: "/user-settings", icon: faChartLine, label: "Sales Report" },
    { href: "/user-settings", icon: faCogs, label: "Settings" },
  ];

  return (
    <>
  {/* Toggle Button */}
  <button 
    className={`hidden md:flex md:z-50 fixed border border-white top-4 left-4 z-50 text-accent bg-primary p-2 rounded-md shadow-md
      ${isOpen ? 'hidden' : ''}`}
    onClick={() => setIsOpen(!isOpen)}
  >
    <FontAwesomeIcon className="" icon={isOpen ? faTimes : faBars} size="lg" />
  </button>

  {/* Sidebar */}
  <div
  className={`fixed h-full bg-primary border border-white md:z-40 text-accent z-40
    ${isOpen ? 'w-[265px] opacity-100' : 'w-[265px] opacity-100'} md:w-[265px] md:opacity-100 slg:w-[265px] slg:opacity-100 md:flex md:rounded-e-[20px] rounded-e-[10px] overflow-hidden
    ${!isOpen && 'md:hidden' } md:transition-all md:duration-500 md:ease-in-out`}
>
    <div className="w-full h-full flex flex-col items-center justify-between py-6">
      
      {/* Logo Section */}
      <Link to='/admin'>
        <div className=" flex justify-center">
          <img src="../../brosPOSlogo.png" alt="Logo" className="w-32 h-32" />
        </div>
        <hr className="w-96 border-white md:mt-5 mt-5" />

      </Link>
     
      {/* Navigation Menu */}
      <nav className="w-full">
        <ul className="w-full flex flex-col items-center gap-y-2">
          {links.map((link) => (
            <li
              key={link.href}
              className={`w-full border border-primary rounded-md flex justify-start items-center transition duration-200 ${
                location.pathname === link.href
                  ? "bg-white text-primary"
                  : "bg-transparent hover:bg-gray-100 hover:text-primary"
              }`}
            >
              <Link
                to={link.href}
                className="flex items-center gap-3 text-xl w-full px-4 py-2"
              >
                <FontAwesomeIcon icon={link.icon} className="w-5 h-5" />
                <span>{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>


      {/* Optional Footer or Additional Links */}
      <div className="text-center text-sm text-white pb-4">
        © {new Date().getFullYear()} BrosPOS Company
      </div>
    </div>
  </div>

  {/* Background Overlay */}
  {isOpen && (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
      onClick={() => setIsOpen(false)}
    ></div>
  )}
</>

  );
};

export default AdminSidebar;
