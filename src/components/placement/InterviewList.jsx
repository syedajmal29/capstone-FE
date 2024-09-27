import React from "react";

// Mock data for interviews
const mockInterviews = [
  { company: "Google", date: "October 17, 2024", status: "Scheduled" },
  { company: "Amazon", date: "October 18, 2024", status: "Completed" },
  { company: "Microsoft", date: "October 19, 2024", status: "Scheduled" }
];

const InterviewList = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Interviews List</h1>
      <ul>
        {mockInterviews.map((interview, index) => (
          <li key={index} className="p-2 border-b">
            <p><strong>Company:</strong> {interview.company}</p>
            <p><strong>Date:</strong> {interview.date}</p>
            <p><strong>Status:</strong> {interview.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InterviewList;
