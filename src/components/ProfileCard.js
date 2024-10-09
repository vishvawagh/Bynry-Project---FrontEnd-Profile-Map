import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Map from './Map';
import './ProfileCard.css'; // Make sure to create this CSS file

const ProfileCard = ({ profile }) => {
  const [showMap, setShowMap] = useState(false);

  // Toggle the map display on button click
  const handleShowMap = () => {
    setShowMap(!showMap);
  };

  return (
    <div className="profile-card">
      {/* Profile Image */}
      <img src={profile.photo} alt={profile.name} className="profile-image" />

      {/* Profile Name */}
      <h2 className="profile-name">{profile.name}</h2>

      {/* Profile Description */}
      <p className="profile-description">{profile.description}</p>

      {/* Button to toggle map visibility */}
      <button onClick={handleShowMap} className="toggle-map-btn">
        {showMap ? 'Hide Map' : 'View on Map'}
      </button>

      {/* Conditionally render the map component */}
      {showMap && <Map location={profile.location} />}

      {/* Link to profile details page */}
      <Link to={`/profile/${profile.id}`}>
        <button className="view-details-btn">View Details</button>
      </Link>
    </div>
  );
};

export default ProfileCard;
