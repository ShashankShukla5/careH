"use client"

import type React from "react"
import { useState } from "react"
import { Card } from "@/components/components/ui/card"
import { Input } from "@/components/components/ui/input"
import { Button } from "@/components/components/ui/button"
import { Label } from "@/components/components/ui/label"
import { Textarea } from "@/components/components/ui/textarea"
import { User, Mail, Phone, MapPin, Calendar, Edit3, Save, X, Camera } from "lucide-react"
import { toast } from "react-hot-toast"

const ProfileView: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [profileData, setProfileData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main Street, City, State 12345",
    dateOfBirth: "1990-01-15",
    bio: "Family court professional with over 10 years of experience in child welfare and family mediation.",
    role: "Case Manager",
    department: "Family Services",
  })

  const [editData, setEditData] = useState(profileData)

  const handleEdit = () => {
    setEditData(profileData)
    setIsEditing(true)
  }

  const handleSave = () => {
    setProfileData(editData)
    setIsEditing(false)
    toast.success("Profile updated successfully!")
  }

  const handleCancel = () => {
    setEditData(profileData)
    setIsEditing(false)
  }

  const handleInputChange = (field: string, value: string) => {
    setEditData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4 md:p-8">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-200/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-indigo-200/20 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-4xl mx-auto">
        <Card className="backdrop-blur-xl bg-white/70 border-0 shadow-2xl rounded-3xl overflow-hidden relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/60 to-white/40"></div>

          <div className="relative p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-4xl shadow-2xl">
                  {profileData.firstName[0]}
                  {profileData.lastName[0]}
                </div>
                <button className="absolute bottom-2 right-2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200">
                  <Camera className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              <div className="text-center md:text-left flex-1">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {profileData.firstName} {profileData.lastName}
                </h1>
                <p className="text-lg text-gray-600 mb-1">{profileData.role}</p>
                <p className="text-gray-500">{profileData.department}</p>
              </div>

              <div className="flex gap-3">
                {!isEditing ? (
                  <Button
                    onClick={handleEdit}
                    className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white border-0 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Edit3 className="w-4 h-4 mr-2" />
                    Edit Profile
                  </Button>
                ) : (
                  <>
                    <Button
                      onClick={handleSave}
                      className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white border-0 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Save className="w-4 h-4 mr-2" />
                      Save
                    </Button>
                    <Button
                      onClick={handleCancel}
                      className="bg-gray-100 hover:bg-gray-200 text-gray-700 border-0 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <X className="w-4 h-4 mr-2" />
                      Cancel
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        </Card>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="backdrop-blur-xl bg-white/70 border-0 shadow-2xl rounded-3xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/60 to-white/40"></div>

            <div className="relative p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                <User className="w-5 h-5 text-blue-500" />
                Personal Information
              </h2>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-gray-600 font-medium">First Name</Label>
                    {isEditing ? (
                      <Input
                        value={editData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        className="mt-1 rounded-xl border-0 bg-white/60 backdrop-blur-sm shadow-lg"
                      />
                    ) : (
                      <p className="mt-1 text-gray-800 font-medium">{profileData.firstName}</p>
                    )}
                  </div>
                  <div>
                    <Label className="text-gray-600 font-medium">Last Name</Label>
                    {isEditing ? (
                      <Input
                        value={editData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        className="mt-1 rounded-xl border-0 bg-white/60 backdrop-blur-sm shadow-lg"
                      />
                    ) : (
                      <p className="mt-1 text-gray-800 font-medium">{profileData.lastName}</p>
                    )}
                  </div>
                </div>

                <div>
                  <Label className="text-gray-600 font-medium flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email
                  </Label>
                  {isEditing ? (
                    <Input
                      type="email"
                      value={editData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="mt-1 rounded-xl border-0 bg-white/60 backdrop-blur-sm shadow-lg"
                    />
                  ) : (
                    <p className="mt-1 text-gray-800 font-medium">{profileData.email}</p>
                  )}
                </div>

                <div>
                  <Label className="text-gray-600 font-medium flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Phone
                  </Label>
                  {isEditing ? (
                    <Input
                      value={editData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="mt-1 rounded-xl border-0 bg-white/60 backdrop-blur-sm shadow-lg"
                    />
                  ) : (
                    <p className="mt-1 text-gray-800 font-medium">{profileData.phone}</p>
                  )}
                </div>

                <div>
                  <Label className="text-gray-600 font-medium flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Date of Birth
                  </Label>
                  {isEditing ? (
                    <Input
                      type="date"
                      value={editData.dateOfBirth}
                      onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                      className="mt-1 rounded-xl border-0 bg-white/60 backdrop-blur-sm shadow-lg"
                    />
                  ) : (
                    <p className="mt-1 text-gray-800 font-medium">
                      {new Date(profileData.dateOfBirth).toLocaleDateString()}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </Card>

          <Card className="backdrop-blur-xl bg-white/70 border-0 shadow-2xl rounded-3xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/60 to-white/40"></div>

            <div className="relative p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-500" />
                Additional Details
              </h2>

              <div className="space-y-4">
                <div>
                  <Label className="text-gray-600 font-medium">Address</Label>
                  {isEditing ? (
                    <Textarea
                      value={editData.address}
                      onChange={(e) => handleInputChange("address", e.target.value)}
                      className="mt-1 rounded-xl border-0 bg-white/60 backdrop-blur-sm shadow-lg resize-none"
                      rows={3}
                    />
                  ) : (
                    <p className="mt-1 text-gray-800 font-medium">{profileData.address}</p>
                  )}
                </div>

                <div>
                  <Label className="text-gray-600 font-medium">Role</Label>
                  {isEditing ? (
                    <Input
                      value={editData.role}
                      onChange={(e) => handleInputChange("role", e.target.value)}
                      className="mt-1 rounded-xl border-0 bg-white/60 backdrop-blur-sm shadow-lg"
                    />
                  ) : (
                    <p className="mt-1 text-gray-800 font-medium">{profileData.role}</p>
                  )}
                </div>

                <div>
                  <Label className="text-gray-600 font-medium">Department</Label>
                  {isEditing ? (
                    <Input
                      value={editData.department}
                      onChange={(e) => handleInputChange("department", e.target.value)}
                      className="mt-1 rounded-xl border-0 bg-white/60 backdrop-blur-sm shadow-lg"
                    />
                  ) : (
                    <p className="mt-1 text-gray-800 font-medium">{profileData.department}</p>
                  )}
                </div>

                <div>
                  <Label className="text-gray-600 font-medium">Bio</Label>
                  {isEditing ? (
                    <Textarea
                      value={editData.bio}
                      onChange={(e) => handleInputChange("bio", e.target.value)}
                      className="mt-1 rounded-xl border-0 bg-white/60 backdrop-blur-sm shadow-lg resize-none"
                      rows={4}
                    />
                  ) : (
                    <p className="mt-1 text-gray-800 font-medium">{profileData.bio}</p>
                  )}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default ProfileView
