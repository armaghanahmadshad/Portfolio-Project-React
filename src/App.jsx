import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';

// Aapke chaaron (4) blog components yahan import ho rahe hain:
import LinuxHomeServer from './components/blog/LinuxHomeServer';
import DockerComposeToKubernetes from './components/blog/DockerComposeToKubernetes';
import GitOpsVsTraditionalOps from './components/blog/GitOpsVsTraditionalOps';
import WhyLearnCICDEarly from './components/blog/WhyLearnCICDEarly';

// Dynamic (database-driven) blog posts + admin
import DynamicBlogPost from './components/DynamicBlogPost';
import AdminLogin from './components/admin/AdminLogin';
import AdminDashboard from './components/admin/AdminDashboard';
import ProtectedRoute from './components/admin/ProtectedRoute';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Main Home Page */}
        <Route path="/" element={<Home />} />
        
        {/* Blog Pages (hand-written) */}
        <Route path="/blog/linux-home-server" element={<LinuxHomeServer />} />
        <Route path="/blog/compose-to-kubernetes" element={<DockerComposeToKubernetes />} />
        <Route path="/blog/first-pipeline-lessons" element={<GitOpsVsTraditionalOps />} />
        <Route path="/blog/why-learn-cicd-early" element={<WhyLearnCICDEarly />} />

        {/* Blog posts added from the admin dashboard */}
        <Route path="/blog/:slug" element={<DynamicBlogPost />} />

        {/* Admin */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;