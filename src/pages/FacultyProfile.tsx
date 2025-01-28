import { User, Mail, BookOpen, Layout, Phone, Building, Check, X, ExternalLink } from 'lucide-react';
import { useState } from 'react';

export function FacultyProfile() {
  const mockFaculty = {
    name: "Mir. Md. Saki Kowsar",
    designation: "Assistant Professor",
    email: "sakikowsar@cuet.ac.bd",
    phone: "+880 1234-567890",
    department: "Computer Science & Engineering",
    expertise: ["Machine Learning", "Computer Vision", "Pattern Recognition"],
    pendingTheses: [
      {
        id: 1,
        title: "Deep Learning for Medical Image Segmentation",
        student: "John Doe",
        studentId: "1804001",
        submittedDate: "2024-03-15",
        type: "thesis"
      },
      {
        id: 2,
        title: "Automated Disease Detection using CNN",
        student: "Jane Smith",
        studentId: "1804002",
        submittedDate: "2024-03-14",
        type: "thesis"
      }
    ],
    pendingProjects: [
      {
        id: 1,
        title: "Smart Home Automation System",
        students: ["Alex Johnson", "Sarah Williams"],
        course: "CSE-3000",
        submittedDate: "2024-03-13",
        type: "project"
      }
    ],
    supervisedTheses: [
      {
        id: 1,
        title: "Blockchain-based Healthcare System",
        student: "Michael Brown",
        year: 2023,
        status: "Completed",
        publication: {
          journal: "IEEE Access",
          doi: "10.1109/ACCESS.2023.123456",
          citations: 3
        }
      },
      {
        id: 2,
        title: "AI-powered Traffic Management",
        student: "Emily Davis",
        year: 2023,
        status: "Completed"
      }
    ],
    supervisedProjects: [
      {
        id: 1,
        title: "E-Learning Platform",
        students: ["David Lee", "Lisa Chen"],
        course: "CSE-3000",
        year: 2023,
        grade: "A"
      },
      {
        id: 2,
        title: "IoT Weather Station",
        students: ["James Wilson"],
        course: "CSE-3100",
        year: 2023,
        grade: "A+"
      }
    ]
  };

  const [showPublicationDetails, setShowPublicationDetails] = useState<number | null>(null);
//   const [showThesisDetails, setShowThesisDetails] = useState<number | null>(null);

  const handleReview = (id: number, type: string, action: 'accept' | 'reject') => {
    console.log(`${action}ing ${type} with id: ${id}`);
    // Add actual review logic here
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Faculty Profile</h1>
        <p className="mt-2 text-gray-600">Manage your academic supervision and review submissions</p>
      </div> */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Personal Information */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <User className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="font-medium">{mockFaculty.name}</p>
                  <p className="text-sm text-gray-600">{mockFaculty.designation}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <p className="font-medium">{mockFaculty.email}</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gray-400" />
                <p className="font-medium">{mockFaculty.phone}</p>
              </div>
              <div className="flex items-center gap-3">
                <Building className="h-5 w-5 text-gray-400" />
                <p className="font-medium">{mockFaculty.department}</p>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-sm font-medium text-gray-700 mb-2">Areas of Expertise:</h3>
              <div className="flex flex-wrap gap-2">
                {mockFaculty.expertise.map((area) => (
                  <span
                    key={area}
                    className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Pending Reviews */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Pending Reviews</h2>
            
            {/* Pending Theses */}
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3">Thesis Submissions</h3>
              <div className="space-y-4">
                {mockFaculty.pendingTheses.map((thesis) => (
                  <div key={thesis.id} className="flex items-center justify-between border-b pb-4">
                    <div>
                      <p className="font-medium">{thesis.title}</p>
                      <p className="text-sm text-gray-600">
                        Student: {thesis.student} ({thesis.studentId})
                      </p>
                      <p className="text-sm text-gray-600">
                        Submitted: {thesis.submittedDate}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleReview(thesis.id, 'thesis', 'accept')}
                        className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full hover:bg-emerald-200 flex items-center gap-1"
                      >
                        <Check className="h-4 w-4" />
                        Accept
                      </button>
                      <button
                        onClick={() => handleReview(thesis.id, 'thesis', 'reject')}
                        className="px-3 py-1 bg-red-100 text-red-700 rounded-full hover:bg-red-200 flex items-center gap-1"
                      >
                        <X className="h-4 w-4" />
                        Reject
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pending Projects */}
            <div>
              <h3 className="text-lg font-medium mb-3">Project Submissions</h3>
              <div className="space-y-4">
                {mockFaculty.pendingProjects.map((project) => (
                  <div key={project.id} className="flex items-center justify-between border-b pb-4">
                    <div>
                      <p className="font-medium">{project.title}</p>
                      <p className="text-sm text-gray-600">
                        Students: {project.students.join(", ")}
                      </p>
                      <p className="text-sm text-gray-600">
                        Course: {project.course}
                      </p>
                      <p className="text-sm text-gray-600">
                        Submitted: {project.submittedDate}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleReview(project.id, 'project', 'accept')}
                        className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full hover:bg-emerald-200 flex items-center gap-1"
                      >
                        <Check className="h-4 w-4" />
                        Accept
                      </button>
                      <button
                        onClick={() => handleReview(project.id, 'project', 'reject')}
                        className="px-3 py-1 bg-red-100 text-red-700 rounded-full hover:bg-red-200 flex items-center gap-1"
                      >
                        <X className="h-4 w-4" />
                        Reject
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Previous Supervisions */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Previous Supervisions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Supervised Theses */}
              <div>
                <h3 className="text-lg font-medium mb-3">Completed Theses</h3>
                <div className="space-y-4">
                  {mockFaculty.supervisedTheses.map((thesis) => (
                    <div key={thesis.id} className="border-b pb-4 last:border-b-0">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-medium">{thesis.title}</p>
                          <p className="text-sm text-gray-600">
                            Student: {thesis.student}
                          </p>
                          <p className="text-sm text-gray-600">
                            Year: {thesis.year}
                          </p>
                          <p className="text-sm text-gray-600">
                            Status: {thesis.status}
                          </p>
                        </div>
                      </div>
                      <div className="mt-2 flex gap-2">
                        {/* <button
                          onClick={() => setShowThesisDetails(thesis.id)}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 flex items-center gap-1 text-sm"
                        >
                          <FileText className="h-4 w-4" />
                          View Details
                        </button> */}
                        {thesis.publication && (
                          <button
                            onClick={() => setShowPublicationDetails(thesis.id)}
                            className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 flex items-center gap-1 text-sm"
                          >
                            <ExternalLink className="h-4 w-4" />
                            Publication
                          </button>
                        )}
                      </div>
                      {/* {showThesisDetails === thesis.id && (
                        <div className="mt-3 p-3 bg-gray-50 rounded-md">
                          <h4 className="font-medium text-sm mb-2">Thesis Details</h4>
                          <p className="text-sm"><span className="font-medium">Abstract:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                          <p className="text-sm mt-1"><span className="font-medium">Keywords:</span> Machine Learning, Computer Vision, Deep Learning</p>
                        </div>
                      )} */}
                      {showPublicationDetails === thesis.id && thesis.publication && (
                        <div className="mt-3 p-3 bg-gray-50 rounded-md">
                          <h4 className="font-medium text-sm mb-2">Publication Details</h4>
                          <p className="text-sm"><span className="font-medium">Journal:</span> {thesis.publication.journal}</p>
                          <p className="text-sm"><span className="font-medium">DOI:</span> {thesis.publication.doi}</p>
                          <p className="text-sm"><span className="font-medium">Citations:</span> {thesis.publication.citations}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Supervised Projects */}
              <div>
                <h3 className="text-lg font-medium mb-3">Completed Projects</h3>
                <div className="space-y-4">
                  {mockFaculty.supervisedProjects.map((project) => (
                    <div key={project.id} className="border-b pb-4 last:border-b-0">
                      <p className="font-medium">{project.title}</p>
                      <p className="text-sm text-gray-600">
                        Students: {project.students.join(", ")}
                      </p>
                      <p className="text-sm text-gray-600">
                        Course: {project.course}
                      </p>
                      <p className="text-sm text-gray-600">
                        Year: {project.year}
                      </p>
                      <p className="text-sm text-gray-600">
                        Grade: {project.grade}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Supervision Statistics</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-md">
                <p className="text-sm text-gray-600">Pending Reviews</p>
                <p className="text-2xl font-semibold text-indigo-600">
                  {mockFaculty.pendingTheses.length + mockFaculty.pendingProjects.length}
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-md">
                <p className="text-sm text-gray-600">Total Theses Supervised</p>
                <p className="text-2xl font-semibold text-emerald-600">
                  {mockFaculty.supervisedTheses.length}
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-md">
                <p className="text-sm text-gray-600">Total Projects Supervised</p>
                <p className="text-2xl font-semibold text-blue-600">
                  {mockFaculty.supervisedProjects.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}