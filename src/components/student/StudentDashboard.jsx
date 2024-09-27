import React, { useState, useEffect, useContext } from "react";
import { Link , useNavigate } from "react-router-dom";
import ApplicationStatus from "./ApplicationStatus";
import InterviewSchedule from "./InterviewSchedule";
import { useUser } from "../../context/userContext"; // Import the UserContext

const StudentDashboard = () => {
  const [applications, setApplications] = useState([]);
  const [interviews, setInterviews] = useState([]);
  const [jobs, setJobs] = useState([]); // Add jobs state
 const {applydetails,setapplydetails}= useUser();
  const { user } = useUser(); // Retrieve user data from context
const navigate = useNavigate();
  useEffect(() => {
    // Fetch applications, interviews, and job postings from the backend
    fetchApplications();
    fetchInterviews();
    fetchJobPostings();
  }, []);

  const applydetailsfun = (value)=>{
  
 setapplydetails(value)
 navigate("/student/apply")

  }

  const fetchJobPostings = async () => {
    try {
      const response = await fetch("https://placement-portal-m4o2.onrender.com/api/jobslist"); // Adjust the URL accordingly
      const data = await response.json();
      setJobs(data); // Update the jobs state with fetched data
    } catch (error) {
      console.error("Error fetching job postings:", error);
    }
  };

  const fetchApplications = () => {
    const sampleApplications = [
      { id: "1", jobTitle: "Frontend Developer", status: "Applied" },
      { id: "2", jobTitle: "Backend Developer", status: "Placed" },
      { id: "3", jobTitle: "Full Stack Developer", status: "Rejected" },
    ];
    setApplications(sampleApplications);
  };

  const fetchInterviews = () => {
    const sampleInterviews = [
      {
        id: "1",
        jobTitle: "Frontend Developer",
        date: "2024-09-25T10:00:00",
        format: "In-Person",
      },
      {
        id: "2",
        jobTitle: "Backend Developer",
        date: "2024-09-26T11:00:00",
        format: "Virtual",
      },
    ];
    setInterviews(sampleInterviews);
  };

  return (
    <div className="flex min-h-screen mt-14 bg-gradient-to-b from-gray-100 to-gray-50">
      <div className="flex-1 p-6 max-w-6xl mx-auto">
        <div className="bg-white shadow-xl rounded-lg p-8 mb-6">
          <h1 className="text-2xl font-extrabold text-gray-900 mb-4">
            Welcome, {user ? user.name : "Student!"}  {/* Display the student's name here */}
          </h1>
          <p className="text-lg text-gray-600">
            Track your application status, manage your interview schedule, and apply for available jobs.
          </p>
        </div>

        <div className="space-y-6">
          {/* Application Status Section */}
          <div
            id="applications"
            className="bg-white shadow-lg rounded-lg p-6 transition duration-300 hover:shadow-2xl hover:scale-105"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              Application Status
            </h2>
            <ApplicationStatus applications={applications} />
          </div>

          {/* Interview Schedule Section */}
          <div
            id="interviews"
            className="bg-white shadow-lg rounded-lg p-6 transition duration-300 hover:shadow-2xl hover:scale-105"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              Interview Schedule
            </h2>
            <InterviewSchedule interviews={interviews} />
          </div>

          {/* Job Postings Section */}
          <div
            id="jobs"
            className="bg-white shadow-lg rounded-lg p-6 transition duration-300 hover:shadow-2xl hover:scale-105"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              Available Job Postings
            </h2>
            <ul>
              {jobs.length > 0 ? (
                jobs.map((job) => (
                  <li key={job._id} className="mb-4">
                    <div className="bg-gray-100 p-4 rounded-lg shadow">
                      <h3 className="text-lg font-semibold">{job.jobTitle}</h3>
                      <p className="text-sm text-gray-600">
                        <strong>Description:</strong> {job.jobDescription || "No description available"}
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Skills Required:</strong> {job.skillsRequired.join(", ")}
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Experience Required:</strong> {job.experienceRequired} years
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Salary:</strong> {job.salary ? `$${job.salary}` : "Not mentioned"}
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Application Deadline:</strong> {new Date(job.applicationDeadline).toLocaleDateString()}
                      </p>
                      <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded" onClick={()=>{applydetailsfun(job)}}>
                        Apply
                      </button>
                    </div>
                  </li>
                ))
              ) : (
                <li>No job postings available at the moment.</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
