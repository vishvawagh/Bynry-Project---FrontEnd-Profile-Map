import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminPanel.css';

const AdminPanel = ({ profiles, addProfile, editProfile, deleteProfile }) => {
  const [newProfile, setNewProfile] = useState({ name: '', description: '', location: { lat: '', lng: '' }, photo: null });
  const [photoPreview, setPhotoPreview] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editingProfileId, setEditingProfileId] = useState(null);
  const navigate = useNavigate();

  // Function to handle profile submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newProfile.name || !newProfile.description || !newProfile.location.lat || !newProfile.location.lng || !newProfile.photo) {
      alert('All fields are required, including latitude, longitude, and photo.');
      return;
    }

    // Create a new profile object
    const profileData = {
      ...newProfile,
      id: isEditing ? editingProfileId : profiles.length + 1,
      photo: photoPreview // Use the photo preview URL for display
    };

    if (isEditing) {
      editProfile(profileData); // Call editProfile if in edit mode
    } else {
      addProfile(profileData); // Call addProfile otherwise
    }

    resetForm(); // Reset form after submission
  };

  // Function to reset form fields
  const resetForm = () => {
    setNewProfile({ name: '', description: '', location: { lat: '', lng: '' }, photo: null });
    setPhotoPreview(null);
    setIsEditing(false);
    setEditingProfileId(null);
  };

  // Function to handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setNewProfile({ ...newProfile, photo: file }); // Set the file
    const reader = new FileReader();
    reader.onloadend = () => {
      setPhotoPreview(reader.result); // Set the preview URL
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  // Function to edit a profile
  const handleEdit = (id) => {
    const profileToEdit = profiles.find((p) => p.id === id);
    setNewProfile(profileToEdit); // Prefill the form with existing data
    setPhotoPreview(profileToEdit.photo); // Set the preview image
    setIsEditing(true); // Set edit mode
    setEditingProfileId(id); // Store the ID of the profile being edited
  };

  // Function to handle profile deletion
  const handleDelete = (id) => {
    deleteProfile(id);
  };

  return (
    <div className="admin-panel">
      <button className="back-button" onClick={() => navigate('/')}>Back to Home</button>

      <h1>Admin Panel - Manage Profiles</h1>
      <div className="admin-profile-list">
        {profiles.map((profile) => (
          <div key={profile.id} className="profile-card">
            <img src={profile.photo} alt={profile.name} className="profile-photo" />
            <h2>{profile.name}</h2>
            <p>{profile.description}</p>
            <button onClick={() => handleEdit(profile.id)} className="edit-btn">Edit</button>
            <button onClick={() => handleDelete(profile.id)} className="delete-btn">Delete</button>
          </div>
        ))}
      </div>

      <h2>{isEditing ? 'Update Profile' : 'Add New Profile'}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={newProfile.name}
            onChange={(e) => setNewProfile({ ...newProfile, name: e.target.value })}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            value={newProfile.description}
            onChange={(e) => setNewProfile({ ...newProfile, description: e.target.value })}
          />
        </label>
        <label>
          Photo:
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
        </label>
        {photoPreview && <img src={photoPreview} alt="Profile Preview" className="photo-preview" />}
        <label>
          Latitude:
          <input
            type="text"
            value={newProfile.location.lat}
            onChange={(e) => setNewProfile({ ...newProfile, location: { ...newProfile.location, lat: e.target.value } })}
          />
        </label>
        <label>
          Longitude:
          <input
            type="text"
            value={newProfile.location.lng}
            onChange={(e) => setNewProfile({ ...newProfile, location: { ...newProfile.location, lng: e.target.value } })}
          />
        </label>
        <button type="submit" className='add-profile'>{isEditing ? 'Update Profile' : 'Add Profile'}</button>
      </form>
    </div>
  );
};

export default AdminPanel;
