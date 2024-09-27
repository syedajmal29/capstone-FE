import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useUser } from '../../context/userContext'; // Adjust the import path as needed

const DashboardLayout = ({ type }) => {
  const { logout } = useUser(); // Get the logout function from context

  // Sidebar links based on the dashboard type
  const sidebarLinks = {
    student: [
      { name: 'Dashboard', path: '/student/dashboard' },
      { name: 'Profile', path: '/student/profile' },
      { name: 'Applications', path: '/student/applications' },
      { name: 'Interviews', path: '/student/interviews' },
      { name: 'Apply for Job', path: '/student/apply' }
    ],
    admin: [
      { name: 'Dashboard', path: '/admin/dashboard' },
      { name: 'Manage Placement Drives', path: '/admin/placement-drives' },
      { name: 'Recruitment Status', path: '/admin/recruitment-status' },
      { name: 'Placement Drive Form', path: '/admin/placement-drives/new' },
      { name: 'Interview Scheduler', path: '/admin/interview-scheduler' },
      { name: 'Placement Drive Details', path: '/admin/placement-drives/:id' },
      { name: 'Interview List', path: '/admin/interview-list' },
      { name: 'Notifications', path: '/admin/notifications' },
      { name: 'Reports', path: '/admin/reports' },
      { name: 'Charts', path: '/admin/charts' }
    ],
    company: [
      { name: 'Dashboard', path: '/company/dashboard' },
      { name: 'Job Postings', path: '/company/job-postings' },
      { name: 'Applications', path: '/company/applications' },
      { name: 'Interviews', path: '/company/interviews' },
      { name: 'Job Posting Form', path: '/company/job-postings/new' }
    ]
  };

  // Function to handle logout
  const handleLogout = () => {
    logout();
    // Optionally redirect the user to the login page
    window.location.href = '/login'; // Adjust the path based on your routes
  };

  return (
    <div className="flex min-h-screen mt-12">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-7">
            {`${type.charAt(0).toUpperCase() + type.slice(1)} Dashboard`}
          </h2>
          <nav className="space-y-2">
            {sidebarLinks[type].map((link) => (
              <Link key={link.path} to={link.path} className="block p-2 rounded hover:bg-blue-100 text-gray-700">
                {link.name}
              </Link>
            ))}
            <button 
              onClick={handleLogout} 
              className="block p-2 rounded hover:bg-red-100 text-red-700 w-full text-left"
            >
              Logout
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow p-6 max-w-6xl mx-auto">
        {/* Render the current page's content */}
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
