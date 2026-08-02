import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Certificates from './components/certificates';
import Projects from './components/Projects';
import Blog from './components/Blog.jsx';
import Contact from './components/Contact';

// Hand-written blog posts
import LinuxHomeServer from './components/blog/LinuxHomeServer';
import DockerComposeToKubernetes from './components/blog/DockerComposeToKubernetes';
import GitOpsVsTraditionalOps from './components/blog/GitOpsVsTraditionalOps';
import WhyLearnCICDEarly from './components/blog/WhyLearnCICDEarly';

// Dynamic (database-driven) blog posts + admin
import DynamicBlogPost from './components/DynamicBlogPost';
import AdminLogin from './components/admin/AdminLogin';
import AdminDashboard from './components/admin/AdminDashboard';
import ProtectedRoute from './components/admin/ProtectedRoute';

function Page({ children }) {
  return <main id="top">{children}</main>;
}

function Layout() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  return (
    <>
      <Navbar />
      <Routes>
        {/* Home (landing) */}
        <Route path="/" element={<Home />} />

        {/* Standalone pages */}
        <Route path="/about" element={<Page><About /></Page>} />
        <Route path="/skills" element={<Page><Skills /></Page>} />
        <Route path="/certificates" element={<Page><Certificates /></Page>} />
        <Route path="/projects" element={<Page><Projects /></Page>} />
        <Route path="/blog" element={<Page><Blog /></Page>} />
        <Route path="/contact" element={<Page><Contact /></Page>} />

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
      {!isAdmin && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
