import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';

// Route-level code splitting: everything below is loaded on demand instead
// of being bundled into the initial page load. This matters most for the
// admin dashboard (Supabase CRUD UI) and the individual blog posts, since
// the vast majority of visitors never touch either — they were previously
// shipped to every visitor as part of one 500KB+ bundle.
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Certificates = lazy(() => import('./components/certificates'));
const Projects = lazy(() => import('./components/Projects'));
const Blog = lazy(() => import('./components/Blog.jsx'));
const Contact = lazy(() => import('./components/Contact'));

// Hand-written blog posts
const LinuxHomeServer = lazy(() => import('./components/blog/LinuxHomeServer'));
const DockerComposeToKubernetes = lazy(() => import('./components/blog/DockerComposeToKubernetes'));
const GitOpsVsTraditionalOps = lazy(() => import('./components/blog/GitOpsVsTraditionalOps'));
const WhyLearnCICDEarly = lazy(() => import('./components/blog/WhyLearnCICDEarly'));
const AzureFundamentalsJourney = lazy(() => import('./components/blog/AzureFundamentalsJourney'));

// Dynamic (database-driven) blog posts + admin
const DynamicBlogPost = lazy(() => import('./components/DynamicBlogPost'));
const AdminLogin = lazy(() => import('./components/admin/AdminLogin'));
const AdminDashboard = lazy(() => import('./components/admin/AdminDashboard'));
import ProtectedRoute from './components/admin/ProtectedRoute';

function Page({ children }) {
  return <main id="top">{children}</main>;
}

// Minimal, brand-consistent fallback shown for the brief moment a lazy
// route's code is downloading. Deliberately quiet — this should be
// invisible on a normal connection and only noticeable on a slow one.
function RouteFallback() {
  return (
    <div style={{ minHeight: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem', color: '#5A6672' }}>
        loading…
      </span>
    </div>
  );
}

function Layout() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  return (
    <>
      <Navbar />
      <Suspense fallback={<RouteFallback />}>
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
          <Route path="/blog/azure-fundamentals-journey" element={<AzureFundamentalsJourney />} />

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
      </Suspense>
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
