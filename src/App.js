import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProfileDetails from './pages/ProfileDetails';
import AdminPanel from './pages/AdminPanel';

function App() {
  const [profiles, setProfiles] = useState([
    {
      id: 1,
      name: 'John Doe',
      photo: 'https://www.shutterstock.com/image-photo/passport-photo-portrait-young-man-260nw-2437772333.jpg',
      description: 'Software Engineer',
      location: { lat: 37.7749, lng: -122.4194 },
    },
    {
      id: 2,
      name: 'Jane Smith',
      photo: 'https://www.shutterstock.com/image-photo/portrait-pakistani-young-man-stylish-260nw-2222612077.jpg',
      description: 'Data Scientist',
      location: { lat: 40.7128, lng: -74.0060 },
    },
  ]);

  const addProfile = (newProfile) => {
    const updatedProfiles = [...profiles, { ...newProfile, id: profiles.length + 1 }];
    setProfiles(updatedProfiles);
  };

  const editProfile = (updatedProfile) => {
    const updatedProfiles = profiles.map((profile) =>
      profile.id === updatedProfile.id ? { ...profile, ...updatedProfile } : profile
    );
    setProfiles(updatedProfiles);
  };

  const deleteProfile = (id) => {
    const updatedProfiles = profiles.filter((profile) => profile.id !== id);
    setProfiles(updatedProfiles);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage profiles={profiles} />} />
          <Route path="/profile/:id" element={<ProfileDetails profiles={profiles} />} />
          <Route
            path="/admin"
            element={
              <AdminPanel
                profiles={profiles}
                addProfile={addProfile}
                editProfile={editProfile}
                deleteProfile={deleteProfile}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
