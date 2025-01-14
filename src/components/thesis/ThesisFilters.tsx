export function ThesisFilters() {
  return (
    <div className="w-full md:w-64 bg-white p-6 rounded-lg shadow-md h-fit">
      <h2 className="font-semibold mb-4">Filters</h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Year
          </label>
          <select className="input">
            <option value="">All Years</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Supervisor
          </label>
          <select className="input">
            <option value="">All Supervisors</option>
            <option value="1">Dr. Robert Wilson</option>
            <option value="2">Dr. Sarah Brown</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Topic
          </label>
          <select className="input">
            <option value="">All Topics</option>
            <option value="ai">Artificial Intelligence</option>
            <option value="security">Security</option>
            <option value="networks">Networks</option>
          </select>
        </div>
      </div>
    </div>
  );
}