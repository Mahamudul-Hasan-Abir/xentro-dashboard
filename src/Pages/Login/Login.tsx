import {
  FaFacebookSquare,
  FaGitSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

import { toast } from "sonner";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Show success toast
    toast.success("Logged in successfully!");

    // Reset form fields
    if (emailRef.current) emailRef.current.value = "";
    if (passwordRef.current) passwordRef.current.value = "";
    navigate("/");
  };
  return (
    <div className="flex justify-center items-center w-full h-screen bg-[#eef6ff]">
      <form
        className="bg-white w-[500px] p-10 shadow-2xl rounded-xl"
        onSubmit={handleSubmit}
      >
        {/* Top Part */}
        <div>
          <div className="flex justify-center py-6 gap-1 items-center">
            <img
              className="size-15"
              src="https://res.cloudinary.com/dnfqhy8di/image/upload/v1738862232/xentro_nntjqf.png"
              alt=""
            />
            <h1 className="text-3xl font-bold">
              <span className="text-[#ec3327]">XEN</span>
              <span className="text-[#f3b60c]">TRO</span>
            </h1>
          </div>
          {/* Welcome  */}
          <div>
            <h2 className="text-[#3b81f6] text-xl text-center pb-2 font-semibold">
              Welcome Back !
            </h2>
            <p className="text-[#64748b] text-center">
              Sign in to continue to XENTRO
            </p>
          </div>
        </div>
        {/* Input Part */}
        <div className="my-4">
          {/* First input */}
          <p className="mb-2">UserName/Email Id</p>
          <input
            className="w-full h-10 rounded-lg p-5  border-[#e2e8f0] border-[1px]"
            type="text"
            required
            ref={emailRef}
          />
        </div>
        <div className="my-4">
          {/* Second input */}
          <p className="mb-2">Password</p>
          <input
            className="w-full h-10 rounded-lg p-5  border-[#e2e8f0] border-[1px]"
            type="password"
            required
            ref={passwordRef}
          />
        </div>
        <div className="flex gap-2 items-center">
          <input
            className="size-4 bg-[#eef6ff]"
            type="checkbox"
            name=""
            id=""
          />
          <p>Remember me</p>
        </div>
        <button
          type="submit"
          className="bg-[#3b81f6] px-5 py-2 my-5 text-white rounded-md w-full"
        >
          Sign In
        </button>

        {/* Social Media */}
        <div className="my-10 border-b-[1px] border-dashed border-[#66768d]">
          <p className="text-center text-[#66768d]">Sign in with</p>
        </div>

        <div className="flex justify-center my-10 gap-3">
          <FaFacebookSquare className="size-10 text-[#2463eb]" />
          <FaInstagramSquare className="size-10 text-[#f8475a]"></FaInstagramSquare>
          <FaTwitterSquare className="size-10 text-[#0084c7]"></FaTwitterSquare>
          <FaGitSquare className="size-10 text-[#64748b]"></FaGitSquare>
        </div>

        <p className="text-[#64748b] text-center">
          Don't have an account ?{" "}
          <span className="font-semibold underline">SignUp</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
