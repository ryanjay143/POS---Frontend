import { useState } from "react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTachometerAlt, faSignOutAlt, faTimes, faBox, faExchangeAlt } from '@fortawesome/free-solid-svg-icons';

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle Button */}
      <button 
        className="md:hidden fixed top-4 left-4 z-50 text-accent bg-primary p-2 rounded-md shadow-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
      </button>
      
      {/* Sidebar */}
      <div 
        className={`fixed h-full bg-primary text-accent transition-all duration-300 ease-in-out z-40 
          ${isOpen ? "w-[250px]" : "w-0"} md:w-[250px] md:flex md:rounded-e-[20px] overflow-hidden`}
      >
        <div className="w-full h-full flex flex-col items-center">
          
          {/* Logo Section */}
          <div className="mt-5">
            <img src="/logo.png" alt="Logo" className="w-28 h-28" />
          </div>
          <hr />

          {/* Navigation Menu */}
          <NavigationMenu className="w-full -mt-80">
            <NavigationMenuList className="w-full grid grid-rows-4 grid-flow-col gap-4">
              <NavigationMenuItem>
                <NavigationMenuLink href="/admin" className="flex items-center gap-3 text-xl">
                  <FontAwesomeIcon icon={faTachometerAlt} /> Dashboard
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/user-settings" className="flex items-center gap-3 text-xl">
                <FontAwesomeIcon icon={faBox} /> Products
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/logout" className="flex items-center gap-3 text-xl">
                  <FontAwesomeIcon icon={faExchangeAlt } /> Transaction
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

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
