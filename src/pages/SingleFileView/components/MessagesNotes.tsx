"use client"

import { MessageCircle } from "lucide-react"

// Messages and Notes Panel
function MessagesNotes() {
  return (
    <div className="relative backdrop-blur-md bg-white/20 border border-white/30 rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-300">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50/30 to-orange-50/20 rounded-3xl"></div>

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-orange-500 rounded-2xl flex items-center justify-center text-white text-xl shadow-lg">
            <MessageCircle/>
          </div>
          <h3 className="text-xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
            Child Messages to Father
          </h3>
        </div>

        <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-5 border border-white/50 mb-6">
          <ul className="space-y-3">
            <li className="flex items-start gap-3 p-3 bg-white/30 rounded-xl">
              <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></span>
              <span className="text-gray-800">"I miss you daddy." – voice note</span>
            </li>
            <li className="flex items-start gap-3 p-3 bg-white/30 rounded-xl">
              <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
              <span className="text-gray-800">Drawing of father under rainbow</span>
            </li>
            <li className="flex items-start gap-3 p-3 bg-white/30 rounded-xl">
              <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></span>
              <span className="text-gray-800">"Can I call you soon?" – text message</span>
            </li>
          </ul>
        </div>

        <div className="flex gap-3">
          <button className="flex-1 px-4 py-3 bg-gradient-to-r from-pink-500 to-orange-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
            Add Notes
          </button>
          <button className="flex-1 px-4 py-3 bg-white/50 backdrop-blur-sm text-gray-700 font-semibold rounded-2xl border border-white/60 hover:bg-white/70 transition-all duration-200">
            View Current Notes
          </button>
        </div>
      </div>
    </div>
  )
}

export default MessagesNotes
