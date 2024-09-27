import React, { useState, useEffect } from 'react';

const InterviewManagement = () => {
  const [interviews, setInterviews] = useState([]);
  const [students, setStudents] = useState([]);
  const [newInterview, setNewInterview] = useState({ studentId: '', date: '', format: 'in-person' });

  // Sample data to simulate API responses
  const sampleStudents = [
    { _id: '1', name: 'Alice Smith' },
    { _id: '2', name: 'Bob Johnson' },
    { _id: '3', name: 'Charlie Brown' },
  ];

  const sampleInterviews = [
    { _id: '1', student: { name: 'Alice Smith' }, date: '2024-09-25T10:00:00', format: 'in-person' },
    { _id: '2', student: { name: 'Bob Johnson' }, date: '2024-09-26T11:00:00', format: 'virtual' },
  ];

  useEffect(() => {
    const fetchInterviews = async () => {
      setInterviews(sampleInterviews);
    };

    const fetchStudents = async () => {
      setStudents(sampleStudents);
    };

    fetchInterviews();
    fetchStudents();
  }, []);

  const scheduleInterview = () => {
    const selectedStudent = students.find((student) => student._id === newInterview.studentId);
    if (!selectedStudent) return; // Early return if no student is found

    const newScheduledInterview = {
      _id: (interviews.length + 1).toString(),
      student: selectedStudent,
      date: newInterview.date,
      format: newInterview.format,
    };

    setInterviews([...interviews, newScheduledInterview]);
    setNewInterview({ studentId: '', date: '', format: 'in-person' });
  };

  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-md mt-16">
      <h2 className="text-3xl font-bold mb-6">Manage Interviews</h2>
      <div className="bg-white p-4 rounded-md shadow">
        <h3 className="text-xl font-semibold mb-4">Schedule New Interview</h3>
        <select
          value={newInterview.studentId}
          onChange={(e) => setNewInterview({ ...newInterview, studentId: e.target.value })}
          className="block w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring focus:ring-blue-500"
        >
          <option value="">Select Student</option>
          {students.map((student) => (
            <option key={student._id} value={student._id}>{student.name}</option>
          ))}
        </select>
        <input
          type="datetime-local"
          value={newInterview.date}
          onChange={(e) => setNewInterview({ ...newInterview, date: e.target.value })}
          className="block w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring focus:ring-blue-500"
        />
        <select
          value={newInterview.format}
          onChange={(e) => setNewInterview({ ...newInterview, format: e.target.value })}
          className="block w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring focus:ring-blue-500"
        >
          <option value="in-person">In-Person</option>
          <option value="virtual">Virtual</option>
        </select>
        <button
          onClick={scheduleInterview}
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition duration-200"
        >
          Schedule Interview
        </button>
      </div>

      <h3 className="text-xl font-bold mt-8 mb-4">Scheduled Interviews</h3>
      <ul className="space-y-4">
        {interviews.map((interview) => (
          <li key={interview._id} className="bg-white p-4 shadow rounded-md">
            <p className="font-medium">Student: {interview.student.name}</p>
            <p>Date: {new Date(interview.date).toLocaleString()}</p>
            <p>Format: <span className={`font-semibold ${interview.format === 'virtual' ? 'text-blue-500' : 'text-green-500'}`}>{interview.format}</span></p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InterviewManagement;
