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
    <div className="ml-72 md:w-full md:font-bold slg:font-bold text-xl md:m-0 md:flex relative md:justify-center md:text-sm justify-center md:items-start flex flex-col gap-4 p-2 mt-2 border border-border bg-primary md:rounded-none rounded-md min-h-[80px]">
      <h1 className="md:ml-14">Welcome {role}, {userName}</h1>
    </div>
  );
}

export default Header;