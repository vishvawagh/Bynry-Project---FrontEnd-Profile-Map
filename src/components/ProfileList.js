import React, { useState, useEffect } from 'react';
import ProfileCard from './ProfileCard';
import './ProfileList.module.css'; // Assuming you have some CSS for styling

const ProfileList = () => {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  // Simulate an API call to fetch profile data
  useEffect(() => {
    setTimeout(() => {
      const mockProfiles = [
        { 
          id: 1, 
          name: 'John Doe', 
          photo: 'https://www.shutterstock.com/image-photo/passport-photo-portrait-young-man-260nw-2437772333.jpg', 
          description: 'Software Engineer', 
          location: { lat: 37.7749, lng: -122.4194 } 
        },
        { 
          id: 2, 
          name: 'Jane Smith', 
          photo: 'https://www.shutterstock.com/image-photo/portrait-pakistani-young-man-stylish-260nw-2222612077.jpg', 
          description: 'Data Scientist', 
          location: { lat: 40.7128, lng: -74.0060 } 
        },
       
      ];
      setProfiles(mockProfiles);
      setLoading(false);
    }, 1000); // Simulate loading time of 1 second
  }, []);

  // Filter profiles based on the search term
  const filteredProfiles = profiles.filter(profile =>
    profile.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="profile-list-container">
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      {loading ? (
        <p className="loading-text">Loading profiles...</p>
      ) : (
        <div className="profile-list">
          {filteredProfiles.length > 0 ? (
            filteredProfiles.map(profile => (
              <ProfileCard key={profile.id} profile={profile} />
            ))
          ) : (
            <p className="no-profiles-text">No profiles found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ProfileList;
