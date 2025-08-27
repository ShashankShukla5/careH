// "use client";

// import type React from "react";
// import { useState } from "react";
// import { Card, CardContent } from "../components/ui/card";
// import { Input } from "../components/ui/input";
// import { Label } from "../components/ui/label";
// import { Button } from "../components/ui/button";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "../components/ui/select";
// import { Badge } from "../components/ui/badge";
// import {
//   CheckCircle,
//   User,
//   Mail,
//   Phone,
//   MapPin,
//   FileText,
//   Building,
//   GraduationCap,
// } from "lucide-react";
// import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

// const initialState = {
//   userType: "", // residing or non-residing
//   familyCourtFile: "",
//   fullName: "",
//   phone: "",
//   email: "",
//   address: "",
//   zipCode: "",
//   gender: "",
//   password: "",
//   paymentSelection: "",
//   courtOrderFile: "",
//   iclEmail: "",
//   schoolEmail: "",
//   courtAssociateEmail: "",
// };

// const ModernSignup: React.FC = () => {
//   const navigate = useNavigate();
//   const [form, setForm] = useState(initialState);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [currentStep, setCurrentStep] = useState(1);

//   const handleChange = (name: string, value: string) => {
//     setForm({ ...form, [name]: value });
//     setError(null);
//   };

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     handleChange(e.target.name, e.target.value);
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     try {
//       const payload = {
//         email: form.email,
//         password: form.password,
//         name: form.fullName,
//         mobile: form.phone,
//         address: form.address,
//         gender: form.gender,
//       };

//       const res = await fetch("/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(payload),
//       });

//       if (!res.ok) {
//         const errorData = await res.json();
//         throw new Error(errorData.message || "Signup failed");
//       }

//       const data = await res.json();
//       toast.success("Signup successful!");

//       // redirect to login after success
//       navigate("/login");
//     } catch (err: any) {
//       setError(err.message || "Signup failed. Please try again.");
//       toast.error(err.message || "Signup failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const canProceedToStep2 =
//     form.userType && form.familyCourtFile && form.fullName;
//   const canSubmit =
//     canProceedToStep2 &&
//     form.phone &&
//     form.email &&
//     form.zipCode &&
//     form.paymentSelection;

//   return (
//     <div className="min-h-screen relative overflow-hidden">
//       {/* Background with child care theme */}
//       <div
//         className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"
//         style={{
//           backgroundImage: `url('/watercolor-daycare.png')`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           opacity: 0.1,
//         }}
//       />

//       {/* Floating elements for visual appeal */}
//       <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-200 rounded-full opacity-20 animate-pulse" />
//       <div className="absolute top-40 right-20 w-16 h-16 bg-pink-200 rounded-full opacity-20 animate-bounce" />
//       <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-200 rounded-full opacity-20 animate-pulse" />

//       <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
//         <Card className="w-full max-w-2xl backdrop-blur-sm bg-white/90 border-0 shadow-2xl rounded-3xl overflow-hidden">
//           {/* Header */}
//           <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-8 text-white">
//             <div className="text-center">
//               <h1 className="text-3xl font-bold mb-2">CareH Registration</h1>
//               <p className="text-blue-100">Join our child care community</p>
//             </div>

//             {/* Progress indicator */}
//             <div className="flex justify-center mt-6 space-x-4">
//               <div
//                 className={`flex items-center space-x-2 ${
//                   currentStep >= 1 ? "text-white" : "text-blue-200"
//                 }`}
//               >
//                 <div
//                   className={`w-8 h-8 rounded-full flex items-center justify-center ${
//                     currentStep >= 1 ? "bg-white text-blue-600" : "bg-blue-400"
//                   }`}
//                 >
//                   {currentStep > 1 ? <CheckCircle className="w-5 h-5" /> : "1"}
//                 </div>
//                 <span className="text-sm font-medium">Basic Info</span>
//               </div>
//               <div
//                 className={`flex items-center space-x-2 ${
//                   currentStep >= 2 ? "text-white" : "text-blue-200"
//                 }`}
//               >
//                 <div
//                   className={`w-8 h-8 rounded-full flex items-center justify-center ${
//                     currentStep >= 2 ? "bg-white text-blue-600" : "bg-blue-400"
//                   }`}
//                 >
//                   {currentStep > 2 ? <CheckCircle className="w-5 h-5" /> : "2"}
//                 </div>
//                 <span className="text-sm font-medium">Details</span>
//               </div>
//             </div>
//           </div>

//           <CardContent className="p-8">
//             <form onSubmit={handleSubmit} className="space-y-6">
//               {/* Step 1: User Type Selection and Basic Info */}
//               {currentStep === 1 && (
//                 <div className="space-y-6 animate-in slide-in-from-right duration-300">
//                   <div className="text-center mb-6">
//                     <h2 className="text-xl font-semibold text-gray-800 mb-2">
//                       Let's get started
//                     </h2>
//                     <p className="text-gray-600">
//                       Tell us about your role in the family
//                     </p>
//                   </div>

//                   {/* User Type Selection */}
//                   <div className="space-y-3">
//                     <Label className="text-sm font-medium text-gray-700 flex items-center gap-2">
//                       <User className="w-4 h-4" />I am the
//                     </Label>
//                     <div className="grid grid-cols-2 gap-4">
//                       <button
//                         type="button"
//                         onClick={() => handleChange("userType", "residing")}
//                         className={`p-4 rounded-xl border-2 transition-all duration-200 ${
//                           form.userType === "residing"
//                             ? "border-blue-500 bg-blue-50 text-blue-700"
//                             : "border-gray-200 hover:border-gray-300 text-gray-600"
//                         }`}
//                       >
//                         <div className="text-center">
//                           <div className="font-semibold">Residing Parent</div>
//                           <div className="text-sm opacity-75">
//                             Lives with child
//                           </div>
//                         </div>
//                       </button>
//                       <button
//                         type="button"
//                         onClick={() => handleChange("userType", "non-residing")}
//                         className={`p-4 rounded-xl border-2 transition-all duration-200 ${
//                           form.userType === "non-residing"
//                             ? "border-purple-500 bg-purple-50 text-purple-700"
//                             : "border-gray-200 hover:border-gray-300 text-gray-600"
//                         }`}
//                       >
//                         <div className="text-center">
//                           <div className="font-semibold">
//                             Non-Residing Parent
//                           </div>
//                           <div className="text-sm opacity-75">Visits child</div>
//                         </div>
//                       </button>
//                     </div>
//                   </div>

//                   {form.userType && (
//                     <div className="space-y-4 animate-in slide-in-from-bottom duration-300">
//                       <div className="flex items-center gap-2 mb-4">
//                         <Badge
//                           variant={
//                             form.userType === "residing"
//                               ? "default"
//                               : "secondary"
//                           }
//                           className="px-3 py-1"
//                         >
//                           {form.userType === "residing"
//                             ? "Residing Parent"
//                             : "Non-Residing Parent"}
//                         </Badge>
//                       </div>

//                       {/* Family Court File */}
//                       <div className="space-y-2">
//                         <Label
//                           htmlFor="familyCourtFile"
//                           className="text-sm font-medium text-gray-700 flex items-center gap-2"
//                         >
//                           <FileText className="w-4 h-4" />
//                           Family Court File Number
//                         </Label>
//                         <Input
//                           id="familyCourtFile"
//                           name="familyCourtFile"
//                           value={form.familyCourtFile}
//                           onChange={handleInputChange}
//                           required
//                           placeholder="Enter your court file number"
//                           className="h-12 rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
//                         />
//                       </div>

//                       {/* Full Name */}
//                       <div className="space-y-2">
//                         <Label
//                           htmlFor="fullName"
//                           className="text-sm font-medium text-gray-700 flex items-center gap-2"
//                         >
//                           <User className="w-4 h-4" />
//                           Your Full Name
//                         </Label>
//                         <Input
//                           id="fullName"
//                           name="fullName"
//                           value={form.fullName}
//                           onChange={handleInputChange}
//                           required
//                           placeholder={`Enter your name as the ${form.userType} parent`}
//                           className="h-12 rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
//                         />
//                       </div>
//                     </div>
//                   )}

//                   {canProceedToStep2 && (
//                     <Button
//                       type="button"
//                       onClick={() => setCurrentStep(2)}
//                       className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-medium transition-all duration-200"
//                     >
//                       Continue to Details
//                     </Button>
//                   )}
//                 </div>
//               )}

//               {/* Step 2: Detailed Information */}
//               {currentStep === 2 && (
//                 <div className="space-y-6 animate-in slide-in-from-right duration-300">
//                   <div className="text-center mb-6">
//                     <h2 className="text-xl font-semibold text-gray-800 mb-2">
//                       Contact & Legal Details
//                     </h2>
//                     <p className="text-gray-600">
//                       We need some additional information to complete your
//                       registration
//                     </p>
//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div className="space-y-2">
//                       <Label
//                         htmlFor="password"
//                         className="text-sm font-medium text-gray-700 flex items-center gap-2"
//                       >
//                         <Phone className="w-4 h-4" />
//                         Password
//                       </Label>
//                       <Input
//                         id="password"
//                         name="password"
//                         value={form.password}
//                         onChange={handleInputChange}
//                         required
//                         placeholder="Password"
//                         className="h-12 rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
//                       />
//                     </div>

//                     {/* Contact Information */}
//                     <div className="space-y-2">
//                       <Label
//                         htmlFor="phoneOrEmail"
//                         className="text-sm font-medium text-gray-700 flex items-center gap-2"
//                       >
//                         <Phone className="w-4 h-4" />
//                         Phone
//                       </Label>
//                       <Input
//                         id="phone"
//                         name="phone"
//                         value={form.phone}
//                         onChange={handleInputChange}
//                         required
//                         placeholder="Phone number"
//                         className="h-12 rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
//                       />
//                     </div>

//                     <div className="space-y-2">
//                       <Label
//                         htmlFor="email"
//                         className="text-sm font-medium text-gray-700 flex items-center gap-2"
//                       >
//                         <Phone className="w-4 h-4" />
//                         Email
//                       </Label>
//                       <Input
//                         id="email"
//                         name="email"
//                         value={form.email}
//                         onChange={handleInputChange}
//                         required
//                         placeholder="Email address"
//                         className="h-12 rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
//                       />
//                     </div>

//                     <div className="space-y-2">
//                       <Label
//                         htmlFor="address"
//                         className="text-sm font-medium text-gray-700 flex items-center gap-2"
//                       >
//                         <Phone className="w-4 h-4" />
//                         Address
//                       </Label>
//                       <Input
//                         id="address"
//                         name="address"
//                         value={form.address}
//                         onChange={handleInputChange}
//                         required
//                         placeholder="enter your address"
//                         className="h-12 rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
//                       />
//                     </div>

//                     {/* Zip Code */}
//                     <div className="space-y-2">
//                       <Label
//                         htmlFor="zipCode"
//                         className="text-sm font-medium text-gray-700 flex items-center gap-2"
//                       >
//                         <MapPin className="w-4 h-4" />
//                         Zip Code
//                       </Label>
//                       <Input
//                         id="zipCode"
//                         name="zipCode"
//                         value={form.zipCode}
//                         onChange={handleInputChange}
//                         required
//                         placeholder="Your zip code"
//                         className="h-12 rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
//                       />
//                     </div>

//                     <div className="space-y-2">
//                       <Label className="text-sm font-medium text-gray-700">
//                         Gender
//                       </Label>
//                       <Select
//                         value={form.gender}
//                         onValueChange={(value) => handleChange("gender", value)}
//                       >
//                         <SelectTrigger className="h-12 rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500">
//                           <SelectValue placeholder="Who will handle payments?" />
//                         </SelectTrigger>
//                         <SelectContent>
//                           <SelectItem value="male">Male</SelectItem>
//                           <SelectItem value="female">Female</SelectItem>
//                         </SelectContent>
//                       </Select>
//                     </div>
//                     {/* Payment Selection */}
//                     <div className="space-y-2">
//                       <Label className="text-sm font-medium text-gray-700">
//                         Payment Responsibility
//                       </Label>
//                       <Select
//                         value={form.paymentSelection}
//                         onValueChange={(value) =>
//                           handleChange("paymentSelection", value)
//                         }
//                       >
//                         <SelectTrigger className="h-12 rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500">
//                           <SelectValue placeholder="Who will handle payments?" />
//                         </SelectTrigger>
//                         <SelectContent>
//                           <SelectItem value="residing">
//                             Residing Parent
//                           </SelectItem>
//                           <SelectItem value="non-residing">
//                             Non-Residing Parent
//                           </SelectItem>
//                         </SelectContent>
//                       </Select>
//                     </div>
//                   </div>

//                   {/* Court Order File */}
//                   <div className="space-y-2">
//                     <Label
//                       htmlFor="courtOrderFile"
//                       className="text-sm font-medium text-gray-700 flex items-center gap-2"
//                     >
//                       <FileText className="w-4 h-4" />
//                       Court Order File
//                     </Label>
//                     <Input
//                       id="courtOrderFile"
//                       type="file"
//                       name="courtOrderFile"
//                       value={form.courtOrderFile}
//                       onChange={handleInputChange}
//                       required
//                       placeholder="Court order file reference"
//                       className="h-12 rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
//                     />
//                   </div>

//                   {/* Email Addresses */}
//                   <div className="space-y-4">
//                     <h3 className="text-lg font-medium text-gray-800 flex items-center gap-2">
//                       <Mail className="w-5 h-5" />
//                       Professional Contacts
//                     </h3>

//                     <div className="grid grid-cols-1 gap-4">
//                       <div className="space-y-2">
//                         <Label
//                           htmlFor="iclEmail"
//                           className="text-sm font-medium text-gray-700"
//                         >
//                           ICL Email
//                         </Label>
//                         <Input
//                           id="iclEmail"
//                           name="iclEmail"
//                           type="email"
//                           value={form.iclEmail}
//                           onChange={handleInputChange}
//                           placeholder="Independent Children's Lawyer email"
//                           className="h-12 rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
//                         />
//                       </div>

//                       <div className="space-y-2">
//                         <Label
//                           htmlFor="schoolEmail"
//                           className="text-sm font-medium text-gray-700 flex items-center gap-2"
//                         >
//                           <GraduationCap className="w-4 h-4" />
//                           School Email
//                         </Label>
//                         <Input
//                           id="schoolEmail"
//                           name="schoolEmail"
//                           type="email"
//                           value={form.schoolEmail}
//                           onChange={handleInputChange}
//                           placeholder="Child's school contact email"
//                           className="h-12 rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
//                         />
//                       </div>

//                       <div className="space-y-2">
//                         <Label
//                           htmlFor="courtAssociateEmail"
//                           className="text-sm font-medium text-gray-700 flex items-center gap-2"
//                         >
//                           <Building className="w-4 h-4" />
//                           Court Associate Email
//                         </Label>
//                         <Input
//                           id="courtAssociateEmail"
//                           name="courtAssociateEmail"
//                           type="email"
//                           value={form.courtAssociateEmail}
//                           onChange={handleInputChange}
//                           placeholder="Court associate contact email"
//                           className="h-12 rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   {error && (
//                     <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
//                       {error}
//                     </div>
//                   )}

//                   <div className="flex gap-4">
//                     <Button
//                       type="button"
//                       onClick={() => setCurrentStep(1)}
//                       variant="outline"
//                       className="flex-1 h-12 rounded-xl border-gray-200 hover:bg-gray-50"
//                     >
//                       Back
//                     </Button>
//                     <Button
//                       type="submit"
//                       disabled={loading || !canSubmit}
//                       className="flex-1 h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-medium transition-all duration-200 disabled:opacity-50"
//                     >
//                       {loading
//                         ? "Creating Account..."
//                         : "Complete Registration"}
//                     </Button>
//                   </div>
//                 </div>
//               )}
//             </form>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default ModernSignup;
// import { useState } from "react";

// export default function SignupPage() {
//   const [accountCreated, setAccountCreated] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // ✅ API Call for sign up here
//     setAccountCreated(true); // Show success screen after signup
//   };

//   return (
//     <div className="min-h-screen w-full flex items-center justify-center p-6 bg-white">
//       <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 rounded-3xl shadow-xl overflow-hidden">
//         {/* Left Section - Image */}
//         <div className="relative">
//           <img
//             src="/image1.jpeg"
//             alt="Child Hugging Teddy"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute bottom-6 left-6 text-white text-sm max-w-md">
//             <p className="italic mb-3">
//               “Justice delayed is justice denied. Streamline your case
//               management with our comprehensive judicial platform.”
//             </p>
//             <div className="flex gap-6 text-xs">
//               <span>✔ Secure & Compliant</span>
//               <span>✔ Real-time Updates</span>
//               <span>✔ Professional Grade</span>
//             </div>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className="bg-gradient-to-b from-[#FFF6F2] to-[#FDEDE7] flex items-center justify-center p-10">
//           {!accountCreated ? (
//             <form
//               onSubmit={handleSubmit}
//               className="w-full max-w-sm bg-white/60 backdrop-blur-md rounded-2xl p-8 shadow-sm space-y-6"
//             >
//               {/* Logo + Heading */}
//               <div className="flex flex-col items-center text-center space-y-2">
//                 <img
//                   src="https://heartsinthemiddle.org/pluginfile.php/1/core_admin/logo/0x200/1754974492/thumb_hearts-4B%20copy.png"
//                   alt="Logo"
//                   className="h-14"
//                 />
//                 <h2 className="text-lg font-semibold text-gray-900">
//                   Create your account
//                 </h2>
//                 <p className="text-sm text-gray-600">
//                   Join the Judicial Portal to manage cases efficiently
//                 </p>
//               </div>

//               {/* Form Section Title */}
//               <div>
//                 <h3 className="text-base font-semibold text-gray-800">
//                   Account Information
//                 </h3>
//                 <p className="text-xs text-gray-500">Basic sign-up details</p>
//               </div>

//               {/* Form Fields */}
//               <div className="space-y-4">
//                 {/* Email */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     Email Address <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="email"
//                     required
//                     placeholder="Enter your email address"
//                     className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:ring-[#7798EA] focus:border-[#7798EA]"
//                   />
//                 </div>

//                 {/* Phone Number */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     Phone Number <span className="text-red-500">*</span>
//                   </label>
//                   <div className="flex mt-1">
//                     <select className="rounded-l-lg border border-gray-300 bg-gray-50 px-2 text-sm focus:ring-[#7798EA] focus:border-[#7798EA]">
//                       <option value="+61">🇦🇺 +61</option>
//                       <option value="+91">🇮🇳 +91</option>
//                       <option value="+1">🇺🇸 +1</option>
//                     </select>
//                     <input
//                       type="tel"
//                       required
//                       placeholder="Enter your phone number"
//                       className="flex-1 rounded-r-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:ring-[#7798EA] focus:border-[#7798EA]"
//                     />
//                   </div>
//                 </div>

//                 {/* Password */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     Password <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="password"
//                     required
//                     placeholder="Create a strong password"
//                     className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:ring-[#7798EA] focus:border-[#7798EA]"
//                   />
//                 </div>
//               </div>

//               {/* CTA */}
//               <button
//                 type="submit"
//                 className="w-full bg-black text-white py-2 px-4 rounded-lg shadow hover:bg-gray-800 transition"
//               >
//                 Create Account ✓
//               </button>

//               {/* Footer */}
//               <p className="text-xs text-center text-gray-600">
//                 Already have an account?{" "}
//                 <a href="/login" className="text-gray-900 font-medium">
//                   Login
//                 </a>
//               </p>
//             </form>
//           ) : (
//             <div className="text-center space-y-6">
//               <img src="/logo.png" alt="Logo" className="mx-auto w-16" />
//               <h2 className="text-xl font-semibold text-gray-800">
//                 Account Created!
//               </h2>
//               <p className="text-sm text-gray-600">
//                 Your account has been created.
//               </p>
//               <button className="bg-black text-white py-2 px-6 rounded-lg shadow hover:bg-gray-800 transition">
//                 Start Case Registration →
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }


import { useState } from "react"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"
import { Card, CardContent } from "../components/ui/card"
const baseOrigin = import.meta.env.VITE_BASE_ORIGIN

export default function SignupPage() {
  const navigate = useNavigate()
  console.log("Base Origin:", baseOrigin)
  // Form state
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    password: "",
  })

  const [loading, setLoading] = useState(false)

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    try {
      
      const res = await fetch(`${baseOrigin}register/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (res.ok) {
        toast.success("Account created successfully!")
        navigate("/account-created")
      } else {
        toast.error(data.message || "Signup failed. Please try again.")
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again later.")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-[#C3CBF5] via-[#E2E4F5] to-[#F2D5C6] flex items-center justify-center p-6">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 rounded-2xl shadow-xl overflow-hidden bg-white/30 backdrop-blur-lg">
        
        {/* Left Section - Image with Quote */}
        <div className="relative">
          <img
            src="/image1.jpeg"
            alt="Child Hugging Teddy"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-6 left-6 text-white text-sm space-y-2 max-w-xs">
            <p className="italic">
              “Justice delayed is justice denied. Streamline your case management with our comprehensive judicial platform.”
            </p>
            <div className="flex flex-wrap gap-4 text-xs mt-2">
              <span className="flex items-center gap-1">✔ Secure & Compliant</span>
              <span className="flex items-center gap-1">✔ Real-time Updates</span>
              <span className="flex items-center gap-1">✔ Professional Grade</span>
            </div>
          </div>
        </div>

        {/* Right Section - Signup Form */}
        <div className="flex flex-col justify-center items-center p-10 bg-gradient-to-r from-white via-purple-50 to-orange-50">
          <div className="w-full max-w-md text-center space-y-6">
            {/* Logo */}
            <div className="flex justify-center mb-0">
               <img
                  src="https://heartsinthemiddle.org/pluginfile.php/1/core_admin/logo/0x200/1754974492/thumb_hearts-4B%20copy.png"
                  alt="Logo"
                  className="h-20"
                />
            </div>

            {/* Heading */}
            <div>
              <h2 className="text-xl font-semibold">Create your account</h2>
              <p className="text-gray-600 text-sm">
                Join the Judicial Portal to manage cases efficiently
              </p>
            </div>
           <Card className="border bg-gradient-to-r from-white via-purple-50 to-orange-50 border-gray-200 shadow-sm">
              <CardContent className="p-6">
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label className="block text-sm text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-1">Phone Number</label>
                <div className="flex">
                  {/* <span className="px-3 flex items-center border rounded-l-lg bg-gray-100">+61</span> */}
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-1">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a strong password"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition disabled:opacity-50"
              >
                {loading ? "Creating Account..." : "Create Account"}
              </button>
            </form>
            </CardContent>
            </Card>


            
            {/* Footer */}
            
        <p className="text-sm text-center text-gray-500">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/login")}
            className="text-[#D15705] font-medium hover:underline"
          >
            Log In
          </button>
        </p>
    
          </div>
        </div>
      </div>
    </div>
  )
}

