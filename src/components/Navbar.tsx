"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-hot-toast"
import { User, LogOut, ChevronDown, FileText, Download, ScaleIcon } from "lucide-react"
import { Button } from "./components/ui/button"

interface ProfileDropdownProps {
  isOpen: boolean
  onClose: () => void
  onViewProfile: () => void
  onLogout: () => void
}

export const ProfileDropdown: React.FC<ProfileDropdownProps> = ({ isOpen, onClose, onViewProfile, onLogout }) => {
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      ref={dropdownRef}
      className="absolute top-full right-0 mt-2 w-64 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden z-50"
    >
      <div className="p-4 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border-b border-white/20">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
            JD
          </div>
          <div>
            <p className="font-semibold text-gray-800">John Doe</p>
            <p className="text-sm text-gray-600">john.doe@example.com</p>
          </div>
        </div>
      </div>

      <div className="p-2">
        <button
          onClick={onViewProfile}
          className="w-full cursor-pointer flex items-center gap-3 px-4 py-3 text-left hover:bg-blue-50/50 rounded-xl transition-colors duration-200"
        >
          <User className="w-5 h-5 text-blue-500" />
          <span className="text-gray-700">View Profile</span>
        </button>

        <button
          onClick={onLogout}
          className="w-full flex cursor-pointer items-center gap-3 px-4 py-3 text-left hover:bg-red-50/50 rounded-xl transition-colors duration-200"
        >
          <LogOut className="w-5 h-5 text-red-500" />
          <span className="text-gray-700">Logout</span>
        </button>
      </div>
    </div>
  )
}

interface LogoutModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
}

export const LogoutModal: React.FC<LogoutModalProps> = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-6 max-w-md w-full mx-4">
        <div className="text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <LogOut className="w-8 h-8 text-red-500" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Confirm Logout</h3>
          <p className="text-gray-600 mb-6">
            Are you sure you want to logout? You will need to sign in again to access your account.
          </p>

          <div className="flex gap-3">
            <Button
              onClick={onClose}
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 border-0 rounded-xl cursor-pointer"
            >
              Cancel
            </Button>
            <Button
              onClick={onConfirm}
              className="flex-1 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-0 rounded-xl cursor-pointer"
            >
              Logout
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

const Navbar: React.FC = () => {
  const navigate = useNavigate()
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false)

  const handleLogout = () => {
    localStorage.removeItem("token")
    toast.success("Successfully logged out!")
    navigate("/login")
    setIsLogoutModalOpen(false)
  }

  const handleViewProfile = () => {
    setIsProfileOpen(false)
    navigate("/profile")
  }

  const handleLogoutClick = () => {
    setIsProfileOpen(false)
    setIsLogoutModalOpen(true)
  }

  return (
    <>
    <div className="flex bg-gray-800 justify-between items-center">
        <h1 className="text-xl font-bold flex gap-1 tracking-wide text-white px-6 py-4">
          <ScaleIcon className="w-6 h-6 text-gray-300"/>
          Hearts in the Middle — Judge Dashboard
        </h1>
        <div className="flex gap-3 relative flex items-center">
           <Button className="bg-gray-700 hover:bg-gray-600 flex gap-2 rounded-full shadow-md">
            <FileText size={16} /> Add a new Case
          </Button>
          <Button className="bg-gray-700 hover:bg-gray-600 flex gap-2 rounded-full shadow-md">
            <FileText size={16} /> Generate Court Report
          </Button>
          <Button className="bg-gray-700 hover:bg-gray-600 flex gap-2 rounded-full shadow-md">
            <Download size={16} /> Export
          </Button>
           <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-3 px-4 py-1 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-200 border border-white/20 cursor-pointer"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
              JD
            </div>
            <ChevronDown
              className={`w-4 h-4 text-white transition-transform duration-200 ${isProfileOpen ? "rotate-180" : ""}`}
            />
          </button>

          <ProfileDropdown
            isOpen={isProfileOpen}
            onClose={() => setIsProfileOpen(false)}
            onViewProfile={handleViewProfile}
            onLogout={handleLogoutClick}
          />
        </div> 
          <div className="relative">
         
        </div> 
          <LogoutModal isOpen={isLogoutModalOpen} onClose={() => setIsLogoutModalOpen(false)} onConfirm={handleLogout} />
      </div> 
    {/* <>
      <nav className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-blue-600/90 via-indigo-600/90 to-purple-600/90 backdrop-blur-xl shadow-2xl sticky top-0 left-0 w-full z-40 border-b border-white/10">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-white text-xl font-bold hover:text-blue-100 transition-colors duration-200">
            Hearts in the Middle
          </Link>
        </div>

       
      </nav>

     
    </> */}
    </>
  )
}

export default Navbar
