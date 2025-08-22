import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const resume = {
    name: "ONU EMEKA BARNABAS",
    headline: "TELECOM ENGINEER WITH 5+ YEARS OF INDUSTRY EXPERIENCE",
    location: "Enugu, Nigeria",
    phone: "+2348164841565",
    email: "emekaonu7@gmail.com",
    summary: "A highly accomplished, dedicated, and disciplined IT-Support professional seeking to contribute to and grow with a dynamic, progressive, and innovative organization. Recognized as a team player and a performer, consistently completing assignments on time and under budget. A troubleshooter able to resolve issues and meet and achieve challenging goals and objectives effectively and efficiently.",
    achievements: [
      "MANAGED 5+ BASE STATION",
      "MAINTAINED 200M TELECOM INFRASTRUCTURES",
      "TRIPLED NETWORK RELIABILITY",
      "ACHIEVED ZERO (0) INCIDENTS"
    ],
    skills: [
      "System and Network configuration",
      "Electrical power distribution",
      "Solar, AC, CCTV installation",
      "Technical Support",
      "Rigging",
      "Site management",
      "Strong time management skills",
      "Excellent interpersonal skills",
      "Superior communicator",
      "Self-driven and result-oriented"
    ],
    experience: [
      {
        company: "GIANTBASE TELECOM",
        title: "CHIEF EXECUTIVE DIRECTOR",
        dates: "FOUNDED 2022 - Present",
        description: [
          "Managing the network infrastructure of court of Appeal Port Harcourt",
          "Provide unlimited internet connection to clients in Enugu, Awka, Owerri and Port Harcourt",
          "Manage lextech Internet infrastructure"
        ]
      },
      {
        company: "LEXTECH ECO-SYSTEM",
        title: "IT&NETWORK SUPPORT ENGINEER",
        dates: "JAN 2025 - PRESENT",
        description: [
          "Installed, distributed and Manage the network at the Ministry of Justice Enugu, Nigeria",
          "Installed, distributed and Manage the network at the State High Court Enugu, Nigeria",
          "Installed, distributed and Manage the network at the State High Court Awka, Nigeria"
        ]
      },
      {
        company: "T- WIRELESS NIGERIA",
        title: "MANAGER OWERRI BRANCH",
        dates: "APRIL 2022 – JAN 2025",
        description: [
          "Training and development new Technical support teams for the branches",
          "Increase the company client by 40%"
        ]
      },
      {
        company: "5M TELECOM",
        title: "CHIEF RIGGER & TECHNICAL MANAGER",
        dates: "FEB 2020 - APRIL 2022",
        description: [
          "Performed routine O&M procedures as prescribed for the Power, Transmission and BTS Radio networks",
          "Installation of over 300+ Micro wave Radio [lite beam, power beam, nano station etc]",
          "Attended to emergency faults and rectified promptly within different base station",
          "Training and development new Technical support teams for all branches"
        ]
      }
    ],
    education: [
      {
        institution: "ENUGU STATE UNIVERSITY OF SCIENCE AND TECHNOLOGY(ESUT)",
        degree: "B.SC Electrical and electronic technology",
        dates: "2014 – 2018"
      }
    ]
  };

  return (
    <div className="App">
      <Navigation resume={resume} />
      <Hero resume={resume} />
      <About resume={resume} />
      <Experience resume={resume} />
      <Services />
      <Gallery />
      <Contact resume={resume} />
      <Footer resume={resume} />
    </div>
  );
}

export default App;