"use client";

// import type React from "react"
// import { useState } from "react"
// import { Eye, Search } from "lucide-react"
// import { useNavigate } from "react-router-dom"
// import { Card } from "@/components/components/ui/card"
// import { Input } from "@/components/components/ui/input"
// import { Table, TableBody, TableCell, TableHeader, TableRow } from "@/components/components/ui/table"
// import { Button } from "@/components/components/ui/button"

// // Generate 30 static data objects
// const staticData = Array.from({ length: 30 }, (_, i) => ({
//   id: i + 1,
//   date: `${23 + (i % 7)}-oct-2025`,
//   fileId: `SN23${80 + i}Z`,
//   name: ["Joe Doe", "Jane Smith", "Alice Brown"][i % 3],
//   description: ["Description for Case First", "Description for Case Second", "Description for Case Third"][i % 3],
// }))

// const ROWS_PER_PAGE = 20

// const Dashboard: React.FC = () => {
//   const [page, setPage] = useState(1)
//   const [searchTerm, setSearchTerm] = useState("")
//   const navigate = useNavigate()

//   const filteredData = staticData.filter(
//     (item) =>
//       item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       item.fileId.toLowerCase().includes(searchTerm.toLowerCase()),
//   )

//   const totalPages = Math.ceil(filteredData.length / ROWS_PER_PAGE)
//   const startIdx = (page - 1) * ROWS_PER_PAGE
//   const endIdx = startIdx + ROWS_PER_PAGE
//   const pageData = filteredData.slice(startIdx, endIdx)

//   const handleSingleFile = (id: number) => {
//     console.log(`View details for file ID: ${id}`)
//     navigate(`/file/${id}`)
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4 md:p-8">
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-xl animate-pulse"></div>
//         <div className="absolute top-40 right-20 w-24 h-24 bg-purple-200/20 rounded-full blur-xl animate-pulse delay-1000"></div>
//         <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-indigo-200/20 rounded-full blur-xl animate-pulse delay-2000"></div>
//       </div>

//       <Card className="max-w-7xl mx-auto backdrop-blur-xl bg-white/70 border-0 shadow-2xl rounded-3xl overflow-hidden relative">
//         <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/60 to-white/40"></div>

//         <div className="relative p-6 md:p-8">
//           <div className="mb-8">
//             <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
//               Hearts in the Middle
//             </h1>
//             <p className="text-gray-600 text-lg">Case Management Dashboard</p>
//           </div>

//           <div className="relative mb-6 max-w-md">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//             <Input
//               placeholder="Search by name or file ID..."
//               className="pl-10 h-12 rounded-xl border-0 bg-white/60 backdrop-blur-sm shadow-lg focus:shadow-xl transition-all duration-300 focus:ring-2 focus:ring-blue-500/20"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>

//           <div className="rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20 shadow-xl overflow-hidden">
//             <div className="overflow-y-auto" style={{ maxHeight: "600px" }}>
//               <Table>
//                 <TableHeader>
//                   <TableRow className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border-b border-white/20">
//                     <TableCell className="font-semibold text-gray-700 py-4">S.No</TableCell>
//                     <TableCell className="font-semibold text-gray-700 py-4">Date</TableCell>
//                     <TableCell className="font-semibold text-gray-700 py-4">File ID</TableCell>
//                     <TableCell className="font-semibold text-gray-700 py-4">Child Name</TableCell>
//                     <TableCell className="font-semibold text-gray-700 py-4">Course Completion</TableCell>
//                     <TableCell className="font-semibold text-gray-700 py-4">Hearing Date</TableCell>
//                     <TableCell className="font-semibold text-gray-700 py-4">Action</TableCell>
//                   </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                   {pageData.map((row) => (
//                     <TableRow
//                       key={row.id}
//                       className="hover:bg-white/40 transition-colors duration-200 border-b border-white/10"
//                     >
//                       <TableCell className="py-4">{row.id}</TableCell>
//                       <TableCell className="py-4 text-gray-600">{row.date}</TableCell>
//                       <TableCell className="py-4 font-mono text-sm bg-blue-50/50 rounded px-2 py-1 inline-block">
//                         {row.fileId}
//                       </TableCell>
//                       <TableCell className="py-4 font-medium text-gray-800">{row.name}</TableCell>
//                       <TableCell className="py-4 text-gray-600">{row.date}</TableCell>
//                       <TableCell className="py-4 text-gray-600">{row.date}</TableCell>
//                       <TableCell className="py-4">
//                         <Button
//                           size="sm"
//                           onClick={() => handleSingleFile(row.id)}
//                           className="cursor-pointer bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white border-0 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
//                         >
//                           <Eye className="w-4 h-4" />
//                         </Button>
//                       </TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </div>
//           </div>

//           <div className="flex justify-between items-center mt-6 gap-4">
//             <div className="text-sm text-gray-600">
//               Showing {startIdx + 1}-{Math.min(endIdx, filteredData.length)} of {filteredData.length} results
//             </div>
//             <div className="flex items-center gap-3">
//               <Button
//                 size="sm"
//                 disabled={page === 1}
//                 onClick={() => setPage(page - 1)}
//                 className="bg-white/60 hover:bg-white/80 text-gray-700 border-0 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 Previous
//               </Button>
//               <div className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl shadow-lg font-medium">
//                 {page} of {totalPages}
//               </div>
//               <Button
//                 size="sm"
//                 disabled={page === totalPages}
//                 onClick={() => setPage(page + 1)}
//                 className="bg-white/60 hover:bg-white/80 text-gray-700 border-0 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 Next
//               </Button>
//             </div>
//           </div>
//         </div>
//       </Card>
//     </div>
//   )
// }

// export default Dashboard
// import { useState } from "react";
// import { Card, CardContent } from "@/components/components/ui/card";
// import { Button } from "@/components/components/ui/button";
// import { Input } from "@/components/components/ui/input";
// import {
//   Search,
//   FileText,
//   Download,
//   Calendar,
//   Car,
//   FunnelIcon,
//   ClockIcon,
//   PaintbrushIcon,
//   Paintbrush2Icon,
//   AlertTriangle,
// } from "lucide-react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   CartesianGrid,
// } from "recharts";

// interface Case {
//   id: number;
//   child: string;
//   caseId: string;
//   caseName: string;
//   status: "Active" | "Flagged" | "Orders Pending";
//   risk: number;
//   compliance: number;
//   nextHearing: string;
//   flags?: { label: string; color: string; count?: number }[];
// }

// export default function Dashboard() {
//   const [selectedCase, setSelectedCase] = useState<Case | null>(null);
//   const [filter, setFilter] = useState<string>("All");

//   const cases: Case[] = [
//     {
//       id: 1,
//       child: "Amelia R. (10)",
//       caseId: "SYC8262/2022",
//       caseName: "Grundy v C.",
//       status: "Active",
//       risk: 78,
//       compliance: 62,
//       nextHearing: "2025-10-07",
//       flags: [
//         { label: "Fear Conditioning", color: "bg-orange-600", count: 6 },
//         { label: "Contact Obstruction", color: "bg-red-600", count: 5 },
//       ],
//     },
//     {
//       id: 2,
//       child: "Leo K. (8)",
//       caseId: "MLB411/2024",
//       caseName: "Khan v Khan",
//       status: "Orders Pending",
//       risk: 41,
//       compliance: 88,
//       nextHearing: "2025-09-21",
//     },
//     {
//       id: 3,
//       child: "Eva M. (6)",
//       caseId: "BNES520/2025",
//       caseName: "Miller v Davis",
//       status: "Flagged",
//       risk: 90,
//       compliance: 35,
//       nextHearing: "2025-08-29",
//     },
//   ];

//   const chartData = [
//     { week: "W1", risk: 70, compliance: 60 },
//     { week: "W2", risk: 75, compliance: 65 },
//     { week: "W3", risk: 80, compliance: 58 },
//     { week: "W4", risk: 78, compliance: 62 },
//     { week: "W5", risk: 82, compliance: 66 },
//   ];

//   const filteredCases =
//     filter === "All" ? cases : cases.filter((c) => c.status === filter);

//   return (
//     <div className="min-h-screen bg-white text-white p-6">
//       <div className="grid grid-cols-3 gap-6">
//         <div className="col-span-2">
//           {/* 🔹 Search + Filter Buttons */}
//           <Card className="bg-[#161b29] rounded-2xl shadow-lg border-[#1e2435] mb-6">
//             <CardContent>
//               <div className="flex items-center gap-3">
//                 <div className="relative w-1/3">
//                   <Input
//                     placeholder="Search case ID, child, or parties"
//                     className="bg-gray-800 border-gray-700 pl-8 rounded-full"
//                   />
//                   <Search
//                     size={16}
//                     className="absolute left-2 top-3 text-gray-400"
//                   />
//                 </div>

//                 {/* 🔹 Filters */}
//                 {["All", "Active", "Flagged", "Orders Pending"].map((f) => (
//                   <Button
//                     key={f}
//                     onClick={() => setFilter(f)}
//                     className={`rounded-full px-4 text-sm transition ${
//                       filter === f
//                         ? "bg-white text-black" // selected filter
//                         : "bg-gray-800 hover:bg-gray-700"
//                     }`}
//                   >
//                     {f}
//                   </Button>
//                 ))}

//                 <Button className="rounded-full px-4 bg-gray-800 hover:bg-gray-700 text-sm">
//                   <FunnelIcon className="w-5 h-5" /> Filters
//                 </Button>
//               </div>
//             </CardContent>
//           </Card>

//           {/* 🔹 Cases */}
//           <Card className="bg-[#161b29] rounded-2xl shadow-lg border-[#1e2435]">
//             <CardContent className="p-0">
//               <h2 className="text-lg text-gray-400 font-bold px-5 pb-2">
//                 Cases ({filteredCases.length})
//               </h2>
//               <div className="divide-y divide-gray-800">
//                 {filteredCases.map((c) => (
//                   <div
//                     key={c.id}
//                     className={`flex items-center justify-between px-5 py-4 cursor-pointer transition ${
//                       selectedCase?.id === c.id
//                         ? "bg-[#1e2435]"
//                         : "hover:bg-[#1e2435]"
//                     }`}
//                     onClick={() => setSelectedCase(c)}
//                   >
//                     {/* child + case */}
//                     <div>
//                       <h3 className="font-semibold text-white">{c.child}</h3>
//                       <p className="text-sm text-gray-400">{c.caseName}</p>
//                       <p className="text-xs text-gray-500">{c.caseId}</p>
//                     </div>

//                     {/* status */}
//                     <span
//                       className={`px-2 py-1 rounded-full flex gap-1 text-white text-xs font-medium ${
//                         c.status === "Active"
//                           ? "bg-green-700"
//                           : c.status === "Flagged"
//                           ? "bg-red-700"
//                           : "bg-purple-700"
//                       }`}
//                     >
//                       {/* Icon based on status */}
//                       {c.status === "Active" && (
//                         <ClockIcon className="w-4 h-4 text-white" />
//                       )}
//                       {c.status === "Orders Pending" && (
//                         <Paintbrush2Icon className="w-4 h-4 text-white" />
//                       )}
//                       {c.status === "Flagged" && (
//                         <AlertTriangle className="w-4 h-4 text-white" />
//                       )}

//                       {/* Status Text */}
//                       {c.status}
//                     </span>

//                     {/* risk */}
//                     <div className="flex flex-col items-center">
//                       <p className="text-xs text-gray-400">Risk score</p>
//                       <span
//                         className={`px-3 py-1 rounded-full text-white text-sm font-bold ${
//                           c.risk > 70
//                             ? "bg-red-600"
//                             : c.risk > 40
//                             ? "bg-yellow-600"
//                             : "bg-green-600"
//                         }`}
//                       >
//                         {c.risk}
//                       </span>
//                     </div>

//                     {/* compliance */}
//                     <div className="w-32">
//                       <p className="text-xs text-gray-400">Compliance</p>
//                       <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
//                         <div
//                           className="bg-green-500 h-2 rounded-full"
//                           style={{ width: `${c.compliance}%` }}
//                         ></div>
//                       </div>
//                       <p className="text-xs text-white mt-1">{c.compliance}%</p>
//                     </div>

//                     {/* hearing */}
//                     <div className="text-right">
//                       <p className="text-xs text-gray-400">Next hearing</p>
//                       <p className="font-semibold text-white">
//                         {c.nextHearing}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </CardContent>
//           </Card>
//         </div>

//         {/* Right Section - Case Details in one card, Risk & Compliance in another */}
//         <div className="col-span-1 space-y-6">
//           {/* Case Details Card */}
//           {selectedCase ? (
//             <Card className="bg-[#161b29] rounded-2xl shadow-lg border-[#1e2435]">
//               <CardContent className="p-6 space-y-6">
//                 <>
//                   <span className="text-gray-400">Case</span>
//                   {/* Header */}
//                   <div className="flex  text-white justify-between items-start">
//                     <div>
//                       <h2 className="text-lg font-bold">
//                         {selectedCase.caseId}
//                       </h2>
//                       <p className="text-gray-400">{selectedCase.caseName}</p>
//                     </div>
//                     <span
//                       className={`px-3 py-1 rounded-full text-xs font-medium ${
//                         selectedCase.status === "Active"
//                           ? "bg-green-700"
//                           : selectedCase.status === "Flagged"
//                           ? "bg-red-700"
//                           : "bg-purple-700"
//                       }`}
//                     >
//                       {selectedCase.status}
//                     </span>
//                   </div>

//                   {/* Tags */}
//                   <div className="flex flex-wrap gap-2">
//                     {selectedCase.flags?.map((tag, idx) => (
//                       <span
//                         key={idx}
//                         className={`px-3 py-1 rounded-full text-white text-xs font-semibold ${
//                           tag?.color === "bg-red-600"
//                             ? "bg-red-600/80"
//                             : tag.color === "bg-orange-600"
//                             ? "bg-orange-600/80"
//                             : tag.color === "blue"
//                             ? "bg-blue-600/80"
//                             : "bg-gray-600/80"
//                         }`}
//                       >
//                         {tag.label}
//                       </span>
//                     ))}
//                   </div>

//                   {/* Stats */}
//                   <div className="grid grid-cols-3 gap-4">
//                     {/* Risk */}
//                     <div className="bg-[#1e2435] rounded-xl p-4 flex flex-col justify-center items-center h-24">
//                       <p className="text-sm text-gray-400">Risk</p>
//                       <p className="text-base text-white font-bold">
//                         {selectedCase.risk}
//                       </p>
//                     </div>

//                     {/* Compliance */}
//                     <div className="bg-[#1e2435] rounded-xl p-4 flex flex-col justify-center items-center h-24">
//                       <p className="text-sm text-gray-400">Compliance</p>
//                       <p className="text-base text-white font-bold">
//                         {selectedCase.compliance}%
//                       </p>
//                     </div>

//                     {/* Next Hearing */}
//                     <div className="bg-[#1e2435] rounded-xl p-4 flex flex-col justify-center items-center h-24">
//                       <p className="text-sm text-gray-400">Next hearing</p>
//                       <p className="text-base text-white font-semibold">
//                         {selectedCase.nextHearing}
//                       </p>
//                     </div>
//                   </div>
//                 </>
//               </CardContent>
//             </Card>
//           ) : (
//             <p className="text-gray-500">Select a case to view details</p>
//           )}

//           {/* Risk & Compliance Card */}
//           {selectedCase && (
//             <Card className="bg-[#161b29] rounded-2xl shadow-lg mt-6 border-[#1e2435]">
//               <CardContent className="p-5">
//                 <h2 className="text-lg text-white font-bold mb-4">
//                   Risk & Compliance (last 5 weeks)
//                 </h2>
//                 <div className="h-64">
//                   <ResponsiveContainer width="100%" height="100%">
//                     <LineChart data={chartData}>
//                       <CartesianGrid strokeDasharray="3 3" stroke="#1e2435" />
//                       <XAxis dataKey="week" stroke="#9ca3af" />
//                       <YAxis hide />
//                       <Tooltip
//                         contentStyle={{
//                           backgroundColor: "#1e2435",
//                           border: "none",
//                           borderRadius: "8px",
//                         }}
//                         labelStyle={{ color: "#fff" }}
//                       />
//                       <Line
//                         type="monotone"
//                         dataKey="risk"
//                         stroke="#3b82f6"
//                         strokeWidth={2}
//                         dot={false}
//                       />
//                       {/* Uncomment if you also want compliance line */}
//                       {/*
//               <Line
//                 type="monotone"
//                 dataKey="compliance"
//                 stroke="#22c55e"
//                 strokeWidth={2}
//                 dot={false}
//               />
//              */}
//                     </LineChart>
//                   </ResponsiveContainer>
//                 </div>
//               </CardContent>
//             </Card>
//           )}

//           <Card className="bg-[#161b29] rounded-2xl shadow-lg mt-6 border-[#1e2435]">
//             <CardContent className="px-5">
//               <h2 className="text-lg font-bold text-white mb-4">
//                 Recent Events
//               </h2>
//               <ul className="text-gray-400 space-y-2">
//                 <li className="flex items-center">
//                   <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
//                   Centre assessment • 2025-08-06
//                 </li>
//                 <li className="flex items-center">
//                   <span className="w-2 h-2 bg-transparent mr-2"></span>
//                   No incidents
//                 </li>
//               </ul>
//             </CardContent>
//           </Card>

//           <Card className="bg-[#161b29] rounded-2xl shadow-lg mt-6 border-[#1e2435]">
//             <CardContent className="p-5">
//               <h2 className="text-lg font-bold text-white mb-4">
//                 Judicial Actions
//               </h2>
//               <div className="grid grid-cols-2 gap-4 mb-4">
//                 <button className="bg-red-700 hover:bg-red-800 text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition duration-200">
//                   <svg
//                     className="w-5 h-5"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
//                     />
//                   </svg>
//                   Request Welfare Check
//                 </button>
//                 <button className="bg-purple-700 hover:bg-purple-800 text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition duration-200">
//                   <svg
//                     className="w-5 h-5"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
//                     />
//                   </svg>
//                   Issue Interim Orders
//                 </button>
//                 <button className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition duration-200">
//                   <svg
//                     className="w-5 h-5"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
//                     />
//                   </svg>
//                   Open Evidence Viewer
//                 </button>
//                 <button className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition duration-200">
//                   <svg
//                     className="w-5 h-5"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h10a2 2 0 012 2v14a2 2 0 01-2 2z"
//                     />
//                   </svg>
//                   Generate Case Brief
//                 </button>
//               </div>
//               <p className="text-gray-500 text-sm">
//                 Actions sync to the ICL, Police (CAREH), and Contact Centre
//                 dashboards with audit trails.
//               </p>
//             </CardContent>
//           </Card>
//           <Card className="bg-[#161b29] rounded-2xl shadow-lg  flex items-start justify-between border-[#1e2435]">
//             <CardContent>
//               <div>
//                 <h2 className="text-lg font-bold text-white">
//                   Current Contact Arrangement
//                 </h2>
//                 <p className="text-gray-400 mt-1">Fortnightly unsupervised</p>
//                 <p className="text-gray-400 mt-1">
//                   Compliance last 30 days: 88%
//                 </p>
//               </div>
//               {/* <div className="text-gray-400 cursor-pointer">
//                 <svg
//                   className="w-5 h-5"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M12 6v6m0 0v6m0-6h6m-6 0H6"
//                   />
//                 </svg>
//               </div> */}
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// }
// import React, { useState } from "react"
// import { Search, Plus, FileText, Download } from "lucide-react"
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   CartesianGrid,
//   Area,
// } from "recharts";

// const cases = [
//   {
//     id: 1,
//     name: "Amelia R. (10)",
//     status: "Active",
//     risk: 78,
//     compliance: "50% - 100%",
//     caseId: "SYC825/2025",
//     highlighted: true,
//   },
//   {
//     id: 2,
//     name: "Leo K. (08)",
//     status: "Orders Pending",
//     risk: 78,
//     compliance: "50% - 100%",
//     caseId: "MLB441/2024",
//   },
//   {
//     id: 3,
//     name: "Eva M. (16)",
//     status: "Flagged",
//     risk: 78,
//     compliance: "50% - 100%",
//     caseId: "BNES520/2025",
//   },
// ]

// export default function Dashboard() {
//   const [activeTab, setActiveTab] = useState("All")
//     const [range, setRange] = useState("Weekly")
// const data = [
//   { week: "W1", risk: 70, compliance: 60 },
//   { week: "W2", risk: 75, compliance: 65 },
//   { week: "W3", risk: 80, compliance: 58 },
//   { week: "W4", risk: 78, compliance: 62 },
//   { week: "W5", risk: 82, compliance: 66 },
// ]

//   const filteredCases =
//     activeTab === "All"
//       ? cases
//       : cases.filter((c) => c.status === activeTab)

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-white to-orange-50 p-6">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         <div>
//           <h1 className="text-xl font-semibold text-gray-800">
//             Hearts in the Middle - Judge Dashboard
//           </h1>
//           <p className="text-sm text-gray-500">
//             Live case intelligence • Risk flags • Orders & compliance
//           </p>
//         </div>
//         <div className="flex gap-2">
//           <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium px-3 py-2 rounded-lg shadow-sm">
//             <Plus size={16} /> Add a new Case
//           </button>
//           <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium px-3 py-2 rounded-lg shadow-sm">
//             <FileText size={16} /> Generate Court Report
//           </button>
//           <button className="flex items-center gap-2 bg-gray-800 hover:bg-black text-white text-sm font-medium px-3 py-2 rounded-lg shadow">
//             <Download size={16} /> Export
//           </button>
//         </div>
//       </div>

// {/* Main grid */}
// <div className="grid grid-cols-12 gap-6">
//   {/* Left: Case list */}
//   <div className="col-span-8 bg-white/70 backdrop-blur-md rounded-2xl shadow-md p-4">
//     {/* Tabs + Search */}
//     <div className="flex justify-between items-center mb-4">
//       <div className="flex gap-2">
//         {["All", "Active", "Flagged", "Orders Pending"].map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
//               activeTab === tab
//                 ? "bg-gray-900 text-white shadow"
//                 : "bg-gray-100 text-gray-600 hover:bg-gray-200"
//             }`}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>
//       <div className="relative">
//         <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
//         <input
//           type="text"
//           placeholder="Search"
//           className="pl-8 pr-3 py-1.5 text-sm border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
//         />
//       </div>
//     </div>

//           {/* Table */}
//           <table className="w-full border-separate border-spacing-y-2">
//   <thead>
//     <tr className="text-xs text-gray-500 text-left">
//       <th className="px-4 py-2">Name</th>
//       <th className="px-4 py-2">Status</th>
//       <th className="px-4 py-2">Risk Score</th>
//       <th className="px-4 py-2">Compliance</th>
//     </tr>
//   </thead>
//   <tbody>
//     {filteredCases.map((c) => (
//       <tr
//         key={c.id}
//         className={`transition rounded-xl overflow-hidden ${
//           c.highlighted
//             ? "bg-black text-white shadow-lg"
//             : "bg-white hover:bg-gray-50"
//         }`}
//       >
//         <td className="px-4 py-3 font-medium">{c.name}</td>
//         <td className="px-4 py-3">
//           <span
//             className={`px-2 py-1 rounded-full text-xs font-medium ${
//               c.status === "Active"
//                 ? "bg-green-100 text-green-700"
//                 : c.status === "Flagged"
//                 ? "bg-red-100 text-red-700"
//                 : "bg-yellow-100 text-yellow-700"
//             }`}
//           >
//             {c.status}
//           </span>
//         </td>
//         <td className="px-4 py-3">{c.risk}</td>
//         <td className="px-4 py-3">{c.compliance}</td>
//       </tr>
//     ))}
//   </tbody>
// </table>

//         </div>

//         {/* Right: Case details */}
//         <div className="col-span-4 flex flex-col gap-4">
//           <div className="bg-white/70 rounded-2xl p-4 shadow">
//             <div className="flex justify-between items-center mb-3">
//               <p className="text-sm font-medium text-gray-800">
//                 Case SYC8262/2022
//               </p>
//               <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700">
//                 Active
//               </span>
//             </div>
//             <p className="text-xs text-gray-500 mb-3">Grundy v C.</p>
//             <div className="flex flex-wrap gap-2 mb-3">
//               {["Fear Conditioning x 8", "Contact Obstruction x 5", "Memory Interference x 3", "PSIT x 7"].map(
//                 (tag) => (
//                   <span
//                     key={tag}
//                     className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-lg"
//                   >
//                     {tag}
//                   </span>
//                 )
//               )}
//             </div>
//             <div className="grid grid-cols-3 text-center">
//               <div>
//                 <p className="text-sm font-bold">78</p>
//                 <p className="text-xs text-gray-500">Risk</p>
//               </div>
//               <div>
//                 <p className="text-sm font-bold">62%</p>
//                 <p className="text-xs text-gray-500">Compliance</p>
//               </div>
//               <div>
//                 <p className="text-sm font-bold">25/02/25</p>
//                 <p className="text-xs text-gray-500">Next Hearing</p>
//               </div>
//             </div>
//           </div>

//           {/* Chart Placeholder */}
//        <div className="bg-white/70 backdrop-blur-md p-4 rounded-2xl shadow-sm w-full">
//   {/* Header */}
//   <div className="flex justify-between items-center mb-2">
//     <h2 className="text-sm font-medium text-gray-700">
//       Risk & Compliance
//     </h2>
//     <select
//       value={range}
//       onChange={(e) => setRange(e.target.value)}
//       className="text-sm border rounded-lg px-2 py-1 bg-white shadow-sm"
//     >
//       <option>Weekly</option>
//       <option>Monthly</option>
//     </select>
//   </div>

//   {/* Chart */}
//   <div className="h-48">
//     <ResponsiveContainer width="100%" height="100%">
//       <LineChart data={data}>
//         <defs>
//           {/* Greenish gradient for Risk */}
//           <linearGradient id="riskGradient" x1="0" y1="0" x2="0" y2="1">
//             <stop offset="0%" stopColor="#000" stopOpacity={0.3} />
//             <stop offset="100%" stopColor="#000" stopOpacity={0} />
//           </linearGradient>

//           {/* Blueish gradient for Compliance */}
//           <linearGradient id="complianceGradient" x1="0" y1="0" x2="0" y2="1">
//             <stop offset="0%" stopColor="#94a3b8" stopOpacity={0.3} />
//             <stop offset="100%" stopColor="#94a3b8" stopOpacity={0} />
//           </linearGradient>
//         </defs>

//         <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
//         <XAxis dataKey="week" tickLine={false} axisLine={false} />
//         <YAxis hide />
//         <Tooltip
//           cursor={{ stroke: "#f97316", strokeWidth: 2 }}
//           content={({ active, payload }) => {
//             if (active && payload && payload.length) {
//               return (
//                 <div className="bg-white text-black text-xs px-2 py-1 rounded-lg shadow">
//                   Score:{payload[0].value}
//                 </div>
//               )
//             }
//             return null
//           }}
//         />

//         {/* Area fill under curves */}
//         <Area
//           type="monotone"
//           dataKey="risk"
//           stroke="none"
//           fill="url(#riskGradient)"
//         />
//         <Area
//           type="monotone"
//           dataKey="compliance"
//           stroke="none"
//           fill="url(#complianceGradient)"
//         />

//         {/* Lines */}
//         <Line
//           type="monotone"
//           dataKey="risk"
//           stroke="#000"
//           strokeWidth={2}
//           dot={{ r: 4, fill: "#fff", stroke: "#000", strokeWidth: 2 }}
//           activeDot={{
//             r: 6,
//             fill: "#fff",
//             stroke: "#f97316",
//             strokeWidth: 2,
//           }}
//         />
//         <Line
//           type="monotone"
//           dataKey="compliance"
//           stroke="#94a3b8"
//           strokeWidth={2}
//           dot={false}
//         />
//       </LineChart>
//     </ResponsiveContainer>
//   </div>
// </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <div className="mt-6 text-xs text-gray-500">
//         <p>
//           <strong>Recent Events</strong>
//         </p>
//         <p>Centre Assessment: No incidents</p>
//       </div>
//     </div>
//   )
// }

import { Card, CardContent, CardHeader } from "@/components/components/ui/card";
import { Button } from "@/components/components/ui/button";
import {
  Plus,
  FileText,
  Download,
  Search,
  AlertTriangle,
  CheckCircle,
  ChevronDown,
} from "lucide-react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogoutModal, ProfileDropdown } from "@/components/Navbar";
import toast from "react-hot-toast";
const baseOrigin = import.meta.env.VITE_BASE_ORIGIN;

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("All");
  const [selected, setSelected] = useState(1);
  const [range, setRange] = useState("Weekly");
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const navigate = useNavigate();

  const cases = [
    {
      id: 1,
      name: "Amelia R.",
      cases: "(10)",
      sub: "Grundy v C.",
      code: "SYC826/2025",
      status: "Active",
      risk: 78,
      compliance: 80,
    },
    {
      id: 2,
      name: "Leo K.",
      cases: "(08)",
      sub: "Khan v Khan",
      code: "MLB441/2024",
      status: "Orders Pending",
      risk: 78,
      compliance: 60,
    },
    {
      id: 3,
      name: "Eva M.",
      cases: "(16)",
      sub: "Mikev v Davis",
      code: "BNE5520/2025",
      status: "Flagged",
      risk: 78,
      compliance: 40,
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success("Successfully logged out!");
    navigate("/login");
    setIsLogoutModalOpen(false);
  };

  const handleViewProfile = () => {
    setIsProfileOpen(false);
    navigate("/profile");
  };

  const handleLogoutClick = () => {
    setIsProfileOpen(false);
    setIsLogoutModalOpen(true);
  };

  const data = [
    { week: "W1", risk: 40, compliance: 30 },
    { week: "W2", risk: 60, compliance: 50 },
    { week: "W3", risk: 50, compliance: 40 },
    { week: "W4", risk: 86, compliance: 60 },
    { week: "W5", risk: 70, compliance: 55 },
  ];

  const fetchCases = async () => {
    try {
      const token = localStorage.getItem("token");
      console.log("Token:", token);
      const response = await fetch(`${baseOrigin}cases/`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Cases:", data);
      return data;
    } catch (error) {
      console.error("Error fetching cases:", error);
      return null;
    }
  };

  useEffect(() => {
    fetchCases();
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-[#E2E6FA] via-[#F6E2D9] to-[#FCE1D3] flex items-center justify-center p-6">
      {/* Top bar */}
      <Card className="w-full max-w-7xl rounded-3xl shadow-xl bg-gradient-to-r from-[#F5F6FD] via-[#F1EDF2] to-[#FCE5D8] p-6">
        <CardContent className="flex flex-col gap-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-xl font-semibold">
                Hearts in the Middle – Judge Dashboard
              </h1>
              <p className="text-gray-500 text-sm">
                Live case intelligence • Risk flags • Orders & compliance
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                className="flex gap-2"
                onClick={() => navigate("/case-registration")}
              >
                <Plus className="w-4 h-4" /> Add a new Case
              </Button>
              <Button variant="outline" className="flex gap-2">
                <FileText className="w-4 h-4" /> Generate Court Report
              </Button>
              <Button className="flex gap-2 bg-[#414141] text-white hover:bg-gray-800">
                <Download className="w-4 h-4" /> Export
              </Button>
              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center gap-3 px-4 py-1 bg-black hover:bg-black-500 rounded-full transition-all duration-200 border border-white/20 cursor-pointer"
                >
                  {/* <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    JD
                  </div> */}
                  <img
                    src="../../../public/logout.jpg"
                    alt=""
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
                  />
                  <ChevronDown
                    className={`w-4 h-4 text-white transition-transform duration-200 ${
                      isProfileOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown appears here */}
                <ProfileDropdown
                  isOpen={isProfileOpen}
                  onViewProfile={handleViewProfile}
                  onLogout={handleLogoutClick}
                  onClose={() => setIsProfileOpen(false)}
                />
              </div>
            </div>

            <LogoutModal
              isOpen={isLogoutModalOpen}
              onClose={() => setIsLogoutModalOpen(false)}
              onConfirm={handleLogout}
            />
          </div>

          {/* Tabs + Search */}

          {/* Main Content Grid */}
          <div className="grid grid-cols-3 gap-6">
            {/* Left Table */}
            <div className="col-span-2">
              <div className="flex justify-between items-center mb-4">
                <div className="flex gap-2">
                  {["All", "Active", "Flagged", "Orders Pending"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
                        activeTab === tab
                          ? "text-white bg-black shadow"
                          : "bg-white text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="pl-8 pr-3 py-1.5 text-sm border bg-white rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
                  />
                </div>
              </div>
              <Card className=" rounded-2xl shadow bg-gradient-to-r from-[#F7F8FE] via-[#F4F2F8] to-[#F7EDEC]">
                <CardHeader className="grid grid-cols-4 text-sm font-semibold text-gray-600 px-4 pb-3">
                  <div>Name</div>
                  <div>Status</div>
                  <div>Risk Score</div>
                  <div>Compliance</div>
                </CardHeader>
                <CardContent className="divide-y divide-gray-100">
                  {cases.map((row) => {
                    const isSelected = selected === row.id;
                    return (
                      <div
                        key={row.id}
                        onClick={() => setSelected(row.id)}
                        className={`grid grid-cols-4 items-center px-4 py-4 rounded-xl cursor-pointer transition 
                  ${
                    isSelected
                      ? "bg-[#FFE1CD] text-black"
                      : "hover:bg-gray-50 text-gray-800"
                  }`}
                      >
                        {/* Name */}
                        <div>
                          <p className="font-semibold">
                            {row.name}{" "}
                            <span className="font-normal text-gray-400">
                              {row.cases}
                            </span>
                          </p>
                          <p
                            className={`text-xs ${
                              isSelected ? "text-gray-300" : "text-gray-500"
                            }`}
                          >
                            {row.sub}
                          </p>
                          <p className={`text-xs text-gray-400`}>{row.code}</p>
                        </div>

                        {/* Status */}
                        <div>
                          {row.status === "Flagged" && (
                            <span
                              className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded-md font-medium 
                        ${
                          isSelected
                            ? "bg-red-700/30 text-red-300"
                            : "bg-red-100 text-red-500"
                        }`}
                            >
                              <AlertTriangle className="w-4 h-4" /> Flagged
                            </span>
                          )}
                          {row.status === "Active" && (
                            <span
                              className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded-md font-medium 
                        ${
                          isSelected
                            ? "bg-green-700/30 text-green-300"
                            : "bg-green-100 text-green-600"
                        }`}
                            >
                              <CheckCircle className="w-4 h-4" /> Active
                            </span>
                          )}
                          {row.status === "Orders Pending" && (
                            <span
                              className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded-md font-medium 
                        ${
                          isSelected
                            ? "bg-yellow-700/30 text-yellow-300"
                            : "bg-yellow-100 text-yellow-600"
                        }`}
                            >
                              Orders Pending
                            </span>
                          )}
                        </div>

                        {/* Risk */}
                        <div className="text-sm font-semibold">{row.risk}</div>

                        {/* Compliance */}
                        {/* <div className="flex items-center justify-between">
                    <div className="flex-1 h-1.5 bg-gray-200 rounded-full mx-2 relative">
                      <div
                        className={`h-1.5 rounded-full ${isSelected ? "bg-white" : "bg-black"}`}
                        style={{ width: `${row.compliance}%` }}
                      />
                    </div>
                    <ArrowRight className={`w-5 h-5 ${isSelected ? "text-white" : "text-gray-500"}`} />
                  </div>
                </div> */}
                        <div className="flex flex-col items-center justify-center">
                          <div className="flex-1 h-1.5 bg-gray-200 rounded-full mx-2 relative w-full">
                            <div
                              className={`h-1.5 rounded-full ${
                                isSelected ? "bg-black" : "bg-black"
                              }`}
                              style={{ width: `${row.compliance}%` }}
                            />
                          </div>
                          <div className="flex justify-between w-full text-[10px] text-gray-500 mt-1">
                            <span>50%</span>
                            <span>100%</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>
            </div>

            {/* Right Case Details */}
            <div className="col-span-1 flex flex-col gap-6">
              <Card className="rounded-2xl shadow bg-gradient-to-r from-[#F8E5DD] via-[#FBE4D8] to-[#FDE8DC] p-6 flex flex-col gap-6">
                <CardContent>
                  <h2 className="font-semibold">Case</h2>
                  <p className="text-sm text-gray-600">SYC8262/2022</p>
                  <p className="text-sm text-gray-600">Grundy v C.</p>
                  <span className="inline-flex items-center gap-1 mt-2 px-2 py-1 text-xs bg-green-100 text-green-600 rounded-md">
                    <CheckCircle className="w-4 h-4" /> Active
                  </span>
                </CardContent>

                <CardContent className="flex flex-wrap gap-2">
                  {[
                    "Fear Conditioning x 6",
                    "Contract Obstruction x 5",
                    "Memory Interference x 3",
                    "PSIT x 7",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-gray-100 rounded-full text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </CardContent>

                <CardContent className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="text-xs text-gray-500">Risk</p>
                    <p className="font-semibold text-sm">78</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="text-xs text-gray-500">Compliance</p>
                    <p className="font-semibold text-sm">62%</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="text-xs text-gray-500">Next hearing</p>
                    <p className="font-semibold text-sm">25/02/25</p>
                  </div>
                </CardContent>

                {/* Risk & Compliance Chart */}
              </Card>
              <Card className="bg-white/70 backdrop-blur-md p-4 bg-gradient-to-br from-purple-100 via-white to-orange-50 rounded-2xl shadow-sm w-full">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-sm font-medium text-gray-700">
                    Risk & Compliance
                  </h2>
                  <select
                    value={range}
                    onChange={(e) => setRange(e.target.value)}
                    className="text-sm border rounded-lg px-2 py-1 bg-white shadow-sm"
                  >
                    <option>Weekly</option>
                    <option>Monthly</option>
                  </select>
                </div>

                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                      <defs>
                        <linearGradient
                          id="riskGradient"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stopColor="#000"
                            stopOpacity={0.3}
                          />
                          <stop
                            offset="100%"
                            stopColor="#000"
                            stopOpacity={0}
                          />
                        </linearGradient>
                        <linearGradient
                          id="complianceGradient"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stopColor="#94a3b8"
                            stopOpacity={0.3}
                          />
                          <stop
                            offset="100%"
                            stopColor="#94a3b8"
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>

                      <CartesianGrid
                        strokeDasharray="3 3"
                        vertical={false}
                        stroke="#eee"
                      />
                      <XAxis dataKey="week" tickLine={false} axisLine={false} />
                      <YAxis hide />
                      <Tooltip
                        cursor={{ stroke: "#f97316", strokeWidth: 2 }}
                        content={({ active, payload }) =>
                          active && payload && payload.length ? (
                            <div className="bg-white text-black text-xs px-2 py-1 rounded-lg shadow">
                              Score:{payload[0].value}
                            </div>
                          ) : null
                        }
                      />
                      <Area
                        type="monotone"
                        dataKey="risk"
                        stroke="none"
                        fill="url(#riskGradient)"
                      />
                      <Area
                        type="monotone"
                        dataKey="compliance"
                        stroke="none"
                        fill="url(#complianceGradient)"
                      />
                      <Line
                        type="monotone"
                        dataKey="risk"
                        stroke="#000"
                        strokeWidth={2}
                        dot={{
                          r: 4,
                          fill: "#fff",
                          stroke: "#000",
                          strokeWidth: 2,
                        }}
                        activeDot={{
                          r: 6,
                          fill: "#fff",
                          stroke: "#f97316",
                          strokeWidth: 2,
                        }}
                      />
                      <Line
                        type="monotone"
                        dataKey="compliance"
                        stroke="#94a3b8"
                        strokeWidth={2}
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </Card>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center text-xs text-gray-500 mt-6">
            Copyright © 2025. All Rights Reserved
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
