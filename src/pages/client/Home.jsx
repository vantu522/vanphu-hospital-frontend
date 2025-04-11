import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>🏠 Home Page</h1>
      <p>Welcome to the homepage!</p>
      <Link to="/dashboard">Go to Dashboard</Link>
    </div>
  );
};

export default Home;
