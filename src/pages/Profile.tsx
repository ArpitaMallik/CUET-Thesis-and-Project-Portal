import { User, Mail, BookOpen, Layout, Upload, Phone, Building, GraduationCap } from 'lucide-react';

export function Profile() {
  const mockUser = {
    name: "Arpita Mallik",
    studentId: "2004023",
    email: "u2004023@student.cuet.ac.bd",
    phone: "+880 1234-567890",
    department: "Computer Science & Engineering",
    batch: "2020",
    level: "3",
    term: "2",
    section: "A",
    thesis: {
      title: "Implementation of Deep Learning in Medical Image Analysis",
      supervisor: "Dr. Robert Wilson",
      status: "In Progress"
    },
    projects: [
      {
        title: "E-Learning Platform",
        course: "CSE-3000",
        grade: "A",
        status: "Published"
      },
      {
        title: "Smart IoT System",
        course: "CSE-3100",
        grade: "Pending",
        status: "Under Review"
      }
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
        <p className="mt-2 text-gray-600">Manage your account and view your academic progress</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <User className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="font-medium">{mockUser.name}</p>
                  <p className="text-sm text-gray-600">Student ID: {mockUser.studentId}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="font-medium">{mockUser.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="font-medium">{mockUser.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Building className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="font-medium">{mockUser.department}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <GraduationCap className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="font-medium">Level: {mockUser.level}, Term: {mockUser.term}</p>
                  <p className="text-sm text-gray-600">Section: {mockUser.section}, Batch: {mockUser.batch}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Thesis Information</h2>
              <button className="btn btn-primary flex items-center gap-2">
                <Upload className="h-4 w-4" />
                Upload Thesis
              </button>
            </div>
            <div className="flex items-start gap-3">
              <BookOpen className="h-5 w-5 text-gray-400 mt-1" />
              <div>
                <p className="font-medium">{mockUser.thesis.title}</p>
                <p className="text-sm text-gray-600">Supervisor: {mockUser.thesis.supervisor}</p>
                <p className="text-sm text-gray-600">Status: {mockUser.thesis.status}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Course Projects</h2>
              <button className="btn btn-primary flex items-center gap-2">
                <Upload className="h-4 w-4" />
                Upload Project
              </button>
            </div>
            <div className="space-y-4">
              {mockUser.projects.map((project, index) => (
                <div key={index} className="flex items-start gap-3 border-b border-gray-100 pb-4 last:border-0">
                  <Layout className="h-5 w-5 text-gray-400 mt-1" />
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-medium">{project.title}</p>
                        <p className="text-sm text-gray-600">Course: {project.course}</p>
                        <p className="text-sm text-gray-600">Grade: {project.grade}</p>
                      </div>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        project.status === 'Published' 
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
            <div className="space-y-2">
              <button className="btn btn-primary w-full">Update Profile</button>
              <button className="btn btn-secondary w-full">Change Password</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}