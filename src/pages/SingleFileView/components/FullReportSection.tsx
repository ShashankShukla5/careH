"use client"

import { Book } from "lucide-react"

// Full Report Section
function FullReportSection() {
  return (
    <div
      id="full-report"
      className="relative backdrop-blur-md bg-white/20 border border-white/30 rounded-3xl shadow-2xl p-10 mt-8"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 to-indigo-50/30 rounded-3xl"></div>

      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl flex items-center justify-center text-white text-2xl shadow-lg">
            <Book/>
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Full Judicial Report – Hearts in the Middle
          </h2>
        </div>

        <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-white/50 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
              <span className="font-semibold text-gray-800">Case ID:</span>
              <span className="text-gray-700">HITM-2025-001</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 bg-indigo-500 rounded-full"></span>
              <span className="font-semibold text-gray-800">Child Name:</span>
              <span className="text-gray-700">[REDACTED]</span>
            </div>
          </div>
        </div>

        <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-white/50 mb-6">
          <h3 className="font-bold text-lg text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-4 h-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></span>
            Key Findings:
          </h3>
          <ul className="space-y-3">
            {[
              "First Contact – Joy, no fear detected",
              "Midway Contact – Surprise with emotional longing",
              "Final Contact – Sadness present, but no signs of fear or distress",
              "Warnings Issued – Multiple alerts sent regarding parental coaching",
              "Expert Opinion – Child at emotional risk if separation persists",
            ].map((finding, index) => (
              <li key={index} className="flex items-start gap-3 p-3 bg-white/30 rounded-xl">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-gray-800">{finding}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gradient-to-r from-green-100/60 to-emerald-100/40 backdrop-blur-sm rounded-2xl p-6 border border-green-200/50">
          <h3 className="font-bold text-lg text-green-800 mb-3 flex items-center gap-2">
            <span className="w-4 h-4 bg-green-500 rounded-full"></span>
            Recommended Action:
          </h3>
          <p className="text-gray-800 leading-relaxed">
            Immediate restoration of contact, ongoing monitoring, and therapeutic reunification support.
          </p>
        </div>
      </div>
    </div>
  )
}

export default FullReportSection
