import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useUser } from '../../context/userContext';

const JobPostingForm = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [skillsRequired, setSkillsRequired] = useState('');
  const [experienceRequired, setExperienceRequired] = useState('');
  const [salary, setSalary] = useState('');
  const [applicationDeadline, setApplicationDeadline] = useState('');
  const [errors, setErrors] = useState({});

  const { user } = useUser();
  const [token, setToken] = useState('');

  useEffect(() => {
    // Retrieve the token from local storage when the component mounts
    const storedToken = localStorage.getItem('jwtToken');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formIsValid = true;
    const newErrors = {};

    // Basic validation
    if (!jobTitle) {
      newErrors.jobTitle = 'Job title is required';
      formIsValid = false;
    }
    if (!jobDescription) {
      newErrors.jobDescription = 'Job description is required';
      formIsValid = false;
    }
    if (!skillsRequired) {
      newErrors.skillsRequired = 'Skills required is required';
      formIsValid = false;
    }
    if (!applicationDeadline) {
      newErrors.applicationDeadline = 'Application deadline is required';
      formIsValid = false;
    }

    setErrors(newErrors);

    if (formIsValid) {
      try {
        // Include the JWT token in the request headers
        // const config = {
          // headers: { Authorization: `Bearer ${token}` }
        // };

        const response = await axios.post('https://placement-portal-m4o2.onrender.com/api/jobs', {
          jobTitle,
          jobDescription,
          skillsRequired: skillsRequired.split(','), // Convert string to array
          experienceRequired,
          salary,
          applicationDeadline,
          // Ensure this is from context
        });
console.log(jobTitle)
        alert('Job posted successfully!');
        // Reset form fields
        setJobTitle('');
        setJobDescription('');
        setSkillsRequired('');
        setExperienceRequired('');
        setSalary('');
        setApplicationDeadline('');
      } catch (error) {
        console.error('Error posting job', error);
        if (error.response && error.response.status === 401) {
          alert('Unauthorized. Please login again.');
          // Optionally, redirect to login page or refresh token
        } else {
          alert('Failed to post job.');
        }
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded-lg mt-12">
      <h2 className="text-2xl font-semibold mb-6">Post a New Job</h2>
      
      <div className="mb-4">
        <input
          type="text"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          placeholder="Job Title"
          className={`border border-gray-300 p-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.jobTitle ? 'border-red-500' : ''}`}
          required
        />
        {errors.jobTitle && <p className="text-red-500 text-sm">{errors.jobTitle}</p>}
      </div>
      
      <div className="mb-4">
        <textarea
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          placeholder="Job Description"
          className={`border border-gray-300 p-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.jobDescription ? 'border-red-500' : ''}`}
          required
        />
        {errors.jobDescription && <p className="text-red-500 text-sm">{errors.jobDescription}</p>}
      </div>
      
      <div className="mb-4">
        <input
          type="text"
          value={skillsRequired}
          onChange={(e) => setSkillsRequired(e.target.value)}
          placeholder="Skills Required (comma separated)"
          className={`border border-gray-300 p-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.skillsRequired ? 'border-red-500' : ''}`}
          required
        />
        {errors.skillsRequired && <p className="text-red-500 text-sm">{errors.skillsRequired}</p>}
      </div>
      
      <div className="mb-4">
        <input
          type="number"
          value={experienceRequired}
          onChange={(e) => setExperienceRequired(e.target.value)}
          placeholder="Experience Required (in years)"
          className="border border-gray-300 p-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      <div className="mb-4">
        <input
          type="number"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          placeholder="Salary"
          className="border border-gray-300 p-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      <div className="mb-4">
        <input
          type="date"
          value={applicationDeadline}
          onChange={(e) => setApplicationDeadline(e.target.value)}
          className={`border border-gray-300 p-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.applicationDeadline ? 'border-red-500' : ''}`}
          required
        />
        {errors.applicationDeadline && <p className="text-red-500 text-sm">{errors.applicationDeadline}</p>}
      </div>
      
      <button type="submit" className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-all">Post Job</button>
    </form>
  );
};

export default JobPostingForm;
