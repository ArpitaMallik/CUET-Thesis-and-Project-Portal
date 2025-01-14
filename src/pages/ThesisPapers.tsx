import { Search } from 'lucide-react';
import { ThesisList } from '../components/thesis/ThesisList';
import { ThesisFilters } from '../components/thesis/ThesisFilters';

export function ThesisPapers() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Thesis Papers</h1>
        <p className="mt-2 text-gray-600">Browse and search through all thesis papers</p>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <ThesisFilters />
        <div className="flex-1">
          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search thesis papers..."
                className="input pl-10"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>
          <ThesisList />
        </div>
      </div>
    </div>
  );
}