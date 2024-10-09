import React, { useState } from 'react';

const AdminPanel = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState({ lat: '', lng: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Validation
    if (!name || !description || !location.lat || !location.lng) {
      alert('All fields are required, including latitude and longitude.');
      return;
    }
  
    // Logic to add a new profile
    console.log({ name, description, location });
  };
  

  return (
    <div>
      <h1>Admin Panel - Add New Profile</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Description:
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <br />
        <label>
          Latitude:
          <input type="text" value={location.lat} onChange={(e) => setLocation({ ...location, lat: e.target.value })} />
        </label>
        <br />
        <label>
          Longitude:
          <input type="text" value={location.lng} onChange={(e) => setLocation({ ...location, lng: e.target.value })} />
        </label>
        <br />
        <button type="submit">Add Profile</button>
      </form>
    </div>
  );
};

export default AdminPanel;
