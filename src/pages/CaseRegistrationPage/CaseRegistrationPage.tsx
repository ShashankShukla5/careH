import { useState } from "react";
import { Card, CardContent } from "@/components/components/ui/card";
import { Button } from "@/components/components/ui/button";
import { Upload } from "lucide-react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const baseOrigin = import.meta.env.VITE_BASE_ORIGIN;

export default function CaseRegistrationPage() {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  const tabs = ["Case Info", "Contact", "Other Details", "Documents"];

  const [formData, setFormData] = useState({
    case_no: "",
    residing_name: "",
    residing_phone: "",
    residing_email: "",
    zipcode: "",
    non_residing_name: "",
    non_residing_phone: "",
    non_residing_email: "",
    icl_name: "",
    icl_email: "",
    court_associate_name: "",
    court_associate_email: "",
    school_email: "",
    residence_type: "",
    tlc_file: null,
  });

  // Handle input updates
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
  //   const { name, value, type, files } = e.target;
  //   setFormData((prev) => ({
  //     ...prev,
  //     [name]: type === "file" ? files?.[0] : value,
  //   }));
  // };

  const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
) => {
  const { name, value, type } = e.target;

  // Narrowing: only HTMLInputElement with type="file" has files
  if (e.target instanceof HTMLInputElement && type === "file") {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({
      ...prev,
      [name]: file,
    }));
  } else {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
};


  const nextStep = () => {
    if (step < tabs.length - 1) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleSubmit = async () => {
    const url = `${baseOrigin}submit-form/`;

    const token = localStorage.getItem("token");

    try {
      const data = new FormData();

      // Always append all fields (even if empty)
      (Object.keys(formData) as (keyof typeof formData)[]).forEach((key) => {
        const value = formData[key];
        if (value !== null && value !== undefined) {
          data.append(key, value as string | Blob);
        }
      });

      const response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: data,
      });
       
       const resData = await response.json();

    if (!response.ok) {
      toast.error(resData.meta?.message || "Failed to submit form");
      throw new Error("Failed to submit form");
    }

    toast.success(resData.meta?.message || "Case registered successfully!");
    navigate("/");
    } catch (err) {
      console.error(err);
     toast.error("Error submitting form");
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-[#C3CBF5] via-[#E2E4F5] to-[#F2D5C6] flex items-center justify-center p-6">
      <div className="w-full max-w-5xl h-[90vh] grid grid-cols-1 md:grid-cols-2 rounded-2xl shadow-xl overflow-hidden">
        {/* Left Section - Image with Quote */}
        <div className="relative bg-white/20">
          <img
            src="/image1.jpeg"
            alt="Child Hugging Teddy"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute bottom-4 left-4 text-xs text-white">
            <p className="italic">
              “Justice delayed is justice denied. Streamline your case
              management with our comprehensive judicial platform.”
            </p>
            <div className="flex gap-4 mt-2 text-gray-300 text-[11px]">
              <span>⚖️ Secure & Compliant</span>
              <span>🔔 Real-time Updates</span>
              <span>⭐ Professional Grade</span>
            </div>
          </div>
        </div>

        {/* Right Section - Horizontal Gradient with Scroll + Sticky Footer */}
        <div className="bg-gradient-to-r from-white via-purple-50 to-orange-50 px-8 py-10 flex flex-col overflow-hidden">
          {/* Logo & Title */}
          <div className="flex flex-col items-center shrink-0">
            <img
              src="https://heartsinthemiddle.org/pluginfile.php/1/core_admin/logo/0x200/1754974492/thumb_hearts-4B%20copy.png"
              alt="Logo"
              className="h-20 mb-3"
            />
            <h2 className="text-lg font-semibold">Case Registration</h2>
            <p className="text-gray-500 text-sm text-center mt-1">
              Join the Judicial Portal to manage cases efficiently
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-between bg-gray-100 rounded-lg mt-6 mb-6 overflow-hidden shrink-0">
            {tabs.map((tab, idx) => (
              <button
                key={idx}
                className={`flex-1 py-2 text-sm font-medium transition-colors ${
                  step === idx
                    ? "bg-black text-white"
                    : "text-gray-600 hover:bg-gray-200"
                }`}
                onClick={() => setStep(idx)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Scrollable Form Section */}
          <div className="flex-1 overflow-y-auto pr-2">
            <Card className="border bg-gradient-to-r from-white via-purple-50 to-orange-50 border-gray-200 shadow-sm">
              <CardContent className="p-6">
                {step === 0 && (
                  <>
                    <h3 className="text-sm font-medium mb-4 text-gray-700">
                      Case Information
                    </h3>
                    <label className="block text-xs text-gray-600 mb-1">
                      Family Court File Number (Alphanumeric){" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="case_no"
                      placeholder="Case Number"
                      value={formData.case_no}
                      onChange={handleChange}
                      className="w-full border rounded-lg px-3 py-2 text-sm mb-4"
                    />

                    <label className="block text-xs text-gray-600 mb-1">
                      Residing Parent’s Name
                    </label>
                    <input
                      type="text"
                      name="residing_name"
                      placeholder="Residing Parent Name"
                      value={formData.residing_name}
                      onChange={handleChange}
                      className="w-full border rounded-lg px-3 py-2 text-sm mb-4"
                    />

                    <label className="block text-xs text-gray-600 mb-1">
                      Non-Residing Parent’s Name
                    </label>
                    <input
                      type="text"
                      name="non_residing_name"
                      placeholder="Non-Residing Parent Name"
                      value={formData.non_residing_name}
                      onChange={handleChange}
                      className="w-full border rounded-lg px-3 py-2 text-sm"
                    />
                  </>
                )}

                {step === 1 && (
                  <>
                    <h3 className="text-sm font-medium mb-4 text-gray-700">
                      Contact Information
                    </h3>
                    <label className="block text-xs text-gray-600 mb-1">
                      Residing Parent Email
                    </label>
                    <input
                      type="email"
                      name="residing_email"
                      placeholder="Residing Parent Email"
                      value={formData.residing_email}
                      onChange={handleChange}
                      className="w-full border rounded-lg px-3 py-2 text-sm mb-4"
                    />

                    <label className="block text-xs text-gray-600 mb-1">
                      Residing Parent Phone
                    </label>
                    <input
                      type="text"
                      name="residing_phone"
                      placeholder="Residing Parent Phone"
                      value={formData.residing_phone}
                      onChange={handleChange}
                      className="w-full border rounded-lg px-3 py-2 text-sm mb-4"
                    />

                    <label className="block text-xs text-gray-600 mb-1">
                      Non-Residing Parent Email
                    </label>
                    <input
                      type="email"
                      name="non_residing_email"
                      placeholder="Non-Residing Parent Email"
                      value={formData.non_residing_email}
                      onChange={handleChange}
                      className="w-full border rounded-lg px-3 py-2 text-sm mb-4"
                    />

                    <label className="block text-xs text-gray-600 mb-1">
                      Non-Residing Parent Phone
                    </label>
                    <input
                      type="text"
                      name="non_residing_phone"
                      placeholder="Non-Residing Parent Phone"
                      value={formData.non_residing_phone}
                      onChange={handleChange}
                      className="w-full border rounded-lg px-3 py-2 text-sm mb-4"
                    />

                    <label className="block text-xs text-gray-600 mb-1">
                      Residing Zip Code
                    </label>
                    <input
                      type="text"
                      name="zipcode"
                      placeholder="Zipcode"
                      value={formData.zipcode}
                      onChange={handleChange}
                      className="w-full border rounded-lg px-3 py-2 text-sm"
                    />
                  </>
                )}

                {step === 2 && (
                  <>
                    <h3 className="text-sm font-medium mb-4 text-gray-700">
                      Other Details
                    </h3>

                    <label className="block text-xs text-gray-600 mb-1">
                      Who is Paying?
                    </label>
                    {/* <select className="w-full border rounded-lg px-3 py-2 text-sm mb-4">
                      <option>Residing Parent</option>
                      <option>Non-Residing Parent</option>
                    </select> */}

                    <select
                      name="residence_type"
                      value={formData.residence_type}
                      onChange={handleChange}
                      className="w-full border rounded-lg px-3 py-2 text-sm mb-4"
                    >
                      <option value="">Select Residence Type</option>
                      <option value="residing">Residing Parent</option>
                      <option value="non-residing">
                        Non-Residing Parent
                      </option>
                    </select>

                    <label className="block text-xs text-gray-600 mb-1">
                      Independent Children Lawyer's Name
                    </label>
                    <input
                      type="text"
                      name="icl_name"
                      placeholder="Enter name"
                      value={formData.icl_name}
                      onChange={handleChange}
                      className="w-full border rounded-lg px-3 py-2 text-sm mb-4"
                    />

                    <label className="block text-xs text-gray-600 mb-1">
                      Independent Children Lawyer's Email
                    </label>
                    <input
                      type="email"
                      name="icl_email"
                      placeholder="ICL Email"
                      value={formData.icl_email}
                      onChange={handleChange}
                      className="w-full border rounded-lg px-3 py-2 text-sm mb-4"
                    />

                    <label className="block text-xs text-gray-600 mb-1">
                      Associate Name
                    </label>
                    <input
                      type="text"
                      name="court_associate_name"
                      placeholder="Enter name"
                      value={formData.court_associate_name}
                      onChange={handleChange}
                      className="w-full border rounded-lg px-3 py-2 text-sm mb-4"
                    />

                    <label className="block text-xs text-gray-600 mb-1">
                      Court Associate Email
                    </label>
                    <input
                      type="email"
                      name="court_associate_email"
                      placeholder="Court Associate Email"
                      value={formData.court_associate_email}
                      onChange={handleChange}
                      className="w-full border rounded-lg px-3 py-2 text-sm mb-4"
                    />

                    <label className="block text-xs text-gray-600 mb-1">
                      School Email
                    </label>
                    <input
                      type="email"
                      name="school_email"
                      placeholder="School Email"
                      value={formData.school_email}
                      onChange={handleChange}
                      className="w-full border rounded-lg px-3 py-2 text-sm"
                    />
                  </>
                )}

                {step === 3 && (
                  <>
                    {/* Heading */}
                    <h3 className="text-sm font-medium mb-2 text-gray-700">
                      Upload Case Documents
                    </h3>
                    {/* Upload Input */}
                    <div className="space-y-2 mb-4">
                      <label className="block text-xs text-gray-600">
                        Upload Terms & Conditions Document{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <div>
                        <label
                          htmlFor="file-upload"
                          className="inline-flex items-center px-4 py-2 border border-gray-400 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer transition"
                        >
                          <Upload className="w-4 h-4 mr-2 text-gray-600" />
                          Choose File
                        </label>
                        <input
                          id="file-upload"
                          type="file"
                          name="tlc_file"
                          className="hidden"
                          onChange={handleChange}
                        />
                        {/* {formData.tlc_file && (
                          <p className="mt-2 text-sm text-gray-600">
                            {formData.tlc_file?.name}
                          </p>
                        )} */}
                      </div>

                      <p className="text-xs text-gray-500">
                        Accepted formats: PDF, DOC, DOCX (Max 10MB)
                      </p>
                    </div>

                    {/* Checkbox */}
                    <div className="flex items-start space-x-2 mb-6">
                      <input
                        type="checkbox"
                        className="mt-1 w-4 h-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                      />
                      <p className="text-xs text-gray-600">
                        I acknowledge that all information provided is accurate
                        and complete. I agree to the{" "}
                        <span className="font-medium text-gray-800">
                          Terms of Service
                        </span>{" "}
                        and{" "}
                        <span className="font-medium text-gray-800">
                          Privacy Policy
                        </span>
                        .
                      </p>
                    </div>

                    {/* Review Info Card */}
                    <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                      <h3 className="text-sm font-medium text-gray-700 mb-3">
                        Review Your Information
                      </h3>
                      <div className="grid grid-cols-2 gap-y-2 text-sm">
                        <span className="text-gray-500">Case Number</span>
                        <span className="text-gray-800 font-medium">
                          {formData.case_no}
                        </span>

                        <span className="text-gray-500">Email</span>
                        <span className="text-gray-800 font-medium">
                          {formData.residing_email || "N/A"}
                        </span>

                        <span className="text-gray-500">Residing Parent</span>
                        <span className="text-gray-800 font-medium">
                          {formData.residing_name || "N/A"}
                        </span>

                        <span className="text-gray-500">Payment By</span>
                        <span className="text-gray-800 font-medium">
                          {formData.residence_type || "N/A"}
                        </span>

                        <span className="text-gray-500">Phone</span>
                        <span className="text-gray-800 font-medium">
                          {formData.residing_phone || "N/A"}
                        </span>
                      </div>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sticky Buttons */}
          <div className="flex justify-between mt-4 shrink-0">
            <Button
              variant="outline"
              className="rounded-lg px-6"
              onClick={prevStep}
              disabled={step === 0}
            >
              ← Previous
            </Button>
            <Button
              className="bg-black text-white rounded-lg px-6"
              onClick={step === tabs.length - 1 ? handleSubmit : nextStep}
            >
              {step === tabs.length - 1 ? "Register case" : "Next"} →
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

// import { useState } from "react";
// import { Card, CardContent } from "@/components/components/ui/card";
// import { Button } from "@/components/components/ui/button";
// import { Upload } from "lucide-react";
// import { BaseOrigin } from "./../../proxy/origin";

// export default function CaseRegistrationPage() {
//   const [step, setStep] = useState(0);

//   const tabs = ["Case Info", "Contact", "Other Details", "Documents"];

//   const [formData, setFormData] = useState({
//     case_no: "",
//     residing_name: "",
//     residing_phone: "",
//     residing_email: "",
//     zipcode: "",
//     non_residing_name: "",
//     non_residing_phone: "",
//     non_residing_email: "",
//     icl_email: "",
//     court_associate_email: "",
//     school_email: "",
//     residence_type: "",
//     tlc_file: null,
//   });

//   // Handle input updates
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value, type, files } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "file" ? files?.[0] : value,
//     }));
//   };

//   const nextStep = () => {
//     if (step < tabs.length - 1) setStep(step + 1);
//   };

//   const prevStep = () => {
//     if (step > 0) setStep(step - 1);
//   };

//   const handleSubmit = async () => {
//     const url = `${BaseOrigin}/submit-form/`;

//     try {
//       const data = new FormData();

//       // Always append all fields (even if empty)
//       (Object.keys(formData) as (keyof typeof formData)[]).forEach((key) => {
//         const value = formData[key];
//         if (value !== null && value !== undefined) {
//           data.append(key, value as string | Blob);
//         }
//       });

//       const response = await fetch(url, {
//         method: "POST",
//         body: data,
//       });

//       if (!response.ok) throw new Error("Failed to submit form");

//       alert("Case registered successfully!");
//     } catch (err) {
//       console.error(err);
//       alert("Error submitting form");
//     }
//   };

//   return (
//     <div className="min-h-screen w-full bg-gradient-to-r from-[#262B4C] via-[#422D34] to-[#481600] flex items-center justify-center p-6">
//       <div className="w-full max-w-5xl h-[90vh] grid grid-cols-1 md:grid-cols-2 rounded-2xl shadow-xl overflow-hidden">
//         {/* Left Section - Image with Quote */}
//         <div className="relative bg-black/40">
//           <img
//             src="/image1.jpeg"
//             alt="Child Hugging Teddy"
//             className="w-full h-full object-cover object-center"
//           />
//           <div className="absolute bottom-4 left-4 text-xs text-white">
//             <p className="italic">
//               “Justice delayed is justice denied. Streamline your case
//               management with our comprehensive judicial platform.”
//             </p>
//             <div className="flex gap-4 mt-2 text-gray-200 text-[11px]">
//               <span>⚖️ Secure & Compliant</span>
//               <span>🔔 Real-time Updates</span>
//               <span>⭐ Professional Grade</span>
//             </div>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className="bg-black/20 px-8 py-10 flex flex-col overflow-hidden">
//           {/* Logo & Title */}
//           <div className="flex flex-col items-center shrink-0">
//             <img
//               src="https://heartsinthemiddle.org/pluginfile.php/1/core_admin/logo/0x200/1754974492/thumb_hearts-4B%20copy.png"
//               alt="Logo"
//               className="h-20 mb-3"
//             />
//             <h2 className="text-lg font-semibold text-white">Case Registration</h2>
//             <p className="text-gray-300 text-sm text-center mt-1">
//               Join the Judicial Portal to manage cases efficiently
//             </p>
//           </div>

//           {/* Tabs */}
//           <div className="flex justify-between bg-gray-700 rounded-lg mt-6 mb-6 overflow-hidden shrink-0">
//             {tabs.map((tab, idx) => (
//               <button
//                 key={idx}
//                 className={`flex-1 py-2 text-sm font-medium transition-colors ${
//                   step === idx
//                     ? "bg-black text-white"
//                     : "text-gray-300 hover:bg-gray-600"
//                 }`}
//                 onClick={() => setStep(idx)}
//               >
//                 {tab}
//               </button>
//             ))}
//           </div>

//           {/* Scrollable Form Section */}
//           <div className="flex-1 overflow-y-auto pr-2">
//             <Card className="border bg-gradient-to-r from-[#251714] via-[#2C1207] to-[#230E03] border-gray-700 shadow-md text-white">
//               <CardContent className="p-6">
//                 {step === 0 && (
//                   <>
//                     <h3 className="text-sm font-medium mb-4 text-gray-200">
//                       Case Information
//                     </h3>
//                     <label className="block text-xs text-gray-300 mb-1">
//                       Family Court File Number (Alphanumeric){" "}
//                       <span className="text-red-400">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       name="case_no"
//                       placeholder="Case Number"
//                       value={formData.case_no}
//                       onChange={handleChange}
//                       className="w-full border rounded-lg px-3 py-2 text-sm mb-4 text-black bg-white"
//                     />

//                     <label className="block text-xs text-gray-300 mb-1">
//                       Residing Parent’s Name
//                     </label>
//                     <input
//                       type="text"
//                       name="residing_name"
//                       placeholder="Residing Parent Name"
//                       value={formData.residing_name}
//                       onChange={handleChange}
//                       className="w-full border rounded-lg px-3 py-2 text-sm mb-4 text-black bg-white"
//                     />

//                     <label className="block text-xs text-gray-300 mb-1">
//                       Non-Residing Parent’s Name
//                     </label>
//                     <input
//                       type="text"
//                       name="non_residing_name"
//                       placeholder="Non-Residing Parent Name"
//                       value={formData.non_residing_name}
//                       onChange={handleChange}
//                       className="w-full border rounded-lg px-3 py-2 text-sm text-black bg-white"
//                     />
//                   </>
//                 )}

//                 {step === 1 && (
//                   <>
//                     <h3 className="text-sm font-medium mb-4 text-gray-200">
//                       Contact Information
//                     </h3>
//                     <label className="block text-xs text-gray-300 mb-1">
//                       Residing Parent Email
//                     </label>
//                     <input
//                       type="email"
//                       name="residing_email"
//                       placeholder="Residing Parent Email"
//                       value={formData.residing_email}
//                       onChange={handleChange}
//                       className="w-full border rounded-lg px-3 py-2 text-sm mb-4 text-black bg-white"
//                     />

//                     <label className="block text-xs text-gray-300 mb-1">
//                       Residing Parent Phone
//                     </label>
//                     <input
//                       type="text"
//                       name="residing_phone"
//                       placeholder="Residing Parent Phone"
//                       value={formData.residing_phone}
//                       onChange={handleChange}
//                       className="w-full border rounded-lg px-3 py-2 text-sm mb-4 text-black bg-white"
//                     />

//                     <label className="block text-xs text-gray-300 mb-1">
//                       Non-Residing Parent Email
//                     </label>
//                     <input
//                       type="email"
//                       name="non_residing_email"
//                       placeholder="Non-Residing Parent Email"
//                       value={formData.non_residing_email}
//                       onChange={handleChange}
//                       className="w-full border rounded-lg px-3 py-2 text-sm mb-4 text-black bg-white"
//                     />

//                     <label className="block text-xs text-gray-300 mb-1">
//                       Non-Residing Parent Phone
//                     </label>
//                     <input
//                       type="text"
//                       name="non_residing_phone"
//                       placeholder="Non-Residing Parent Phone"
//                       value={formData.non_residing_phone}
//                       onChange={handleChange}
//                       className="w-full border rounded-lg px-3 py-2 text-sm mb-4 text-black bg-white"
//                     />

//                     <label className="block text-xs text-gray-300 mb-1">
//                       Residing Zip Code
//                     </label>
//                     <input
//                       type="text"
//                       name="zipcode"
//                       placeholder="Zipcode"
//                       value={formData.zipcode}
//                       onChange={handleChange}
//                       className="w-full border rounded-lg px-3 py-2 text-sm text-black bg-white"
//                     />
//                   </>
//                 )}

//                 {step === 2 && (
//                   <>
//                     <h3 className="text-sm font-medium mb-4 text-gray-200">
//                       Other Details
//                     </h3>

//                     <label className="block text-xs text-gray-300 mb-1">
//                       Who is Paying?
//                     </label>
//                     <select className="w-full border rounded-lg px-3 py-2 text-sm mb-4 text-black bg-white">
//                       <option>Residing Parent</option>
//                       <option>Non-Residing Parent</option>
//                     </select>

//                     <label className="block text-xs text-gray-300 mb-1">
//                       Independent Children Lawyer's Name
//                     </label>
//                     <input
//                       type="text"
//                       placeholder="Enter name"
//                       className="w-full border rounded-lg px-3 py-2 text-sm mb-4 text-black bg-white"
//                     />

//                     <label className="block text-xs text-gray-300 mb-1">
//                       Independent Children Lawyer's Email
//                     </label>
//                     <input
//                       type="email"
//                       name="icl_email"
//                       placeholder="ICL Email"
//                       value={formData.icl_email}
//                       onChange={handleChange}
//                       className="w-full border rounded-lg px-3 py-2 text-sm mb-4 text-black bg-white"
//                     />

//                     <label className="block text-xs text-gray-300 mb-1">
//                       Associate Name
//                     </label>
//                     <input
//                       type="text"
//                       placeholder="Enter name"
//                       className="w-full border rounded-lg px-3 py-2 text-sm mb-4 text-black bg-white"
//                     />

//                     <label className="block text-xs text-gray-300 mb-1">
//                       Court Associate Email
//                     </label>
//                     <input
//                       type="email"
//                       name="court_associate_email"
//                       placeholder="Court Associate Email"
//                       value={formData.court_associate_email}
//                       onChange={handleChange}
//                       className="w-full border rounded-lg px-3 py-2 text-sm mb-4 text-black bg-white"
//                     />

//                     <label className="block text-xs text-gray-300 mb-1">
//                       School Email
//                     </label>
//                     <input
//                       type="email"
//                       name="school_email"
//                       placeholder="School Email"
//                       value={formData.school_email}
//                       onChange={handleChange}
//                       className="w-full border rounded-lg px-3 py-2 text-sm text-black bg-white"
//                     />
//                   </>
//                 )}

//                 {step === 3 && (
//                   <>
//                     <h3 className="text-sm font-medium mb-2 text-gray-200">
//                       Upload Case Documents
//                     </h3>

//                     {/* Upload Input */}
//                     <div className="space-y-2 mb-4">
//                       <label className="block text-xs text-gray-300">
//                         Upload Terms & Conditions Document{" "}
//                         <span className="text-red-400">*</span>
//                       </label>
//                       <div>
//                         <label
//                           htmlFor="file-upload"
//                           className="inline-flex items-center px-4 py-2 border border-gray-400 rounded-lg shadow-sm text-sm font-medium text-gray-200 bg-black/30 hover:bg-black/40 cursor-pointer transition"
//                         >
//                           <Upload className="w-4 h-4 mr-2 text-gray-200" />
//                           Choose File
//                         </label>
//                         <input
//                           id="file-upload"
//                           type="file"
//                           name="tlc_file"
//                           className="hidden"
//                           onChange={handleChange}
//                         />
//                         {/* {formData.tlc_file && (
//                           <p className="mt-2 text-sm text-gray-300">
//                             {formData.tlc_file?.name}
//                           </p>
//                         )} */}
//                       </div>

//                       <p className="text-xs text-gray-400">
//                         Accepted formats: PDF, DOC, DOCX (Max 10MB)
//                       </p>
//                     </div>

//                     {/* Checkbox */}
//                     <div className="flex items-start space-x-2 mb-6">
//                       <input
//                         type="checkbox"
//                         className="mt-1 w-4 h-4 rounded border-gray-400 text-purple-500 focus:ring-purple-400"
//                       />
//                       <p className="text-xs text-gray-300">
//                         I acknowledge that all information provided is accurate
//                         and complete. I agree to the{" "}
//                         <span className="font-medium text-white">
//                           Terms of Service
//                         </span>{" "}
//                         and{" "}
//                         <span className="font-medium text-white">
//                           Privacy Policy
//                         </span>
//                         .
//                       </p>
//                     </div>

//                     {/* Review Info Card */}
//                     <div className="bg-gradient-to-r from-[#481600] via-[#422D34] to-[#262B4C] border border-gray-700 rounded-xl p-4 shadow-md text-white">
//                       <h3 className="text-sm font-medium text-gray-200 mb-3">
//                         Review Your Information
//                       </h3>
//                       <div className="grid grid-cols-2 gap-y-2 text-sm">
//                         <span className="text-gray-300">Case Number</span>
//                         <span className="font-medium">
//                           {formData.case_no}
//                         </span>

//                         <span className="text-gray-300">Email</span>
//                         <span className="font-medium">
//                           {formData.residing_email || "N/A"}
//                         </span>

//                         <span className="text-gray-300">Residing Parent</span>
//                         <span className="font-medium">
//                           {formData.residing_name || "N/A"}
//                         </span>

//                         <span className="text-gray-300">Payment By</span>
//                         <span className="font-medium">
//                           {formData.residence_type || "N/A"}
//                         </span>

//                         <span className="text-gray-300">Phone</span>
//                         <span className="font-medium">
//                           {formData.residing_phone || "N/A"}
//                         </span>
//                       </div>
//                     </div>
//                   </>
//                 )}
//               </CardContent>
//             </Card>
//           </div>

//           {/* Sticky Buttons */}
//           <div className="flex justify-between mt-4 shrink-0">
//             <Button
//               variant="outline"
//               className="rounded-lg px-6 bg-gray-700 text-white border-gray-600 hover:bg-gray-600"
//               onClick={prevStep}
//               disabled={step === 0}
//             >
//               ← Previous
//             </Button>
//             <Button
//               className="bg-black text-white rounded-lg px-6 hover:bg-gray-900"
//               onClick={step === tabs.length - 1 ? handleSubmit : nextStep}
//             >
//               {step === tabs.length - 1 ? "Register case" : "Next"} →
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
