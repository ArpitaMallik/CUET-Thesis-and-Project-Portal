import { User, Mail, BookOpen, Layout, Upload, Phone, Building, GraduationCap, X } from 'lucide-react';
import { useState } from 'react';



export function Profile() {
  const [showThesisForm, setShowThesisForm] = useState(false);
  const [showProjectForm, setShowProjectForm] = useState(false);

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

  const handleThesisSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle thesis submission
    console.log('Thesis submitted');
    setShowThesisForm(false);
  };

  const handleProjectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle project submission
    console.log('Project submitted');
    setShowProjectForm(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
        <p className="mt-2 text-gray-600">Manage your account and view your academic progress</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Personal Information */}
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

          {/* Thesis Information */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Thesis Information</h2>
              <button 
                className="btn btn-primary flex items-center gap-2"
                onClick={() => setShowThesisForm(true)}
              >
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

          {/* Course Projects */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Course Projects</h2>
              <button 
                className="btn btn-primary flex items-center gap-2"
                onClick={() => setShowProjectForm(true)}
              >
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

      {/* Thesis Upload Modal */}
      {showThesisForm && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-hidden">
    <div className="bg-white rounded-lg p-6 max-w-md w-full relative overflow-y-auto max-h-screen">
      <button
        onClick={() => setShowThesisForm(false)}
        className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
      >
        <X className="h-5 w-5" />
      </button>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Upload Thesis</h3>
      </div>
      <form onSubmit={handleThesisSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <input type="text" className="input" required />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Author</label>
          <input type="text" className="input" required />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Supervisor</label>
          <input type="text" className="input" required />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Publishing Year</label>
          <input type="number" className="input" required min="2000" max="2024" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Topic</label>
          <input type="text" className="input" required />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Keywords (comma separated)</label>
          <input
            type="text"
            className="input"
            required
            placeholder="e.g., AI, Machine Learning, Computer Vision"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Thesis File</label>
          <input type="file" className="input" required accept=".pdf,.doc,.docx" />
        </div>
        <button type="submit" className="btn btn-primary w-full">
          Upload Thesis
        </button>
      </form>
    </div>
  </div>
)}


      {/* Project Upload Modal */}
      {showProjectForm && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
    <div className="bg-white rounded-lg p-6 max-w-md w-full overflow-y-auto max-h-[90vh]">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold">Upload Project</h3>
        <button
          onClick={() => setShowProjectForm(false)}
          className="text-gray-500 hover:text-gray-700"
          aria-label="Close form"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
      <form onSubmit={handleProjectSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="project-title">
            Title
          </label>
          <input
            id="project-title"
            type="text"
            className="input"
            required
            autoFocus
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="team-members">
            Team Members (comma separated)
          </label>
          <input
            id="team-members"
            type="text"
            className="input"
            required
            
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="course-name">
            Course Name
          </label>
          <input
            id="course-name"
            type="text"
            className="input"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="course-teacher">
            Course Teacher
          </label>
          <input
            id="course-teacher"
            type="text"
            className="input"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="publishing-year">
            Publishing Year
          </label>
          <input
            id="publishing-year"
            type="number"
            className="input"
            required
            min="2000"
            max="2024"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="topic">
            Topic
          </label>
          <input
            id="topic"
            type="text"
            className="input"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="keywords">
            Keywords (comma separated)
          </label>
          <input
            id="keywords"
            type="text"
            className="input"
            required
            placeholder="e.g., Web Development, React, Node.js"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="project-file">
            Project File
          </label>
          <input
            id="project-file"
            type="file"
            className="input"
            required
            accept=".pdf,.zip,.rar"
          />
        </div>
        <button type="submit" className="btn btn-primary w-full">
          Upload Project
        </button>
      </form>
    </div>
  </div>
)}

    </div>
  );
}




