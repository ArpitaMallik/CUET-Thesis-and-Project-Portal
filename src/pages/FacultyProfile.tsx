import { User, Mail, Phone, Building, Check, X, ExternalLink, Eye } from 'lucide-react';
import { useState, useEffect } from 'react';
import { query, collection, where, getDocs, DocumentData, addDoc, deleteDoc, doc, increment, updateDoc } from 'firebase/firestore';
import { db } from '../components/firebase';

type UserProfile = {
  name: string;
  facultyId: string;
  email: string;
  phone: string;
  designation: string;
  department: string;
  expertise: string[];
  // thesis?: Thesis[];
  // projects?: Project[];
};

export function FacultyProfile() {
  const [email, setEmail] = useState('');

  useEffect(() => {
    const email = localStorage.getItem('email');
    if (email) {
      setEmail(email);
    }
  }, []);

  const [faculty, setFaculty] = useState<UserProfile>({
    name: '',
    facultyId: '',
    email: '',
    phone: '',
    designation: '',
    department: '',
    expertise: [],
    // thesis: [],
    // projects: []
  });

  useEffect(() => {
    const fetchFaculty = async () => {
      try {
        console.log(email);
        const facultyQuery = query(collection(db, 'SupervisorInformation'), where('email', '==', email));
        const facultySnapshot = await getDocs(facultyQuery);

        if (!facultySnapshot.empty) {
          const facultyData = facultySnapshot.docs[0].data();
          console.log('Faculty profile loaded');
          console.log(facultyData);
          setFaculty({
            name: facultyData.name,
            facultyId: facultyData.facultyId,
            email: facultyData.email,
            phone: facultyData.phone,
            designation: facultyData.designation,
            department: facultyData.department,
            expertise: Array.isArray(facultyData.expertise) ? facultyData.expertise : [],
            // thesis: facultyData.thesis,
            // projects: facultyData.projects
          });
        } else {
          console.log('No faculty information found');
        }
      } catch (error) {
        console.error('Error fetching faculty information: ', error);
      }
    };

    if (email) {
      fetchFaculty();
    }
  }, [email]);


  useEffect(() => {
    console.log('Before fetch Pending')
    const fetchPendingThesis = async () => {
        try {
          const thesisQuery = query(collection(db, 'PendingThesisPaper'), where('supervisor', '==', faculty.name));
          console.log(faculty.name);
          const thesisSnapshot = await getDocs(thesisQuery);
          const pendingTheses = thesisSnapshot.docs.map((doc) => doc.data());
          console.log('Pending theses loaded');
          setPendingTheses(pendingTheses);
          console.log(pendingTheses);
          // setFaculty((prev) => ({ ...prev, thesis: pendingTheses }));
        } catch (error) {
          console.error('Error fetching pending thesis: ', error);
        }
      };
  
      if (faculty.name) {
        console.log('Before fetch Pending')
        fetchPendingThesis();
      }
  }, [faculty.name]);

  useEffect(() => {
    const fetchPendingProjects = async () => {
      try {
        const projectQuery = query(collection(db, 'PendingProjects'), where('ProjectTeacher', '==', faculty.name));
        const projectSnapshot = await getDocs(projectQuery);
        const pendingProjects = projectSnapshot.docs.map((doc) => doc.data());
        console.log('Pending projects loaded');
        setPendingProjects(pendingProjects);
        // setFaculty((prev) => ({ ...prev, projects: pendingProjects }));
      } catch (error) {
        console.error('Error fetching pending projects: ', error);
      }
    };
    
    if (faculty.name) {
      fetchPendingProjects();
    }
  }, [faculty.name]);

  const [pendingThesesPaper, setPendingTheses] = useState<DocumentData[]>([]);
  const [pendingProjects, setPendingProjects] = useState<DocumentData[]>([]);

  const handleThesisReview = async (id: string, thesis: DocumentData, action: 'accept' | 'reject') => {
    try {
        const q = query(collection(db, "PendingThesisPaper"), where("ThesisID", "==", id));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
            console.warn(`No thesis found with ThesisID: ${id}`);
            return;
        }

        // If "accept", add to "ThesisPaper" collection
        if (action === 'accept') {
            await addDoc(collection(db, "Thesis Paper"), { ...thesis });
            console.log(`Thesis ${id} added to ThesisPaper collection`);
            try {
            const dashboardDocRef = doc(db, 'Dashboard', 'Original'); // Replace 'yourDocumentId' with the actual document ID
            await updateDoc(dashboardDocRef, {
                'Total Theses': increment(1)
            });
            } catch (error) {
            console.error('Error updating total theses:', error);
            }
        }

        // Delete the matched document(s) from "PendingThesisPaper"
        querySnapshot.forEach(async (document) => {
            await deleteDoc(doc(db, "PendingThesisPaper", document.id));
            console.log(`Thesis ${id} removed from PendingThesisPaper collection`);
        });

        // Update the frontend state
        setPendingTheses((prev) => prev.filter((t) => t.ThesisID !== id));

    } catch (error) {
        console.error(`Error handling thesis ${id}:`, error);
    }
};

const handleProjectReview = async (id: string, project: DocumentData, action: 'accept' | 'reject') => {
    try {
        const q = query(collection(db, "PendingProjects"), where("ProjectID", "==", id));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
            console.warn(`No project found with projectID: ${id}`);
            return;
        }

        // If "accept", add to "ThesisPaper" collection
        if (action === 'accept') {
            await addDoc(collection(db, "Projects"), { ...project });
            console.log(`Project ${id} added to Projects collection`);
            try {
            const dashboardDocRef = doc(db, 'Dashboard', 'Original'); // Replace 'yourDocumentId' with the actual document ID
            await updateDoc(dashboardDocRef, {
                'Active Projects': increment(1)
            });
            } catch (error) {
            console.error('Error updating projects:', error);
            }
        }

        // Delete the matched document(s) from "PendingThesisPaper"
        querySnapshot.forEach(async (document) => {
            await deleteDoc(doc(db, "PendingProjects", document.id));
            console.log(`Thesis ${id} removed from PendingProject collection`);
        });

        // Update the frontend state
        setPendingProjects((prev) => prev.filter((t) => t.ProjectID !== id));

    } catch (error) {
        console.error(`Error handling projecct ${id}:`, error);
    }
  };

  return (
    console.log('Faculty Profile'),
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Faculty Profile</h1>
        <p className="mt-2 text-gray-600">Manage your academic supervision and review submissions</p>
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
                  <p className="font-medium">{faculty.name}</p>
                  <p className="text-sm text-gray-600">{faculty.designation}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <p className="font-medium">{faculty.email}</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gray-400" />
                <p className="font-medium">{faculty.phone}</p>
              </div>
              <div className="flex items-center gap-3">
                <Building className="h-5 w-5 text-gray-400" />
                <p className="font-medium">{faculty.department}</p>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-sm font-medium text-gray-700 mb-2">Areas of Expertise:</h3>
              <div className="flex flex-wrap gap-2">
                {faculty.expertise.map((area) => (
                  <span key={area} className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
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
                {pendingThesesPaper.map((thesis) => (
                  <div key={thesis.ThesisID} className="flex items-center justify-between border-b pb-4">
                    <div>
                      <p className="font-medium">{thesis.title}</p>
                      <p className="text-sm text-gray-600">Students: {thesis.authors}</p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 flex items-center gap-1"
                        // onClick={() => handleView(thesis.id)}
                      >
                        <a href={thesis.pdfLink} target="_blank" rel="noopener noreferrer">
                        View
                        </a>
                      </button>
                      <button
                        className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full hover:bg-emerald-200 flex items-center gap-1"
                        onClick={() => handleThesisReview(thesis.ThesisID, thesis, 'accept')}
                      >
                        <Check className="h-4 w-4" />
                        Accept
                      </button>
                      <button
                        className="px-3 py-1 bg-red-100 text-red-700 rounded-full hover:bg-red-200 flex items-center gap-1"
                        onClick={() => handleThesisReview(thesis.ThesisID, thesis, 'reject')}
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
              {pendingProjects.map((project) => (
                  <div key={project.projectID} className="flex items-center justify-between border-b pb-4">
                    <div>
                      <p className="font-medium">{project.Title}</p>
                      <p className="text-sm text-gray-600">Students: {project.MemberName}</p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 flex items-center gap-1"
                        // onClick={() => handleView(thesis.id)}
                      >
                        <a href={project.githubrepo} target="_blank" rel="noopener noreferrer">
                        View
                        </a>
                      </button>
                      <button
                        className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full hover:bg-emerald-200 flex items-center gap-1"
                        onClick={() => handleProjectReview(project.ProjectID, project, 'accept')}
                      >
                        <Check className="h-4 w-4" />
                        Accept
                      </button>
                      <button
                        className="px-3 py-1 bg-red-100 text-red-700 rounded-full hover:bg-red-200 flex items-center gap-1"
                        onClick={() => handleProjectReview(project.ProjectID, project, 'reject')}
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
  
        </div>
      </div>

    </div>
  );
}