import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "../../plugin/axios";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { faEye, faEyeSlash, faSignIn, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface LoginFormInputs {
  credential: string;
  password: string;
}

function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword((prevState) => !prevState);

  useEffect(() => {
    try {
      const token = localStorage.getItem("access_token");
      if (token) {
        navigate("/admin", { replace: true });
      }
    } catch (error) {
      console.error("Error checking localStorage token:", error);
    }
  }, [navigate]);

  const handleLogin = async (data: LoginFormInputs) => {
    if (loading) return;
    setLoading(true);

    try {
      const response = await axios.post("login", data);

      // Store token and user details in localStorage
      localStorage.setItem("access_token", response.data.access_token);
      localStorage.setItem("username", response.data.user.username);
      localStorage.setItem("email", response.data.user.email);
      localStorage.setItem("role", response.data.user.role);

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Login Successful",
        showConfirmButton: false,
        timer: 1500,
      });

      setTimeout(() => {
        const userRole = response.data.user.role;
        navigate(userRole === "0" ? "/admin" : "/admin/pos", { replace: true });
      }, 1500);
    } catch (error: any) {
      console.error("Login failed", error);

      const errorMessage =
        error.response?.data?.message || "Invalid email or password.";

      Swal.fire({
        position: "center",
        icon: "error",
        title: "Login Failed",
        text: errorMessage,
        showConfirmButton: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-primary flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold text-black p-5">
        Good Morning, Welcome to POS System
      </h1>

      <Card className="w-96 md:w-80 bg-background">
        <CardHeader>
          <Link to="/login">
            <div className="flex flex-col items-center">
              <img
                src="./logo/png/1.png"
                alt="logo"
                className="w-52 h-36 rounded-full"
              />
            </div>
          </Link>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(handleLogin)} className="flex flex-col gap-4">
            {/* Credential Input */}
            <div className="relative">
              <Input
                type="text"
                placeholder="Email or username"
                className="h-12"
                {...register("credential", { required: "Email or username is required" })}
              />
              <FontAwesomeIcon
                icon={faUser}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              />
              {errors.credential?.message && (
                <p className="text-red-500 text-sm">{String(errors.credential.message)}</p>
              )}
            </div>

            {/* Password Input */}
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="h-12"
                {...register("password", { required: "Password is required" })}
              />
              <FontAwesomeIcon
                icon={showPassword ? faEye : faEyeSlash}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                onClick={togglePasswordVisibility}
              />
              {errors.password?.message && (
                <p className="text-red-500 text-sm">{String(errors.password.message)}</p>
              )}
            </div>

            {/* Forgot Password */}
            <div className="flex justify-end">
              <Link to="/forgot-password" className="text-sm text-black">
                Forgot Password?
              </Link>
            </div>

            {/* Login Button */}
            <Button
              type="submit"
              disabled={loading}
              className="text-white p-2 h-10 rounded-md flex items-center justify-center gap-2 bg-primary hover:bg-yellow-200"
            >
              {loading ? (
                <>
                  <span>Logging in...</span>
                  <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-4 h-4"></span>
                </>
              ) : (
                <>
                  <FontAwesomeIcon icon={faSignIn} />
                  <span>Login</span>
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Login;
