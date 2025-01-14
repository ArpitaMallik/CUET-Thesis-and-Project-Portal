export function ProjectFilters() {
  return (
    <div className="w-full md:w-64 bg-white p-6 rounded-lg shadow-md h-fit">
      <h2 className="font-semibold mb-4">Filters</h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Course
          </label>
          <select className="input">
            <option value="">All Courses</option>
            <option value="cse4000">CSE-4000: Project</option>
            <option value="cse3000">CSE-3000: Software Development</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Supervisor
          </label>
          <select className="input">
            <option value="">All Supervisors</option>
            <option value="1">Dr. Robert Wilson</option>
            <option value="2">Dr. Emily Chen</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Technology
          </label>
          <select className="input">
            <option value="">All Technologies</option>
            <option value="web">Web Development</option>
            <option value="iot">IoT</option>
            <option value="ai">AI/ML</option>
          </select>
        </div>
      </div>
    </div>
  );
}