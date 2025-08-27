"use client"

import { Brain } from "lucide-react"

// Professional Observations Panel
function ProfessionalObservations() {
  return (
    <div className="relative backdrop-blur-md bg-white/20 border border-white/30 rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-300">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 to-cyan-50/20 rounded-3xl"></div>

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white text-xl shadow-lg">
            <Brain/>
          </div>
          <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
            Professional Observations
          </h3>
        </div>

        <div className="space-y-4">
          <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-5 border border-white/50">
            <div className="flex items-start gap-3 mb-2">
              <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
              <strong className="text-indigo-700 text-sm">17 Jan 2022 – Child Court Expert (Michelle Cannon):</strong>
            </div>
            <p className="text-gray-800 ml-5">
              If the mother is coaching the child, then the child is at risk of harm.
            </p>
          </div>

          <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-5 border border-white/50">
            <div className="flex items-start gap-3 mb-2">
              <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></span>
              <strong className="text-cyan-700 text-sm">24 Apr 2024 – Family Report Writer (Dr Katie Siedler):</strong>
            </div>
            <p className="text-gray-800 ml-5">
              The child is a parentified child and is decreasing in connection to father from outside influences.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfessionalObservations
