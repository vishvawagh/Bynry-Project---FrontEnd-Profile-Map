import React, { useEffect, useState } from 'react';
import ProfileCard from './ProfileCard';
import './ProfileList.module.css';

const ProfileList = ({ profiles, editProfile }) => { // Accept editProfile as a prop
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setLoading(false);
  }, [profiles]); // Set loading to false after profiles are updated

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
              <ProfileCard 
                key={profile.id} 
                profile={profile} 
                editProfile={editProfile} // Pass editProfile to ProfileCard
              />
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
