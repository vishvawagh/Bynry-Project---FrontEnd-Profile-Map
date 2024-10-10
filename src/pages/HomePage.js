import React from 'react';
import { Link } from 'react-router-dom';
import ProfileList from '../components/ProfileList';
import './HomePage.css'; // Assuming you have a HomePage.css file

const HomePage = ({ profiles }) => {
  return (
    <div className="homepage-container">
      {/* Button to navigate to the Admin Panel */}
      <div className="top-right">
        <Link to="/admin">
          <button className="admin-btn">Go to Admin Page</button>
        </Link>
      </div>

      {/* Main content of the page */}
      <h1>Profile List</h1>
      <ProfileList profiles={profiles} />
    </div>
  );
};

export default HomePage;
