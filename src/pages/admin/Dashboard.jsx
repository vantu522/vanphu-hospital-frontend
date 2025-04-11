import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>📊 Dashboard</h1>
      <p>This is your private dashboard.</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default Dashboard;
