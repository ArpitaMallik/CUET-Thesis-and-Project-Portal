import { BookOpen, GraduationCap, Home, Layout, User, Users } from 'lucide-react';
import { Link } from '@tanstack/react-router';

const navItems = [
  { name: 'Dashboard', icon: Home, path: '/' },
  { name: 'Thesis Papers', icon: BookOpen, path: '/thesis' },
  { name: 'Academic Projects', icon: Layout, path: '/projects' },
  { name: 'Supervisor Information', icon: Users, path: '/supervisors' },
  { name: 'Profile', icon: User, path: '/profile' },
];

export function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <GraduationCap className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">CUET Thesis & Projects Portal</span>
          </div>
          <div className="flex space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-100"
                activeProps={{ className: 'text-indigo-600 bg-indigo-50' }}
              >
                <item.icon className="h-4 w-4 mr-1" />
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}