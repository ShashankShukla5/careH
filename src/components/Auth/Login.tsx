"use client";

// import type React from "react"
// import { useState } from "react"
// import { Card } from "@/components/components/ui/card"
// import { Input } from "@/components/components/ui/input"
// import { Button } from "@/components/components/ui/button"
// import { Label } from "@/components/components/ui/label"
// import { Mail, Lock, Heart, Star, Users } from "lucide-react"

// const ModernLogin: React.FC = () => {
//   const [email, setEmail] = useState("eve.holt@reqres.in")
//   const [password, setPassword] = useState("cityslicka")
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState<string | null>(null)

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setLoading(true)
//     setError(null)

//     try {
//       const res = await fetch("https://reqres.in/api/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "x-api-key": "reqres-free-v1",
//         },
//         body: JSON.stringify({ email, password }),
//       })
//       const data = await res.json()

//       if (data.token) {
//         localStorage.setItem("token", data.token)
//         // Navigate to dashboard or home page
//         window.location.href = "/"
//       } else {
//         setError(data.error || "Login failed")
//       }
//     } catch (e) {
//       setError("Network error occurred")
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 opacity-10 bg-cover bg-center bg-no-repeat"
//         style={{
//           backgroundImage: `url('/watercolor-daycare.png')`,
//         }}
//       />

//       {/* Floating Elements */}
//       <div className="absolute top-20 left-10 animate-bounce">
//         <Heart className="w-8 h-8 text-pink-300 opacity-60" />
//       </div>
//       <div className="absolute top-40 right-20 animate-pulse">
//         <Star className="w-6 h-6 text-yellow-300 opacity-60" />
//       </div>
//       <div className="absolute bottom-32 left-20 animate-bounce delay-1000">
//         <Users className="w-10 h-10 text-blue-300 opacity-60" />
//       </div>
//       <div className="absolute bottom-20 right-10 animate-pulse delay-500">
//         <Heart className="w-7 h-7 text-purple-300 opacity-60" />
//       </div>

//       {/* Main Content */}
//       <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
//         <Card className="w-full max-w-md backdrop-blur-xl bg-white/80 border-0 shadow-2xl rounded-3xl">
//           {/* Header Section */}
//           <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-8 text-center">
//             <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white flex items-center justify-center border-white">
//               <img
//                 src="https://heartsinthemiddle.org/pluginfile.php/1/core_admin/logo/0x200/1754974492/thumb_hearts-4B%20copy.png"
//                 alt="Hearts in the Middle"
//                 className="w-12 h-12 rounded-full"
//               />
//             </div>
//             <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
//             <p className="text-white/90 text-sm">Sign in to your account</p>
//           </div>

//           {/* Form Section */}
//           <div className="p-8">
//             <form onSubmit={handleLogin} className="space-y-6">
//               {/* Email Field */}
//               <div className="space-y-2">
//                 <Label htmlFor="email" className="text-gray-700 font-medium flex items-center gap-2">
//                   <Mail className="w-4 h-4 text-blue-500" />
//                   Email Address
//                 </Label>
//                 <Input
//                   id="email"
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                   placeholder="Enter your email"
//                   className="h-12 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-0 transition-all duration-300 bg-gray-50/50"
//                 />
//               </div>

//               {/* Password Field */}
//               <div className="space-y-2">
//                 <Label htmlFor="password" className="text-gray-700 font-medium flex items-center gap-2">
//                   <Lock className="w-4 h-4 text-blue-500" />
//                   Password
//                 </Label>
//                 <Input
//                   id="password"
//                   type="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                   placeholder="Enter your password"
//                   className="h-12 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-0 transition-all duration-300 bg-gray-50/50"
//                 />
//               </div>

//               {/* Error Message */}
//               {error && (
//                 <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm text-center">
//                   {error}
//                 </div>
//               )}

//               {/* Login Button */}
//               <Button
//                 type="submit"
//                 disabled={loading}
//                 className="cursor-pointer w-full h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold text-base shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
//               >
//                 {loading ? (
//                   <div className="flex items-center gap-2">
//                     <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
//                     Signing In...
//                   </div>
//                 ) : (
//                   "Sign In"
//                 )}
//               </Button>

//               {/* Additional Links */}
//               <div className="text-center space-y-2 pt-4">
//                 <p className="text-sm text-gray-600">
//                   Don't have an account?{" "}
//                   <button
//                     type="button"
//                     className="text-blue-600 hover:text-blue-700 font-medium hover:underline transition-colors cursor-pointer"
//                     onClick={() => {
//                       window.location.href = "/signup"
//                     }}
//                   >
//                     Sign up here
//                   </button>
//                 </p>
//                 <button
//                   type="button"
//                   className="text-sm text-gray-500 hover:text-gray-700 hover:underline transition-colors cursor-pointer"
//                   onClick={() => {
//                     alert("Forgot password functionality would be implemented here")
//                   }}
//                 >
//                   Forgot your password?
//                 </button>
//               </div>
//             </form>
//           </div>
//         </Card>
//       </div>
//     </div>
//   )
// }

// export default ModernLogin

// import { useState } from "react";
// import { Card } from "../components/ui/card";
// import { Button } from "../components/ui/button";
// const baseOrigin = import.meta.env.VITE_BASE_ORIGIN

// export default function LoginPage() {
//   const [email, setEmail] = useState("eve.holt@reqres.in")
//   const [password, setPassword] = useState("cityslicka")
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState<string | null>(null)

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setLoading(true)
//     setError(null)

//     try {
//       const res = await fetch(`${baseOrigin}/login/`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "x-api-key": "reqres-free-v1",
//         },
//         body: JSON.stringify({ email, password }),
//       })
//       const data = await res.json()

//       if (data.token) {
//         localStorage.setItem("token", data.token)
//         // Navigate to dashboard or home page
//         window.location.href = "/"
//       } else {
//         setError(data.error || "Login failed")
//       }
//     } catch (e) {
//       setError("Network error occurred")
//     } finally {
//       setLoading(false)
//     }
//   }
//   return (
//     <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-l from-[#F4BEA1] via-[#F0F2FC] to-[#C0C8F6] p-6">
//       <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 rounded-2xl shadow-xl overflow-hidden bg-white">
//         {/* Left Section - Image */}
//         <div className="relative hidden md:block">
//           <img
//             src="/image1.jpeg"
//             alt="Child Hugging Teddy"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute bottom-6 left-6 text-white text-sm space-y-2">
//             <p className="italic">
//               “Justice delayed is justice denied. Streamline your case management
//               with our comprehensive judicial platform.”
//             </p>
//             <div className="flex gap-4">
//               <span>✔ Secure & Compliant</span>
//               <span>✔ Real-time Updates</span>
//               <span>✔ Professional Grade</span>
//             </div>
//           </div>
//         </div>

//         {/* Right Section - Login Form */}
//         <div className="flex items-center justify-center bg-gradient-to-r from-white via-purple-50 to-orange-50 p-10">
//           <div className="w-full max-w-sm space-y-6">
//             {/* Logo */}
//             <div className="flex flex-col items-center">
//                <img
//                   src="https://heartsinthemiddle.org/pluginfile.php/1/core_admin/logo/0x200/1754974492/thumb_hearts-4B%20copy.png"
//                   alt="Logo"
//                   className="h-20"
//                 />
//               <h2 className="text-2xl font-semibold">Login</h2>
//               <p className="text-gray-500 text-sm">
//                 Access your account to manage cases securely
//               </p>
//             </div>

//             {/* Form */}
//             <form onSubmit={
//               handleLogin
//             } className="space-y-4">
//               <div>
//                 <label className="block text-sm mb-1">Email Address *</label>
//                 <input
//                   type="email"
//                   required
//                   value={email}
//                   onChange={(e) =>
//                     setEmail(e.target.value)
//                   }
//                   placeholder="Enter your email address"
//                   className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:ring-2 focus:ring-[#D15705] outline-none"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm mb-1">Password *</label>
//                 <input
//                   type="password"
//                   required
//                   value={password}
//                   onChange={(e) =>
//                     setPassword(e.target.value)
//                   }
//                   placeholder="Enter your password"
//                   className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:ring-2 focus:ring-[#D15705] outline-none"
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="w-full py-3 rounded-lg text-white bg-[#414141] hover:bg-black transition"
//               >
//                 Login ✓
//               </button>
//             </form>

//             {/* Footer */}
//             <p className="text-sm text-center text-gray-500">
//               Don’t have an account?{" "}
//               <a href="/signup" className="text-[#D15705] font-medium">
//                 Sign Up
//               </a>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>

//   );
// }

import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const [step, setStep] = useState<"login" | "otp">("login"); // step control

  const baseOrigin = import.meta.env.VITE_BASE_ORIGIN; // from .env

  // Login API (email + password)
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`${baseOrigin}login/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (!response.ok) {
        toast.error(result.meta?.message || "Login failed");
        return;
      }
     
      const accessToken = result.data?.accessToken;
      const refreshToken = result.data?.refreshToken;
      const userType = result.data?.userData?.userType;

      if (accessToken) {
        // Save tokens
         localStorage.setItem("token", accessToken);
        localStorage.setItem("refreshToken", refreshToken);

        toast.success(result.meta?.message || "Login successful");

        // Redirect based on userType
        if (userType === "judge") {
          navigate("/");
        } else if (userType === "lawyer") {
          navigate("/icl-dashboard");
        } else if (userType === "contact_manager") {
          navigate("/contact-manager-dashboard");
        } else {
          alert("Unknown user type. Please contact support.");
        }
      } else {
        // No token → require OTP
        setStep("otp");
      }
    } catch (err) {
      console.error(err);
      alert("Error logging in");
    }
  };

  // OTP Verification API
  const handleOtpVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`${baseOrigin}verify-otp/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });

      const result = await response.json();

     if (!response.ok) {
        toast.error(result.meta?.message || "Login failed");
        return;
      }

      const accessToken = result.data?.accessToken;
      const refreshToken = result.data?.refreshToken;
      const userType = result.data?.userData?.userType;

      if (accessToken) {
        // Save tokens
        localStorage.setItem("token", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
         console.log("Access Token:");
         toast.success(result.meta?.message || "Login successful");

        // Redirect based on userType
        if (userType ==="judge") {
          navigate("/");
          console.log("navigated to /");
        } else if (userType === "lawyer") {
          navigate("/icl-dashboard");
        } else if (userType === "contact_manager") {
          navigate("/contact-manager-dashboard");
        } else {
          alert("Unknown user type. Please contact support.");
        }
      } else {
        alert("Invalid OTP ❌");
      }
    } catch (err) {
      console.error(err);
      alert("Error verifying OTP");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-l from-[#F4BEA1] via-[#F0F2FC] to-[#C0C8F6] p-6">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 rounded-2xl shadow-xl overflow-hidden bg-white">
        {/* Left Section */}
        <div className="relative hidden md:block">
          <img
            src="/image1.jpeg"
            alt="Child Hugging Teddy"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Section */}
        <div className="flex items-center justify-center bg-gradient-to-r from-white via-purple-50 to-orange-50 p-10">
          <div className="w-full max-w-sm space-y-6">
            {/* Logo */}
            <div className="flex flex-col items-center">
              <img
                src="https://heartsinthemiddle.org/pluginfile.php/1/core_admin/logo/0x200/1754974492/thumb_hearts-4B%20copy.png"
                alt="Logo"
                className="h-20"
              />
              <h2 className="text-2xl font-semibold">
                {step === "login" ? "Login" : "Enter OTP"}
              </h2>
              <p className="text-gray-500 text-sm">
                {step === "login"
                  ? "Access your account to manage cases securely"
                  : "Enter the 4-digit OTP sent to your email"}
              </p>
            </div>

            {/* Login Form */}
            {step === "login" && (
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-sm mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:ring-2 focus:ring-[#D15705] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1">Password *</label>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:ring-2 focus:ring-[#D15705] outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg text-white bg-[#414141] hover:bg-black transition"
                >
                  Login ✓
                </button>
              </form>
            )}

            {/* OTP Form */}
            {step === "otp" && (
              <form onSubmit={handleOtpVerify} className="space-y-4">
                <div>
                  <label className="block text-sm mb-1">OTP *</label>
                  <input
                    type="text"
                    maxLength={4}
                    required
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))} // only digits
                    placeholder="Enter 4-digit OTP"
                    className="w-full rounded-lg border border-gray-300 p-3 text-sm tracking-widest text-center font-mono focus:ring-2 focus:ring-[#D15705] outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg text-white bg-[#414141] hover:bg-black transition"
                >
                  Verify OTP ✓
                </button>
              </form>
            )}

            {/* Footer */}
           {step === "login" && (
        <p className="text-sm text-center text-gray-500">
          Don’t have an account?{" "}
          <button
            onClick={() => navigate("/signup")}
            className="text-[#D15705] font-medium hover:underline"
          >
            Sign Up
          </button>
        </p>
      )}
          </div>
        </div>
      </div>
    </div>
  );
}
