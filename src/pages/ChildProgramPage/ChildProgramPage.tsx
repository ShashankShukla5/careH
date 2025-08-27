
import { Search, Users, ArrowRight } from "lucide-react";

type StatusType = "On Track" | "Behind" | "Non-compliant";

interface ChildProgress {
  name: string;
  program: string;
  totalModules: number;
  usage: string;
  lastActivity: string;
  estimate: string;
  status: StatusType;
}

export default function ChildProgramPage() {
  const data: ChildProgress[] = [
    {
      name: "Progress total",
      program: "Across filtered children",
      totalModules: 144,
      usage: "53% complete • 77 of 144 modules",
      lastActivity: "2025-08-18",
      estimate: "67 left",
      status: "On Track",
    },
    {
      name: "Amelia Rose Grundy",
      program: "12-Week Hearts in the Middle (P1)",
      totalModules: 12,
      usage: "83% complete • 10 of 12 modules",
      lastActivity: "2025-08-21",
      estimate: "67 left",
      status: "On Track",
    },
    {
      name: "Braxton James Grundy",
      program: "12-Week Hearts in the Middle (P1)",
      totalModules: 5,
      usage: "53% complete • 77 of 144 modules",
      lastActivity: "2025-08-23",
      estimate: "67 left",
      status: "Behind",
    },
    {
      name: "Ava T.",
      program: "12-Week Hearts in the Middle (P1)",
      totalModules: 16,
      usage: "53% complete • 08 of 16 modules",
      lastActivity: "2025-08-26",
      estimate: "67 left",
      status: "Non-compliant",
    },
    {
      name: "Liam P.",
      program: "12-Week Hearts in the Middle (P1)",
      totalModules: 8,
      usage: "53% complete • 05 of 08 modules",
      lastActivity: "2025-08-28",
      estimate: "67 left",
      status: "On Track",
    },
  ];

  const statusBadge = (status: StatusType) => {
    const colors: Record<StatusType, string> = {
      "On Track": "bg-green-100 text-green-700",
      "Behind": "bg-yellow-100 text-yellow-700",
      "Non-compliant": "bg-red-100 text-red-700",
    };
    return (
      <span
        className={`px-2 py-1 text-xs font-medium rounded-full ${colors[status]}`}
      >
        {status}
      </span>
    );
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-[#C0C8F6] via-[#F0F2FC] to-[#F4BEA1] p-6 flex items-center justify-center">
      <div className="w-full max-w-6xl bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Children Progress</h1>
            <p className="text-gray-500 text-sm">Hearts in the Middle • ICL view</p>
          </div>

         
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
            <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-gray-100 text-sm text-gray-600">
              12 enrolled children
            </span>

            <div className="flex items-center border rounded-full px-3 py-1 bg-white shadow-sm">
              <Search className="w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search children"
                className="ml-2 bg-transparent outline-none text-sm"
              />
            </div>

            <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full text-sm shadow hover:bg-gray-800 transition">
              <Users className="w-4 h-4" /> Manage Cohorts
            </button>
          </div>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-gray-600 text-sm border-b">
                <th className="p-3">Child/Program</th>
                <th className="p-3">Total Modules</th>
                <th className="p-3">Usage</th>
                <th className="p-3">Estimate Completion</th>
                <th className="p-3"></th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, idx) => (
                <tr
                  key={idx}
                  className={`border-b last:border-none hover:bg-gray-50 ${
                    idx === 0 ? "bg-gray-50" : ""
                  }`}
                >
                  <td className="p-3">
                    <div className="font-medium text-gray-800">{row.name}</div>
                    <div className="text-xs text-gray-500">{row.program}</div>
                  </td>
                  <td className="p-3">{row.totalModules}</td>
                  <td className="p-3 text-sm text-gray-700">
                    {row.usage}
                    <div className="text-xs text-gray-400">
                      Last activity: {row.lastActivity}
                    </div>
                  </td>
                  <td className="p-3 flex items-center gap-2">
                    <span className="text-gray-700 text-sm">{row.estimate}</span>
                    {statusBadge(row.status)}
                  </td>
                  <td className="p-3">
                    <button className="p-2 rounded-full hover:bg-gray-200 transition">
                      <ArrowRight className="w-4 h-4 text-gray-600" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
