import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './ProfileDetails.css'; // Import the CSS file

const ProfileDetails = () => {
  const { id } = useParams(); // Get the profile ID from the URL params
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    // Simulating an API call to fetch profile details based on the profile ID
    const fetchProfile = () => {
      const mockProfiles = [
        {
          id: 1,
          name: 'John Doe',
          photo: 'https://www.shutterstock.com/image-photo/passport-photo-portrait-young-man-260nw-2437772333.jpg',
          description: 'Software Engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success.',
          contact: 'johndoe@example.com',
          interests: 'Coding, Hiking, Playing Chess',
        },
        {
          id: 2,
          name: 'Jane Smith',
          photo: 'https://static.vecteezy.com/system/resources/thumbnails/033/129/417/small_2x/a-business-man-stands-against-white-background-with-his-arms-crossed-ai-generative-photo.jpg',
          description: 'Data Scientist focused on applying machine learning algorithms to solve challenging real-world problems in healthcare and finance.',
          contact: 'janesmith@example.com',
          interests: 'AI, Machine Learning, Traveling',
        },
      ];

      // Find the profile based on the provided ID
      const selectedProfile = mockProfiles.find((p) => p.id === parseInt(id));
      setProfile(selectedProfile);
    };

    fetchProfile(); // Fetch the profile when the component is mounted
  }, [id]);

  if (!profile) return <div className="loading">Loading profile...</div>; // Display a loading message while fetching the profile

  return (
    <div className="profile-details">
      {/* Display the profile information */}
      <button className="back-button" onClick={() => navigate('/')}>Back to Home</button>
      <h1 className="profile-name">{profile.name}</h1>
      <img src={profile.photo} alt={profile.name} className="profile-photo" />
      <p className="profile-description">{profile.description}</p>
      <p className="profile-contact"><strong>Contact:</strong> {profile.contact}</p>
      <p className="profile-interests"><strong>Interests:</strong> {profile.interests}</p>
    </div>
  );
};

export default ProfileDetails;
