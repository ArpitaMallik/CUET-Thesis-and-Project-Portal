import { Github, ExternalLink, ThumbsUp, ThumbsDown } from 'lucide-react';

const mockProjects = [
  {
    id: 1,
    title: "CUET Research and Project Portal",
    description: "A platform showcasing undergraduate thesis projects, enabling easy access and discovery.",
    course: "CSE-246: Software Development",
    students: ["Ratnajit Dhar", "Faozia Fariha", "Arpita Mallik"],
    courseTeacher: "Sharmistha Chanda Tista",
    tags: ["Web Development", "WordPress", "PHP"],
    github: "https://github.com/example/research-portal",
    demo: "https://example.com/research-portal-demo",
    feedback: {
      helpful: 10,
      notHelpful: 0
    }
  },
  {
    id: 2,
    title: "TuitionEase",
    description: "TuitionEase: A Smart Platform for Connecting Tutors and Learners",
    course: "CSE-326: Project",
    students: ["Arpita Mallik","Faozia Fariha", "Ratnajit Dhar"],
    courseTeacher: "Md. Rashadur Rahman",
    tags: ["Web Development", "HTML", "CSS", "Javascript"],
    github: "https://github.com/example/traffic-management",
    demo: "https://example.com/demo",
    feedback: {
      helpful: 12,
      notHelpful: 3
    }
  },
  {
    id: 3,
    title: "E-Learning Platform",
    description: "A web-based learning management system with real-time collaboration features.",
    course: "CSE-246: Software Development",
    students: ["Sarah Ahmed","Zara Khan"],
    courseTeacher: "Sharmistha Chanda Tista",
    tags: ["Web Development", "React", "Node.js"],
    github: "https://github.com/example/elearning",
    demo: "https://example.com/demo",
    feedback: {
      helpful: 8,
      notHelpful: 1
    }
  },
  {
    id: 4,
    title: "Smart Home Automation System",
    description: "An IoT-based platform for managing and automating home appliances remotely.",
    course: "CSE-246: Software Development",
    students: ["Rashid Ahmed", "Tanisha Islam"],
    courseTeacher: "Md. Atiqul Islam Rizvi",
    tags: ["IoT", "Arduino", "Home Automation"],
    github: "https://github.com/example/home-automation",
    demo: "https://example.com/home-automation-demo",
    feedback: {
      helpful: 10,
      notHelpful: 2
    }
  },
  {
    id: 5,
    title: "Fitness Tracker Mobile App",
    description: "A mobile application for tracking fitness goals, workouts, and nutrition intake.",
    course: "CSE-246: Software Development",
    students: ["Ayesha Karim", "Fahim Rahman"],
    courseTeacher: "Ashim Dey",
    tags: ["Mobile App", "React Native", "HealthTech"],
    github: "https://github.com/example/fitness-tracker",
    demo: "https://example.com/fitness-tracker-demo",
    feedback: {
      helpful: 12,
      notHelpful: 1
    }
  },
  {
    id: 6,
    title: "Online Food Delivery System",
    description: "A web-based platform connecting restaurants with customers for seamless food delivery.",
    course: "CSE-246: Software Development",
    students: ["Nayeem Hossain", "Rima Akhter"],
    courseTeacher: "Md. Shafiul Alam Forhad",
    tags: ["Web Development", "Django", "eCommerce"],
    github: "https://github.com/example/food-delivery",
    demo: "https://example.com/food-delivery-demo",
    feedback: {
      helpful: 15,
      notHelpful: 3
    }
  },
  {
    id: 7,
    title: "Blockchain-Based Voting System",
    description: "A secure and transparent voting platform leveraging blockchain technology.",
    course: "CSE-246: Software Development",
    students: ["Farhan Ali", "Mehzabin Anwar"],
    courseTeacher: "Md. Mynul Hasan",
    tags: ["Blockchain", "Decentralized App", "Security"],
    github: "https://github.com/example/blockchain-voting",
    demo: "https://example.com/blockchain-voting-demo",
    feedback: {
      helpful: 20,
      notHelpful: 0
    }
  }
];

export function ProjectList() {
  return (
    <div className="flex-1 space-y-6">
      {mockProjects.map((project) => (
        <div key={project.id} className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
          <p className="mt-2 text-gray-600">{project.description}</p>
          
          <div className="mt-4 space-y-2">
            <p className="text-sm text-gray-600">
              <span className="font-medium">Course:</span> {project.course}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Students:</span> {project.students.join(", ")}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Course Teacher:</span> {project.courseTeacher}
            </p>

          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs font-medium bg-emerald-100 text-emerald-800 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-4 flex items-center gap-6">
            <div className="flex items-center gap-2">
              <button className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-100 text-emerald-800 text-sm font-medium rounded-full hover:bg-emerald-200">
                <ThumbsUp className="h-4 w-4" />
                {project.feedback.helpful}
              </button>
              <button className="inline-flex items-center gap-1 px-3 py-1 bg-red-100 text-red-800 text-sm font-medium rounded-full hover:bg-red-200">
                <ThumbsDown className="h-4 w-4" />
                {project.feedback.notHelpful}
              </button>
            </div>
            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-gray-600 hover:text-gray-900"
              >
                <Github className="h-4 w-4" />
                <span>View Code</span>
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-gray-600 hover:text-gray-900"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Live Demo</span>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}