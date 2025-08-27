
import { CheckCircle, AlertCircle, XCircle } from "lucide-react";

export default function IclDashboard() {
  type StatusColor = "green" | "yellow" | "red";

  interface Status {
    label: string;
    color: StatusColor;
  }

  const data = [
    {
      child: "Emily Brown",
      case: "SYC241/2022",
      status: { label: "Active", color: "green" as StatusColor },

      compliance: "100%",
      risk: "Low",
      action: "Full compliance recorded. No action is necessary.",
    },
    {
      child: "Jacob Smith",
      case: "SYC242/2022",
      status: { label: "Orders Pending", color: "yellow" as StatusColor },
      compliance: "60%",
      risk: "Moderate",
      action: "Compliance partially met. Continued attention required.",
    },
    {
      child: "Ella Johnson",
      case: "SYC243/2022",
      status: { label: "Flagged", color: "red" as StatusColor },
      compliance: "20%",
      risk: "High",
      action: "Breaches identified. A report may be escalated.",
    },
    {
      child: "Sophia Wilson",
      case: "SYC244/2022",
      status: { label: "Active", color: "green" as StatusColor },
      compliance: "100%",
      risk: "Low",
      action: "Positive engagement noted. Maintain current progress.",
    },
    {
      child: "Lucas Martinez",
      case: "SYC245/2022",
      status: { label: "Active", color: "green" as StatusColor },
      compliance: "100%",
      risk: "Critical",
      action: "All obligations fulfilled. No further review at this time.",
    },
  ];

  const statusBadge = (status: Status) => {
    const colors: Record<StatusColor, string> = {
      green: "bg-green-100 text-green-700",
      yellow: "bg-yellow-100 text-yellow-700",
      red: "bg-red-100 text-red-700",
    };
    return (
      <span
        className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 w-fit ${
          colors[status.color]
        }`}
      >
        {status.color === "green" && <CheckCircle className="w-4 h-4" />}
        {status.color === "yellow" && <AlertCircle className="w-4 h-4" />}
        {status.color === "red" && <XCircle className="w-4 h-4" />}
        {status.label}
      </span>
    );
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-[#C0C8F6] via-[#F0F2FC] to-[#F4BEA1] p-6 flex items-center justify-center">
      <div className="w-full max-w-6xl bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-gray-500 text-sm">
              Hearts in the Middle Initiative
            </h2>
            <h1 className="text-2xl font-bold text-gray-800">
              ICL Monitoring Dashboard
            </h1>
          </div>
          <button className="px-4 py-2 bg-black text-white rounded-full text-sm shadow hover:bg-gray-800 transition">
            View Progress
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-gray-600 text-sm border-b">
                <th className="p-3">Child & Case</th>
                <th className="p-3">Status</th>
                <th className="p-3">Compliance</th>
                <th className="p-3">Risk Level</th>
                <th className="p-3">
                  Proposed Action Notification (Click STOP if you oppose)
                </th>
             
              </tr>
            </thead>
            <tbody>
              {data.map((row, idx) => (
                <tr
                  key={idx}
                  className={`border-b last:border-none ${
                    idx === 0 ? "bg-orange-50" : "hover:bg-gray-50"
                  }`}
                >
                  <td className="p-3">
                    <div className="font-medium text-gray-800">{row.child}</div>
                    <div className="text-xs text-gray-500">{row.case}</div>
                  </td>
                  <td className="p-3">{statusBadge(row.status)}</td>
                  <td className="p-3">{row.compliance}</td>
                  <td className="p-3">{row.risk}</td>
                  <td className="p-3 text-sm text-gray-700">{row.action}</td>
                  <td className="p-3 flex items-center gap-2">
                    <button className="px-3 py-1 bg-pink-100 text-pink-600 rounded-md text-xs font-semibold hover:bg-pink-200 transition">
                      STOP
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
