"use client"
import type React from "react"
import VideoTabs from "./components/VideoTabs"
import EmotionDetection from "./components/EmotionDetection"
import EyeResponses from "./components/EyeResponses"
import MessagesNotes from "./components/MessagesNotes"
import SystemWarnings from "./components/SystemWarnings"
import ProfessionalObservations from "./components/ProfessionalObservations"
import FullReportSection from "./components/FullReportSection"
import { User } from "lucide-react"

// Full Report Button
function FullReportButton() {
  return (
    <div className="w-full flex justify-center my-8">
      <a
        href="#full-report"
        className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-3xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
      >
        <span className="text-xl">📖</span>
        View Full Report On Screen
      </a>
    </div>
  )
}

// Main SingleFileView Component
const SingleFileView: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Background decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl flex items-center justify-center text-white text-2xl shadow-2xl">
                <User/>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Hearts in the Middle
              </h1>
            </div>
            <p className="text-xl text-gray-600 font-medium">Judge Dashboard</p>
          </div>

          {/* Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <VideoTabs />
            <EmotionDetection />
            <EyeResponses />
            <MessagesNotes />
            <SystemWarnings />
            <ProfessionalObservations />
          </div>

          <FullReportButton />
          <FullReportSection />
        </div>
      </div>
    </div>
  )
}

export default SingleFileView
