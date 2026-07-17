import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';

// Aapke chaaron (4) blog components yahan import ho rahe hain:
import LinuxHomeServer from './components/blog/LinuxHomeServer';
import DockerComposeToKubernetes from './components/blog/DockerComposeToKubernetes';
import GitOpsVsTraditionalOps from './components/blog/GitOpsVsTraditionalOps';
import WhyLearnCICDEarly from './components/blog/WhyLearnCICDEarly';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Main Home Page */}
        <Route path="/" element={<Home />} />
        
        {/* Blog Pages */}
        <Route path="/blog/linux-home-server" element={<LinuxHomeServer />} />
        <Route path="/blog/compose-to-kubernetes" element={<DockerComposeToKubernetes />} />
        <Route path="/blog/first-pipeline-lessons" element={<GitOpsVsTraditionalOps />} />
        <Route path="/blog/why-learn-cicd-early" element={<WhyLearnCICDEarly />} />
      </Routes>
    </Router>
  );
}

export default App;