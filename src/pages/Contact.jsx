export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-2xl">
        <h1 className="text-3xl font-semibold mb-2">Contact Us</h1>
        <p className="text-gray-500 mb-6">
          Have questions? We'd love to hear from you.
        </p>

        <form className="grid gap-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <input
            type="email"
            placeholder="Email Address"
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <select className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>General Inquiry</option>
            <option>Job Support</option>
            <option>Technical Issue</option>
          </select>

          <textarea
            placeholder="Your Message"
            rows="5"
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button className="bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}