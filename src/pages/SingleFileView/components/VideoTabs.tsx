"use client"
import { Camera, Video } from "lucide-react"
import { useState } from "react"

// Video Tabs Panel
function VideoTabs() {
  const [active, setActive] = useState("First Contact")

  return (
    <div className="relative backdrop-blur-md bg-white/20 border border-white/30 rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-300">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50/30 to-rose-50/20 rounded-3xl"></div>

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-rose-500 rounded-2xl flex items-center justify-center text-white text-xl shadow-lg">
            <Video/>
          </div>
          <h3 className="text-xl font-bold bg-gradient-to-r from-violet-600 to-rose-600 bg-clip-text text-transparent">
            Child Video Reactions
          </h3>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {["First Contact", "Midway Contact", "Final Contact"].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-3 rounded-2xl font-semibold transition-all duration-200 transform hover:scale-105 ${
                active === tab
                  ? "bg-gradient-to-r from-violet-500 to-rose-500 text-white shadow-lg"
                  : "bg-white/50 backdrop-blur-sm text-gray-700 border border-white/60 hover:bg-white/70"
              }`}
              onClick={() => setActive(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
          <div className="flex items-center gap-3 text-lg font-semibold text-gray-800">
            <span className="text-2xl"><Camera/></span>
            <span>Displaying: {active}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoTabs
