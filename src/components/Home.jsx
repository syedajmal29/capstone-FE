import React from 'react';

function Home() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen text-white mt-16" >
      {/* Welcome Section */}
      <header className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Welcome to the College Placement Management System</h1>
        <p className="text-lg md:text-xl">Streamlining your journey to success with ease</p>
      </header>

      {/* Features Section */}
      <section className="py-16 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Feature 1 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-blue-50">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">For Students</h3>
              <p className="text-gray-600 mb-4">Apply for jobs, schedule interviews, and track your application status in real-time.</p>
              <button className="text-blue-500 hover:text-blue-600 font-semibold">Learn More</button>
            </div>
            {/* Feature 2 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-purple-50">
              <h3 className="text-xl font-semibold mb-4 text-purple-600">For Companies</h3>
              <p className="text-gray-600 mb-4">Post job openings, review applications, and manage interview schedules with ease.</p>
              <button className="text-purple-500 hover:text-purple-600 font-semibold">Learn More</button>
            </div>
            {/* Feature 3 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-green-50">
              <h3 className="text-xl font-semibold mb-4 text-green-600">For Admins</h3>
              <p className="text-gray-600 mb-4">Organize placement drives, track recruitment, and generate detailed reports.</p>
              <button className="text-green-500 hover:text-green-600 font-semibold">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Upcoming Placement Drives</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {/* Event 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4">Drive for ABC Corp</h3>
              <p className="text-gray-700 mb-2">Date: October 15, 2024</p>
              <p className="text-gray-700">Open to all final year students. Apply before the deadline!</p>
            </div>
            {/* Event 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4">Drive for XYZ Tech</h3>
              <p className="text-gray-700 mb-2">Date: November 5, 2024</p>
              <p className="text-gray-700">Exciting opportunities in software development and data science.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 bg-purple-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-lg mb-8">Join today and take the next step towards your dream job!</p>
        <div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full font-semibold mr-4">Register Now</button>
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-6 rounded-full font-semibold">Log In</button>
        </div>
      </section>

      {/* Footer Section */}
    </div>
  );
}

export default Home;
