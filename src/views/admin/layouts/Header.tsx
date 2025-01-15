import { useEffect, useState } from "react";


function header() {
    const [userName, setUserName] = useState("User");
    const [role, setRole] = useState("Role");


    useEffect(() => { 
        const savedName = localStorage.getItem('name') || 'Admin'; setUserName(savedName); 
        const saveRole = localStorage.getItem('role') || 'Admin'; setRole(saveRole); 
      }, []);


  return (
        <div className='ml-72 text-xl font-bold justify-center items-start relative flex flex-col gap-4 w-xl p-2 m-4 border border-border bg-primary rounded-md min-h-[80px]'>
            Welcome {role}, {userName}
        </div>
  )
}

export default header