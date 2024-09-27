import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InterviewSchedule = () => {
  const [interviews, setInterviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInterviews = async () => {
      try {
        const response = await axios.get('https://placement-portal-m4o2.onrender.com/api/student/interviews');
        if (Array.isArray(response.data)) {
          setInterviews(response.data);
        } else {
          console.error('Unexpected data format:', response.data);
          setInterviews([]);
        }
      } catch (error) {
        console.error('Error fetching interviews:', error);
        setError('Failed to fetch interviews');
      } finally {
        setLoading(false);
      }
    };

    fetchInterviews();
  }, []);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-16 mt-16">
      <h2 className="text-2xl font-semibold mb-4 text-center">Interview Schedule</h2>
      <ul>
        {interviews.length === 0 ? (
          <p className="text-center text-gray-500">No interviews scheduled.</p>
        ) : (
          interviews.map(interview => (
            <li key={interview.id} className="border-b py-4 hover:bg-gray-100 transition duration-200">
              <h3 className="font-medium text-lg text-gray-800">{interview.jobTitle}</h3>
              <p className="text-gray-600">Date: {new Date(interview.date).toLocaleDateString()}</p>
              <p className="text-gray-600">Time: {new Date(interview.date).toLocaleTimeString()}</p>
              <p className="text-gray-600">
                Format: 
                <span className={`font-medium ${interview.format === 'Virtual' ? 'text-blue-500' : 'text-gray-500'}`}>
                  {interview.format}
                </span>
              </p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default InterviewSchedule;
