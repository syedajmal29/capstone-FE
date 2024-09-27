import React from 'react';

const ApplicationStatus = ({ applications = [] }) => { // Default to an empty array
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-16">
      <h2 className="text-2xl font-semibold mb-4 text-center">Application Status</h2>
      <ul>
        {applications.length === 0 ? (
          <p className="text-center text-gray-500">No applications found.</p>
        ) : (
          applications.map(app => (
            <li key={app.id} className="border-b py-4 hover:bg-gray-100 transition duration-200">
              <h3 className="font-medium text-lg text-gray-800">{app.jobTitle}</h3>
              <div className="flex flex-col gap-2 mt-2">
                <p className="font-medium">Status:</p>
                <div className="flex gap-4">
                  <p className={`font-medium ${app.status === 'Applied' ? 'text-blue-500' : 'text-gray-400'}`}>Applied</p>
                  <p className={`font-medium ${app.status === 'Placed' ? 'text-green-500' : 'text-gray-400'}`}>Placed</p>
                  <p className={`font-medium ${app.status === 'Waiting' ? 'text-yellow-500' : 'text-gray-400'}`}>Waiting</p>
                  <p className={`font-medium ${app.status === 'Rejected' ? 'text-red-500' : 'text-gray-400'}`}>Rejected</p>
                </div>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default ApplicationStatus;
