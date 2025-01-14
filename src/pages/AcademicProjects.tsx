import { ProjectList } from '../components/projects/ProjectList';
import { ProjectFilters } from '../components/projects/ProjectFilters';

export function AcademicProjects() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Academic Projects</h1>
        <p className="mt-2 text-gray-600">Browse through student course projects</p>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <ProjectFilters />
        <ProjectList />
      </div>
    </div>
  );
}