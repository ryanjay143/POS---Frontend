import { faFaceSmile, faUserCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

function Header() {
  const [userName, setUserName] = useState("User");
  const [role, setRole] = useState("Admin"); 
  
  useEffect(() => {
    const savedName = localStorage.getItem("username") || "Admin";
    setUserName(savedName);

    const savedRole = localStorage.getItem("role") || "0"; 
    setRole(savedRole === "1" ? "User" : "Admin");
  }, []);

  return (
    // Header component here...
    <div className="relative md:ml-10 sm:ml-64 flex flex-row items-center gap-4">
      <div className="flex flex-row items-center gap-4">
        <div className="flex flex-col items-start">
          <span className="text-accent text-2xl font-bold">Hey,  {userName} <FontAwesomeIcon icon={faFaceSmile} /></span> 
          <div className="flex flex-row items-center gap-2">
            <span className="text-accent text-base">Role: {role}</span> 
            <FontAwesomeIcon icon={faUserCog} className="text-accent" />
          </div>
        </div>
      </div>
    </div>
   
  );
}

export default Header;