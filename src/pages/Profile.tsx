import { User, Mail, BookOpen, Layout, Upload, Phone, Building, GraduationCap, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { getFirestore, doc, getDoc, query, collection, where, getDocs } from 'firebase/firestore';
import { db } from '../components/firebase';

type UserProfile = {
  name: string;
  studentId: string;
  email: string;
  phone: string;
  department: string;
  batch: string;
  level: string;
  term: string;
  section: string;
  thesis?: Thesis[];
  projects?: Project[];
};

type Thesis = {
  title: string;
  supervisor: string;
  status: string;
};

type Project = {
  title: string;
  course: string;
  status: string;
};

export function Profile() {
  const [showThesisForm, setShowThesisForm] = useState(false);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [studentId, setStudentId] = useState('');

  useEffect(() => {
    const studentId = localStorage.getItem('studentId');
    if (studentId) {
      setStudentId(studentId);
    }
  }, []);

  const [user, setUser] = useState<UserProfile>({
    name: '',
    studentId: '',
    email: '',
    phone: '',
    department: '',
    batch: '',
    level: '',
    term: '',
    section: '',
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const studentQuery = query(
          collection(db, "StudentInformation"),
          where("studentId", "==", studentId)
        );
        
        const studentQuerySnapshot = await getDocs(studentQuery);
  
        if (!studentQuerySnapshot.empty) {
          const studentDoc = studentQuerySnapshot.docs[0];
          const profileData = studentDoc.data();
          
          // Fetch thesis data
          const thesisCollectionRef = collection(studentDoc.ref, "thesis");
          const thesisSnapshot = await getDocs(thesisCollectionRef);
          const thesisData = thesisSnapshot.docs.map(doc => doc.data()) as Thesis[];

          // Fetch projects data
          const projectCollectionRef = collection(studentDoc.ref, "project");
          const projectSnapshot = await getDocs(projectCollectionRef);
          const projectData = projectSnapshot.docs.map(doc => doc.data()) as Project[];

          // Set the user data with thesis and projects
          setUser({
            name: profileData.name,
            studentId: profileData.studentId,
            email: profileData.email,
            phone: profileData.phone,
            department: profileData.department,
            batch: profileData.batch,
            level: profileData.level,
            term: profileData.term,
            section: profileData.section,
            thesis: thesisData,
            projects: projectData
          });
        } else {
          console.log("No student found with the given studentId!");
        }
      } catch (error) {
        console.error("Error fetching student profile:", error);
      } finally {
        setLoading(false);
      }
    };

    if (studentId) {
      fetchProfile();
    }
  }, [studentId]);

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
                  <p className="font-medium">{user.name}</p>
                  <p className="text-sm text-gray-600">Student ID: {user.studentId}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="font-medium">{user.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="font-medium">{user.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Building className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="font-medium">{user.department}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <GraduationCap className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="font-medium">Level: {user.level}, Term: {user.term}</p>
                  <p className="text-sm text-gray-600">Section: {user.section}, Batch: {user.batch}</p>
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
            {user.thesis && user.thesis.length > 0 ? (
              user.thesis.map((thesis, index) => (
                <div key={index} className="flex items-start gap-3 border-b border-gray-100 pb-4 last:border-0">
                  <BookOpen className="h-5 w-5 text-gray-400 mt-1" />
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-medium">{thesis.title}</p>
                        <p className="text-sm text-gray-600">Supervisor: {thesis.supervisor}</p>
                        <p className="text-sm text-gray-600">Status: {thesis.status}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No thesis found.</p>
            )}
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
            {user.projects && user.projects.length > 0 ? (
              user.projects.map((project, index) => (
                <div key={index} className="flex items-start gap-3 border-b border-gray-100 pb-4 last:border-0">
                  <Layout className="h-5 w-5 text-gray-400 mt-1" />
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-medium">{project.title}</p>
                        <p className="text-sm text-gray-600">Course: {project.course}</p>
                        <p className="text-sm text-gray-600">Status: {project.status}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No projects found.</p>
            )}
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
        <div className="modal">
          <div className="modal-content">
            <button className="close-btn" onClick={() => setShowThesisForm(false)}>
              <X className="h-4 w-4" />
            </button>
            <h2 className="text-xl font-semibold">Upload Thesis</h2>
            {/* Thesis upload form here */}
          </div>
        </div>
      )}

      {/* Project Upload Modal */}
      {showProjectForm && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-btn" onClick={() => setShowProjectForm(false)}>
              <X className="h-4 w-4" />
            </button>
            <h2 className="text-xl font-semibold">Upload Project</h2>
            {/* Project upload form here */}
          </div>
        </div>
      )}
    </div>
  );
}
