export default function Companies() {
  const companies = [
    {
      name: "Google",
      industry: "Technology",
      jobs: 24,
    },
    {
      name: "Amazon",
      industry: "E-commerce",
      jobs: 18,
    },
    {
      name: "Microsoft",
      industry: "Software",
      jobs: 30,
    },
    {
      name: "Netflix",
      industry: "Entertainment",
      jobs: 12,
    },
  ];

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold">Companies</h1>

        <input
          type="text"
          placeholder="Search companies..."
          className="border px-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {companies.map((company, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-lg transition cursor-pointer"
          >
            <div className="w-12 h-12 bg-blue-100 text-blue-600 flex items-center justify-center rounded-lg font-bold text-lg">
              {company.name[0]}
            </div>

            <h2 className="mt-4 text-lg font-semibold">{company.name}</h2>
            <p className="text-gray-500 text-sm">{company.industry}</p>

            <div className="mt-4 text-sm text-gray-600">
              {company.jobs} open positions
            </div>

            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
              View Jobs
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}