const mockSupervisors = [
  {
    id: 1,
    name: "Dr. Abu Hasnat Mohammad Ashfak Habib",
    designation: "Head & Professor",
    department: "Computer Science & Engineering",
    email: "ashfak@cuet.ac.bd",
    phone: "+88-0317-1492023",
    expertise: ["Machine Learning", "Signal Processing", "Pattern Recognition"],
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    activeTheses: 5,
    completedTheses: 15
  },
  {
    id: 2,
    name: "Dr. Kaushik Deb",
    designation: "Professor",
    department: "Computer Science & Engineering",
    email: "debkaushik99@cuet.ac.bd",
    phone: "+880-1914-745508",
    expertise: ["Computer Vision", "Blockchain"],
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    activeTheses: 3,
    completedTheses: 12
  },
  {
    id: 2,
    name: "Dr. Mohammed Moshiul Hoque",
    designation: "Professor",
    department: "Computer Science & Engineering",
    email: "moshiul_240@cuet.ac.bd",
    phone: "+880-1914-745508",
    expertise: ["Maching Learning", "NLP"],
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    activeTheses: 3,
    completedTheses: 12
  },
  {
    id: 2,
    name: "Prof. Dr. Mohammad Shamsul Arefin",
    designation: "Professor",
    department: "Computer Science & Engineering",
    email: "sarefin@cuet.ac.bd",
    phone: "+880-1716-890204",
    expertise: ["Maching Learning", "NLP"],
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    activeTheses: 3,
    completedTheses: 12
  }
];

export function SupervisorList() {
  return (
    <div className="space-y-6">
      {mockSupervisors.map((supervisor) => (
        <div key={supervisor.id} className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-start gap-4">
            <img
              src={supervisor.image}
              alt={supervisor.name}
              className="w-20 h-20 rounded-full object-cover"
            />
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900">{supervisor.name}</h3>
              <p className="text-gray-600">{supervisor.designation}</p>
              <p className="text-gray-600">{supervisor.department}</p>
              
              <div className="mt-2 space-y-1">
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Email:</span> {supervisor.email}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Contact:</span> {supervisor.phone}
                </p>
              </div>
              
              <div className="mt-3">
                <h4 className="text-sm font-medium text-gray-700">Areas of Expertise:</h4>
                <div className="mt-1 flex flex-wrap gap-2">
                  {supervisor.expertise.map((area) => (
                    <span
                      key={area}
                      className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex gap-6">
                <div>
                  <span className="text-sm text-gray-600">Active Theses</span>
                  <p className="text-lg font-semibold text-gray-900">{supervisor.activeTheses}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-600">Completed Theses</span>
                  <p className="text-lg font-semibold text-gray-900">{supervisor.completedTheses}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}