
import { Navigate, Outlet } from "react-router-dom";
import { ModeToggle } from "../components/mode-toogle";
import { ThemeProvider } from "../components/themeProvider";
import Swal from "sweetalert2";
import AdminSidebar from "@/views/admin/sidebar/AdminSidebar";
import Profile from "@/views/admin/profile/Profile";
import Header from "@/views/admin/profile/Header";
import Footer from "@/views/admin/footer/Footer";
import Clock from "@/components/clock/clock";

const AdminProtectedRoute = () => {
  const token = localStorage.getItem("access_token");

  if (!token) {
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
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <AdminSidebar />
        <div className="ml-72 md:ml-0 slg:ml-0 md:w-full slg:w-full flex flex-row md:rounded-b-[5px] rounded-b-[5px] justify-between items-center px-6 py-2 bg-primary w-[80%]">
          <Header />
          <Clock />
          <div className="flex flex-row items-center md:fixed slg:fixed slg:z-50 md:right-0 gap-2 slg:right-0 md:top-3 md:gap-2 md:z-50 slg:mr-10">
            <ModeToggle />
            <Profile />
          </div>
        </div>
        <Outlet />
        <Footer />
      </ThemeProvider>
 
    </>
  );

};

export default AdminProtectedRoute;
