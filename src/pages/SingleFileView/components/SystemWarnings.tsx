"use client"

import { AlertOctagon } from "lucide-react"

// System Warnings Panel
function SystemWarnings() {
  return (
    <div className="relative backdrop-blur-md bg-white/20 border border-white/30 rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-300">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50/30 to-yellow-50/20 rounded-3xl"></div>

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-yellow-500 rounded-2xl flex items-center justify-center text-white text-xl shadow-lg">
            <AlertOctagon/>
          </div>
          <h3 className="text-xl font-bold bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent">
            Warnings Sent by System
          </h3>
        </div>

        <div className="space-y-3">
          <div className="bg-gradient-to-r from-yellow-100/60 to-orange-100/40 backdrop-blur-sm rounded-2xl p-4 border border-yellow-200/50">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-yellow-500 rounded-full flex-shrink-0"></span>
              <span className="text-sm font-medium text-gray-800">
                06 June 2025 – Your child has signaled guilt for love
              </span>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-100/60 to-orange-100/40 backdrop-blur-sm rounded-2xl p-4 border border-yellow-200/50">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></span>
              <span className="text-sm font-medium text-gray-800">
                24 June 2025 – Your child indicated they wish to contact their other parent
              </span>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-100/60 to-orange-100/40 backdrop-blur-sm rounded-2xl p-4 border border-yellow-200/50">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></span>
              <span className="text-sm font-medium text-gray-800">
                07 July 2025 – Your child is asking to call their father
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SystemWarnings
