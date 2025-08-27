"use client"

import { Smile } from "lucide-react"

// Real-Time Emotion Detection Panel
function EmotionDetection() {
  return (
    <div className="relative backdrop-blur-md bg-white/20 border border-white/30 rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-300">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 to-teal-50/20 rounded-3xl"></div>

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center text-white text-xl shadow-lg">
            <Smile/>
          </div>
          <h3 className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Real-Time Emotion Detection
          </h3>
        </div>

        <div className="space-y-5">
          <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-5 border border-white/50">
            <h4 className="font-bold text-emerald-700 mb-3 flex items-center gap-2">
              <span className="w-3 h-3 bg-emerald-500 rounded-full"></span>
              First Contact
            </h4>
            <div className="space-y-2 ml-5">
              <div className="text-sm text-gray-700">0:03 – Joy detected</div>
              <div className="text-sm text-gray-700">0:05 – Sadness + Lip tremble</div>
              <div className="text-sm font-semibold text-emerald-800 bg-emerald-100/50 rounded-lg p-2 mt-2">
                Summary: Child happy / No fear detected
              </div>
            </div>
          </div>

          <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-5 border border-white/50">
            <h4 className="font-bold text-teal-700 mb-3 flex items-center gap-2">
              <span className="w-3 h-3 bg-teal-500 rounded-full"></span>
              Midway Contact
            </h4>
            <div className="space-y-2 ml-5">
              <div className="text-sm text-gray-700">0:07 – Surprise + Wide Eyes</div>
              <div className="text-sm font-semibold text-teal-800 bg-teal-100/50 rounded-lg p-2 mt-2">
                Summary: Surprise shown / No distress indicators
              </div>
            </div>
          </div>

          <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-5 border border-white/50">
            <h4 className="font-bold text-cyan-700 mb-3 flex items-center gap-2">
              <span className="w-3 h-3 bg-cyan-500 rounded-full"></span>
              Final Contact
            </h4>
            <div className="space-y-2 ml-5">
              <div className="text-sm text-gray-700">0:10 – Longing (Extended Eye Contact)</div>
              <div className="text-sm text-gray-700">0:14 – Tear detected</div>
              <div className="text-sm font-semibold text-cyan-800 bg-cyan-100/50 rounded-lg p-2 mt-2">
                Summary: Emotional longing / Signs of sadness but no fear
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmotionDetection
