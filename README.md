# Armaghan Ahmad Shad — Personal Portfolio

A modern, fast, and responsive personal portfolio and technical blog built with React and Vite. This project represents a migration from a static HTML/CSS architecture to a fully functional Single Page Application (SPA).

## 🚀 Tech Stack

*   **Framework:** React (via Vite)
*   **Routing:** React Router DOM
*   **Styling:** Vanilla CSS (Custom Grid/Flexbox layouts)
*   **Animations:** Custom `IntersectionObserver` for scroll-reveal effects

## ✨ Features

*   **Single Page Application (SPA):** Seamless navigation without page reloads.
*   **Dynamic Blog Routing:** Dedicated routes for individual technical blog posts (e.g., `/blog/linux-home-server`).
*   **Smooth Scrolling Navigation:** Hash-based routing (`/#projects`, `/#skills`) for quick navigation across the main layout.
*   **Scroll Animations:** UI elements smoothly reveal themselves as the user scrolls down the page.
*   **Custom UI:** A clean, professional dark-themed interface with custom SVG icons.

## 📂 Project Structure

```text
src/
├── components/
│   ├── blog/                 # Individual blog post components
│   │   ├── DockerComposeToKubernetes.jsx
│   │   ├── GitOpsVsTraditionalOps.jsx
│   │   ├── LinuxHomeServer.jsx
│   │   └── WhyLearnCICDEarly.jsx
│   ├── About.jsx             # About & Timeline section
│   ├── Blog.jsx              # Blog grid/listing section
│   ├── Certificates.jsx      # Certifications section
│   ├── Contact.jsx           # Contact form section
│   ├── Hero.jsx              # Main landing section
│   ├── Home.jsx              # Main aggregator component for the landing page
│   ├── Navbar.jsx            # Global navigation bar
│   ├── Projects.jsx          # Projects grid section
│   └── Skills.jsx            # Skills toolkit section
├── App.jsx                   # Main application router
├── index.css                 # Global stylesheet including animations
└── main.jsx                  # React entry point