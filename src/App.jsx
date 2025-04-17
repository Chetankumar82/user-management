import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import axios from "axios";
import Login from "./components/Login";
import UsersList from "./components/UsersList";
import EditUser from "./components/EditUser";
import { ToastContainer } from "react-toastify"; // Import ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import Toast styles
import "./App.css"; // Custom styles for better UI

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/users" element={token ? <UsersList /> : <Navigate to="/login" />} />
          <Route path="/edit/:id" element={token ? <EditUser /> : <Navigate to="/login" />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} /> {/* Add ToastContainer */}
    </Router>
  );
}

export default App;
