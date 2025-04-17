import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    axios.get(`https://reqres.in/api/users?page=${page}`).then((res) => {
      let fetchedUsers = res.data.data;
      const updatedUser = location.state?.updatedUser;

      if (updatedUser) {
        fetchedUsers = fetchedUsers.map((user) =>
          user.id === updatedUser.id ? updatedUser : user
        );
      }

      setUsers(fetchedUsers);
      setFilteredUsers(fetchedUsers); // default display
    });
  }, [page, location.state]);

  useEffect(() => {
    const lowerSearch = search.toLowerCase();
    const result = users.filter((user) =>
      `${user.first_name} ${user.last_name}`.toLowerCase().includes(lowerSearch) ||
      user.email.toLowerCase().includes(lowerSearch)
    );
    setFilteredUsers(result);
  }, [search, users]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://reqres.in/api/users/${id}`);
      const updated = users.filter((user) => user.id !== id);
      setUsers(updated);
      toast.success("User deleted successfully.");
    } catch (err) {
      toast.error("Failed to delete user.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.info("Logged out.");
    setTimeout(() => navigate("/login"), 1000);
  };

  return (
    <div className="users-container">
      <h2>Users List</h2>
      <button onClick={handleLogout}>Logout</button>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by name or email..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      <div className="users-grid">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <div key={user.id} className="user-card">
              <img src={user.avatar} alt="User Avatar" />
              <h3>{user.first_name} {user.last_name}</h3>
              <p>{user.email}</p>
              <Link to={`/edit/${user.id}`} className="edit-btn">Edit</Link>
              <button onClick={() => handleDelete(user.id)} className="delete-btn">Delete</button>
            </div>
          ))
        ) : (
          <p>No users found.</p>
        )}
      </div>

      <div className="pagination-buttons">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </button>
        <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
      </div>
    </div>
  );
};

export default UsersList;
