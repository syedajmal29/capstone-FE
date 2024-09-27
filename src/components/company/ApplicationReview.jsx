import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApplicationReview = () => {
  const [applications, setApplications] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch applications for a job posting
    const fetchApplications = async () => {
      try {
        const response = await axios.get('https://placement-portal-m4o2.onrender.com/api/applications'); // Replace with your API route
        setApplications(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error('Error fetching applications', error);
        setError('Failed to load applications.');
      }
    };

    fetchApplications();
  }, []);

  const updateStatus = async (applicationId, status) => {
    try {
      await axios.patch(`https://placement-portal-m4o2.onrender.com/api/applications/${applicationId}`, { status });
      setApplications((prev) =>
        prev.map((app) => (app._id === applicationId ? { ...app, status } : app))
      );
    } catch (error) {
      console.error('Error updating application status', error);
      setError('Failed to update application status.');
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Review Applications</h2>
      {error && <p className="text-red-500">{error}</p>}
      {applications.length === 0 ? (
        <p>No applications to review.</p>
      ) : (
        <ul className="space-y-4">
          {applications.map((app) => (
            <li key={app._id} className="bg-white p-4 shadow rounded">
              <h3 className="text-xl font-semibold">{app.student.name}</h3>
              <p>
                Resume: <a href={app.resumeUrl} className="text-blue-500 hover:underline">Download</a>
              </p>
              <p>Status: {app.status}</p>
              <div className="mt-2">
                <button
                  onClick={() => updateStatus(app._id, 'shortlisted')}
                  className="text-green-500 hover:underline mr-4"
                >
                  Shortlist
                </button>
                <button
                  onClick={() => updateStatus(app._id, 'rejected')}
                  className="text-red-500 hover:underline"
                >
                  Reject
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ApplicationReview;
