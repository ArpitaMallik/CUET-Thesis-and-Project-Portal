import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { Github, ExternalLink, ThumbsUp, ThumbsDown } from 'lucide-react';
import { db } from '../firebase'; // Ensure the correct path to your firebase configuration

type Project = {
  id: string;
  title: string;
  courseName: string;
  courseTeacher: string;
  teamMembers: string;
  githubLink: string;
  keywords: string;
  helpful: number;
  notHelpful: number;
};

export function ProjectList() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, 'Projects'));
        console.log(querySnapshot.docs);
        const projectsData: Project[] = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Project[];
        setProjects(projectsData);
      } catch (error) {
        console.error('Error fetching projects: ', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
  </div>
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
      </div>
    );
  }

  return (
    <div className="flex-1 space-y-6">
      {projects.map((project) => (
        <div key={project.id} className="projects bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
          
          <div className="mt-4 space-y-2">
            <p className="text-sm text-gray-600">
              <span className="font-medium">Course:</span> {project.courseName}
            </p>
            <p className="students text-sm text-gray-600">
              <span className="font-medium">Students:</span> {project.teamMembers}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Course Teacher:</span> {project.courseTeacher}
            </p>
          </div>

          <div className="mt-4 flex items-center gap-6">
            <div className="flex items-center gap-2">
              <button className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-100 text-emerald-800 text-sm font-medium rounded-full hover:bg-emerald-200">
                <ThumbsUp className="h-4 w-4" />
                {project.helpful}
              </button>
              <button className="inline-flex items-center gap-1 px-3 py-1 bg-red-100 text-red-800 text-sm font-medium rounded-full hover:bg-red-200">
                <ThumbsDown className="h-4 w-4" />
                {project.notHelpful}
              </button>
            </div>
            <div className="github flex gap-4">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-gray-600 hover:text-gray-900"
              >
                <Github className="h-4 w-4" />
                <span>View Code</span>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}