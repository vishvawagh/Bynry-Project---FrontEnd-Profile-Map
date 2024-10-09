import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProfileDetails.css'; // Import the CSS file

const ProfileDetails = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    // Fetch profile details based on the profile ID (in a real scenario, you'd fetch from an API)
    const fetchProfile = () => {
      const mockProfiles = [
        {
          id: 1,
          name: 'John Doe',
          photo: 'https://www.shutterstock.com/image-photo/passport-photo-portrait-young-man-260nw-2437772333.jpg',
          description: 'Software Engineer',
          contact: 'johndoe@example.com',
          interests: 'Coding, Hiking',
        },
        {
          id: 2,
          name: 'Jane Smith',
          photo: 'https://www.shutterstock.com/image-photo/portrait-pakistani-young-man-stylish-260nw-2222612077.jpg',
          description: 'Data Scientist',
          contact: 'janesmith@example.com',
          interests: 'AI, Machine Learning',
        },
      ];
      const selectedProfile = mockProfiles.find((p) => p.id === parseInt(id));
      setProfile(selectedProfile);
    };

    fetchProfile();
  }, [id]);

  if (!profile) return <div className="loading">Loading...</div>;

  return (
    <div className="profile-details">
      <h1 className="profile-name">{profile.name}</h1>
      <img src={profile.photo} alt={profile.name} className="profile-photo" />
      <p className="profile-description">{profile.description}</p>
      <p className="profile-contact">Contact: {profile.contact}</p>
      <p className="profile-interests">Interests: {profile.interests}</p>
    </div>
  );
};

export default ProfileDetails;
