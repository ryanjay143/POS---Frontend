
import { Navigate, Outlet } from "react-router-dom";
import { ModeToggle } from "../components/mode-toogle";
import { ThemeProvider } from "../components/themeProvider";
import Swal from "sweetalert2";
import AdminSidebar from "@/views/admin/sidebar/AdminSidebar";
import Profile from "@/views/admin/profile/Profile";

const AdminProtectedRoute = () => {
  const token = localStorage.getItem("access_token");

  if (!token) {
    // Redirect to login page if token is not found
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Unauthorized",
      text: "You need to login to access this page",
      showConfirmButton: true,
    });
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="bg-background flex md:flex-col md:w-full">
        <div className="absolute z-30 md:fixed flex gap-3 md:mt-0 items-center right-0 md:top-[-10px] p-7">
          <ModeToggle />
          <Profile />
        </div>
        <div className="flex w-full">
          <AdminSidebar />
          <Outlet />
        </div>
       
      </div>
    </ThemeProvider>
    </>
  );

};

export default AdminProtectedRoute;
