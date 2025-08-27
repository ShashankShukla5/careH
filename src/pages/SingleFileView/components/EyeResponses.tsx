"use client"

import { Eye } from "lucide-react"

// Eye-Based Answers Panel
function EyeResponses() {
  return (
    <div className="relative backdrop-blur-md bg-white/20 border border-white/30 rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-300">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/20 rounded-3xl"></div>

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-xl shadow-lg">
            <Eye/>
          </div>
          <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Eye-Based Child Responses
          </h3>
        </div>

        <div className="space-y-4">
          <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-4 border border-white/50">
            <p className="font-semibold text-gray-800 mb-2">Q: Do you want to see your father again?</p>
            <p className="text-green-700 font-medium flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>👀 Left (Yes)
            </p>
          </div>

          <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-4 border border-white/50">
            <p className="font-semibold text-gray-800 mb-2">Q: Are you scared of your dad?</p>
            <p className="text-blue-700 font-medium flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>👀 Right (No)
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EyeResponses
