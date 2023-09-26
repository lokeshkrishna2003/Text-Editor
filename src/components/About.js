import React from 'react';
import '../About.css'; // Import your CSS file for styling
import { FaGithub, FaUniversity, FaLinkedin, FaEnvelope, FaCode } from 'react-icons/fa';

export default function About({mode}) {
  return (
    <div className={`about-container bg-${mode==='dark'?'dark':'light'} my-4`}>
      <div className={`about-heading `}>
        <h1>About Me</h1>
      </div>
      <div className="about-details">
        <p><FaUniversity />Name: <span className="college-name">Lokesh Krishna Cherukuri</span></p>
        <p><FaGithub /> GitHub: <a href="https://github.com/lokeshkrishna2003/Text-Editor" target="_blank" rel="GitHub Profile"  style={{textDecoration:'none'}}>GitHub Repo (Text-Editor)</a></p>
        <p><FaLinkedin /> LinkedIn: <a href="https://www.linkedin.com/in/lokesh-krishna-cherukuri-906919258/" target="_blank" rel="LinkedIn Profile" style={{textDecoration:'none'}}>LinkedIn Profile</a></p>
        <p><FaEnvelope /> Email: lci2022015@iiitl.ac.in</p>
        <p><FaCode /> <strong>Technologies Used:</strong> React.js, HTML, CSS, Git</p>
      </div>
      <div className="about-description">
        <p>
          I am a student at the <span className="college-name">Indian Institute of Information Technology, Lucknow</span>. My college is now jokingly referred to as <span className="college-name" id="changing-college">Bharath Institute of Information Technology, Lucknow</span>, as part of some fun wordplay.
        </p>
        <p>
          This project was built using React.js for the front-end, with HTML and CSS for styling. Git was used for version control.
        </p>
        <p>
          Features of this project include dark and light mode backgrounds, alerts for user notifications, and complete text editing capabilities.
        </p>
      </div>
    </div>
  );
}
