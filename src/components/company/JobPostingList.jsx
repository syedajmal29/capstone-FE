// src/components/company/JobPostingList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Commented out since we're using sample data

const JobPostingList = () => {
  const [jobPostings, setJobPostings] = useState([]);

  useEffect(() => {
    const fetchJobPostings = async () => {
      // Simulated API call with sample data
    
    
    
    
    
    
    
    
    
    
      
      // Uncomment the following lines if you implement the API later
      
      try {
        const response = await axios.get('https://placement-portal-m4o2.onrender.com/api/jobslist'); // Adjust to your API
        console.log(response)
        setJobPostings(response.data); // Ensure this is the correct data structure
      } catch (error) {
        console.error('Error fetching job postings:', error);
      }
      
    };

    fetchJobPostings();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 mt-16">Job Postings</h1>
    {
  jobPostings.map((job, index) => (
    <div key={index} className="border p-4 mb-4 rounded">
      <h2 className="text-xl">{job.jobTitle}</h2>
      <p>{job.jobDescription}</p>
      <p>Salary: {job.salary}</p>
      <p>Experience Required: {job.experienceRequired} years</p>
      
      <div>
        {/* Check if skillsRequired is an array and map over it */}
        {job.skillsRequired && job.skillsRequired.map((skill, skillIndex) => (
          <div key={skillIndex}>
            <p>{skill}</p>
          </div>
        ))}
      </div>
    </div>
  ))
}

    {
  jobPostings.map((job, index) => (
    <div key={index} className="border p-4 mb-4 rounded">
      <h2 className="text-xl">{job.jobTitle}</h2>
      <p>{job.jobDescription}</p>
      <p>Salary: {job.salary}</p>
      <p>Experience Required: {job.experienceRequired} years</p>
      
      <div>
        {/* Check if skillsRequired is an array and map over it */}
        {job.skillsRequired && job.skillsRequired.map((skill, skillIndex) => (
          <div key={skillIndex}>
            <p>{skill}</p>
          </div>
        ))}
      </div>
    </div>
  ))
}

    {
  jobPostings.map((job, index) => (
    <div key={index} className="border p-4 mb-4 rounded">
      <h2 className="text-xl">{job.jobTitle}</h2>
      <p>{job.jobDescription}</p>
      <p>Salary: {job.salary}</p>
      <p>Experience Required: {job.experienceRequired} years</p>
      
      <div>
        {/* Check if skillsRequired is an array and map over it */}
        {job.skillsRequired && job.skillsRequired.map((skill, skillIndex) => (
          <div key={skillIndex}>
            <p>{skill}</p>
          </div>
        ))}
      </div>
    </div>
  ))
}

    {
  jobPostings.map((job, index) => (
    <div key={index} className="border p-4 mb-4 rounded">
      <h2 className="text-xl">{job.jobTitle}</h2>
      <p>{job.jobDescription}</p>
      <p>Salary: {job.salary}</p>
      <p>Experience Required: {job.experienceRequired} years</p>
      
      <div>
        {/* Check if skillsRequired is an array and map over it */}
        {job.skillsRequired && job.skillsRequired.map((skill, skillIndex) => (
          <div key={skillIndex}>
            <p>{skill}</p>
          </div>
        ))}
      </div>
    </div>
  ))
}

    {
  jobPostings.map((job, index) => (
    <div key={index} className="border p-4 mb-4 rounded">
      <h2 className="text-xl">{job.jobTitle}</h2>
      <p>{job.jobDescription}</p>
      <p>Salary: {job.salary}</p>
      <p>Experience Required: {job.experienceRequired} years</p>
      
      <div>
        {/* Check if skillsRequired is an array and map over it */}
        {job.skillsRequired && job.skillsRequired.map((skill, skillIndex) => (
          <div key={skillIndex}>
            <p>{skill}</p>
          </div>
        ))}
      </div>
    </div>
  ))
}

    {
  jobPostings.map((job, index) => (
    <div key={index} className="border p-4 mb-4 rounded">
      <h2 className="text-xl">{job.jobTitle}</h2>
      <p>{job.jobDescription}</p>
      <p>Salary: {job.salary}</p>
      <p>Experience Required: {job.experienceRequired} years</p>
      
      <div>
        {/* Check if skillsRequired is an array and map over it */}
        {job.skillsRequired && job.skillsRequired.map((skill, skillIndex) => (
          <div key={skillIndex}>
            <p>{skill}</p>
          </div>
        ))}
      </div>
    </div>
  ))
}

    {
  jobPostings.map((job, index) => (
    <div key={index} className="border p-4 mb-4 rounded">
      <h2 className="text-xl">{job.jobTitle}</h2>
      <p>{job.jobDescription}</p>
      <p>Salary: {job.salary}</p>
      <p>Experience Required: {job.experienceRequired} years</p>
      
      <div>
        {/* Check if skillsRequired is an array and map over it */}
        {job.skillsRequired && job.skillsRequired.map((skill, skillIndex) => (
          <div key={skillIndex}>
            <p>{skill}</p>
          </div>
        ))}
      </div>
    </div>
  ))
}

    {
  jobPostings.map((job, index) => (
    <div key={index} className="border p-4 mb-4 rounded">
      <h2 className="text-xl">{job.jobTitle}</h2>
      <p>{job.jobDescription}</p>
      <p>Salary: {job.salary}</p>
      <p>Experience Required: {job.experienceRequired} years</p>
      
      <div>
        {/* Check if skillsRequired is an array and map over it */}
        {job.skillsRequired && job.skillsRequired.map((skill, skillIndex) => (
          <div key={skillIndex}>
            <p>{skill}</p>
          </div>
        ))}
      </div>
    </div>
  ))
}

    {
  jobPostings.map((job, index) => (
    <div key={index} className="border p-4 mb-4 rounded">
      <h2 className="text-xl">{job.jobTitle}</h2>
      <p>{job.jobDescription}</p>
      <p>Salary: {job.salary}</p>
      <p>Experience Required: {job.experienceRequired} years</p>
      
      <div>
        {/* Check if skillsRequired is an array and map over it */}
        {job.skillsRequired && job.skillsRequired.map((skill, skillIndex) => (
          <div key={skillIndex}>
            <p>{skill}</p>
          </div>
        ))}
      </div>
    </div>
  ))
}

    {
  jobPostings.map((job, index) => (
    <div key={index} className="border p-4 mb-4 rounded">
      <h2 className="text-xl">{job.jobTitle}</h2>
      <p>{job.jobDescription}</p>
      <p>Salary: {job.salary}</p>
      <p>Experience Required: {job.experienceRequired} years</p>
      
      <div>
        {/* Check if skillsRequired is an array and map over it */}
        {job.skillsRequired && job.skillsRequired.map((skill, skillIndex) => (
          <div key={skillIndex}>
            <p>{skill}</p>
          </div>
        ))}
      </div>
    </div>
  ))
}

    {
  jobPostings.map((job, index) => (
    <div key={index} className="border p-4 mb-4 rounded">
      <h2 className="text-xl">{job.jobTitle}</h2>
      <p>{job.jobDescription}</p>
      <p>Salary: {job.salary}</p>
      <p>Experience Required: {job.experienceRequired} years</p>
      
      <div>
        {/* Check if skillsRequired is an array and map over it */}
        {job.skillsRequired && job.skillsRequired.map((skill, skillIndex) => (
          <div key={skillIndex}>
            <p>{skill}</p>
          </div>
        ))}
      </div>
    </div>
  ))
}

    {
  jobPostings.map((job, index) => (
    <div key={index} className="border p-4 mb-4 rounded">
      <h2 className="text-xl">{job.jobTitle}</h2>
      <p>{job.jobDescription}</p>
      <p>Salary: {job.salary}</p>
      <p>Experience Required: {job.experienceRequired} years</p>
      
      <div>
        {/* Check if skillsRequired is an array and map over it */}
        {job.skillsRequired && job.skillsRequired.map((skill, skillIndex) => (
          <div key={skillIndex}>
            <p>{skill}</p>
          </div>
        ))}
      </div>
    </div>
  ))
}

    {
  jobPostings.map((job, index) => (
    <div key={index} className="border p-4 mb-4 rounded">
      <h2 className="text-xl">{job.jobTitle}</h2>
      <p>{job.jobDescription}</p>
      <p>Salary: {job.salary}</p>
      <p>Experience Required: {job.experienceRequired} years</p>
      
      <div>
        {/* Check if skillsRequired is an array and map over it */}
        {job.skillsRequired && job.skillsRequired.map((skill, skillIndex) => (
          <div key={skillIndex}>
            <p>{skill}</p>
          </div>
        ))}
      </div>
    </div>
  ))
}

    {
  jobPostings.map((job, index) => (
    <div key={index} className="border p-4 mb-4 rounded">
      <h2 className="text-xl">{job.jobTitle}</h2>
      <p>{job.jobDescription}</p>
      <p>Salary: {job.salary}</p>
      <p>Experience Required: {job.experienceRequired} years</p>
      
      <div>
        {/* Check if skillsRequired is an array and map over it */}
        {job.skillsRequired && job.skillsRequired.map((skill, skillIndex) => (
          <div key={skillIndex}>
            <p>{skill}</p>
          </div>
        ))}
      </div>
    </div>
  ))
}

    {
  jobPostings.map((job, index) => (
    <div key={index} className="border p-4 mb-4 rounded">
      <h2 className="text-xl">{job.jobTitle}</h2>
      <p>{job.jobDescription}</p>
      <p>Salary: {job.salary}</p>
      <p>Experience Required: {job.experienceRequired} years</p>
      
      <div>
        {/* Check if skillsRequired is an array and map over it */}
        {job.skillsRequired && job.skillsRequired.map((skill, skillIndex) => (
          <div key={skillIndex}>
            <p>{skill}</p>
          </div>
        ))}
      </div>
    </div>
  ))
}

    {
  jobPostings.map((job, index) => (
    <div key={index} className="border p-4 mb-4 rounded">
      <h2 className="text-xl">{job.jobTitle}</h2>
      <p>{job.jobDescription}</p>
      <p>Salary: {job.salary}</p>
      <p>Experience Required: {job.experienceRequired} years</p>
      
      <div>
        {/* Check if skillsRequired is an array and map over it */}
        {job.skillsRequired && job.skillsRequired.map((skill, skillIndex) => (
          <div key={skillIndex}>
            <p>{skill}</p>
          </div>
        ))}
      </div>
    </div>
  ))
}

          
          </div>
  );
};

export default JobPostingList;
