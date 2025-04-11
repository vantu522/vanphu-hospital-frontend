import React from "react";
import { Link, Navigate } from "react-router-dom";
import Button from "../../components/client/ui/button";

const Home = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>🏠 Home Page</h1>
      <p>Welcome to the homepage!</p>
      <Button variant="primary" onClick={()=> alert('hi')} >Click</Button>
  
      <Link to="/dashboard">Go to Dashboard</Link>
    </div>
  );
};

export default Home;
