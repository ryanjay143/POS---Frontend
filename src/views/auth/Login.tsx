import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "../../plugin/axios";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { faEye, faEyeSlash, faSignIn, faUser  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      navigate("/admin", { replace: true });
    }
  }, [navigate]);

  const handleLogin = async (data: { email: any; password: any }) => {
    if (loading) return;
    setLoading(true);

    try {
      const response = await axios.post("login", data);
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
        if (response.data.user.role == "0")
        navigate("/admin", { replace: true });
        else
        navigate("/admin/pos", { replace: true });
      }, 1500);
    } catch (error: any) {
      console.error("Login failed", error);
      let errorMessage = "Invalid email or password.";

      if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      }

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
          <Link to='/login'>
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
          <Input  
            type="text"
            placeholder="Email or username"
            className="h-12 "
          
            {...register("credential", { required: "Email or username is required" })}
           
          />
         <FontAwesomeIcon className="w-6 h-6 mt-3 ml-[300px] md:ml-[240px] slg:ml-[240px] absolute text-[#fef08a]" icon={faUser}/>
          {errors.credential && <p className="text-red-500 text-sm">{errors.credential.message}</p>}

            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="mb-5 h-12"
              {...register("password", { required: "Password is required" })}
            />
            <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash } className="w-6 h-6 ml-[90%] mt-[-70px] md:ml-[88%] slg:ml-[88%] text-[#fef08a]" 
            onClick={togglePasswordVisibility} />
           
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

            <div className="flex justify-end items-end mb-2">
              <a href="#" className="text-sm t">
                Forgot Password?
              </a>
              {/* <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <label htmlFor="remember" className="text-sm font-medium">
                  Remember me
                </label>
              </div> */}
           
            </div>
            <Button type="submit" disabled={loading} className="text-white p-2 h-10 rounded-md flex items-center justify-center gap-2">
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



            {/* <button
              type="button"
              className="text-white p-2 rounded-md bg-[#4ade80] flex items-center justify-center gap-2"
            >
              <FontAwesomeIcon icon={faRegistered} />
              Register
            </button> */}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Login;
