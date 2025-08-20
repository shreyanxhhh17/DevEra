// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/pages/Landing";
import SignUpPage from "./components/pages/SignUp"; 
import LoginPage from "./components/pages/Login";
import Dashboard from "./components/pages/DashBoard";
import ExploreGroups from "./components/pages/ExploreGroups";
import ProfileCard from "./components/pages/ProfileCard";
import ContactPage from "./components/pages/Contact";
import UserProjects from "./components/pages/UserProjects";
import GroupDetails2 from "./components/pages/GroupDetails2";
import HelpSupportPage from "./components/pages/HelpSupportPage";
import ErrorPage from "./components/pages/ErrorPage";
import ProtectedRoute from "./components/auth/ProtectedRoutes";

function App() {
  return (
    <BrowserRouter>
      <main className="font-sans bg-[#1e1e1e] text-white min-h-screen">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage/>}/>
  <Route
    path="/dashboard"
    element={
        <Dashboard />
    }
  />
  <Route
    path="/dashboard/groups"
    element={
        <ExploreGroups />
    }
  />
  <Route
    path="/profile"
    element={
        <ProfileCard />
    }
  />
  <Route
    path="/contact"
    element={
        <ContactPage />
    }
  />
  <Route
    path="/details"
    element={
        <GroupDetails2 />
    }
  />
  <Route
    path="/projects"
    element={
        <UserProjects />
    }
  />
  <Route
    path="/help"
    element={
        <HelpSupportPage />
    }
  />
  <Route
    path="/error"
    element={
        <ErrorPage />
    }
  />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
