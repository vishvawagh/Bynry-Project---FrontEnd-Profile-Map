import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import styles from './Map.css'; // Make sure this CSS module exists

// Container style for the map
const containerStyle = {
  width: '100%',
  height: '400px',
};

// Default location (e.g., Pune, India in this case) in case no location is provided
const defaultCenter = {
  lat: 18.6298,
  lng: 73.7997,
};

const Map = ({ location }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // If the profile location is valid, we use it; otherwise, we use the default center
  const mapCenter = {
    lat: location?.lat || defaultCenter.lat,
    lng: location?.lng || defaultCenter.lng,
  };

  const handleError = () => {
    setError('Failed to load Google Maps. Please check your API key or internet connection.');
    setLoading(false); // Stop loading if there's an error
  };

  return (
    <div className={styles.mapContainer}>
      {/* Display error message if any */}
      {error && <p className={styles.error}>{error}</p>}

      {/* Show loading indicator while the map is being loaded */}
      {loading && !error && <p className={styles.loading}>Loading map...</p>}

      <LoadScript
        googleMapsApiKey="AIzaSyAq9LsZxJvVHEDmS-7WYokcsNQPPapox0s" // Replace with your actual Google Maps API key
        onLoad={() => setLoading(false)} // Map has loaded, stop showing the loading message
        onError={handleError} // Handle errors during loading
      >
        {!error && (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={mapCenter}
            zoom={10}
          >
            {/* Marker on the map at the specified location */}
            <Marker position={mapCenter} />
          </GoogleMap>
        )}
      </LoadScript>
    </div>
  );
};

export default Map;
