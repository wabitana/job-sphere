export default function Applications() {
  const applications = [
    {
      company: "Google",
      role: "Frontend Developer",
      status: "Pending",
      date: "Mar 12, 2026",
    },
    {
      company: "Amazon",
      role: "Backend Engineer",
      status: "Interview",
      date: "Mar 10, 2026",
    },
    {
      company: "Microsoft",
      role: "Full Stack Developer",
      status: "Rejected",
      date: "Mar 5, 2026",
    },
  ];

  const statusColors = {
    Pending: "bg-yellow-100 text-yellow-700",
    Interview: "bg-blue-100 text-blue-700",
    Rejected: "bg-red-100 text-red-700",
  };

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-semibold mb-6">My Applications</h1>

      <div className="space-y-4">
        {applications.map((app, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-xl shadow-sm border hover:shadow-md transition"
          >
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold">{app.role}</h2>
                <p className="text-gray-500 text-sm">{app.company}</p>
              </div>

              <span
                className={`px-3 py-1 text-xs rounded-full font-medium ${statusColors[app.status]}`}
              >
                {app.status}
              </span>
            </div>

            <div className="mt-3 text-sm text-gray-400">
              Applied on {app.date}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}