import React, { useRef, useEffect } from 'react';
import './UserPage.css'

const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const loadMap = () => {
      if (window.google && window.google.maps) {
        const map = new window.google.maps.Map(mapRef.current, {
          center: { lat: -34.397, lng: 150.644 },
          zoom: 8,
        });

        console.log('Map loaded:', map);

        // Add a marker
        new window.google.maps.Marker({
          position: { lat: -34.397, lng: 150.644 },
          map,
          title: 'Hello World!',
        });
      } else {
        console.error('Google Maps JavaScript API not loaded.');
      }
    };

    // Delay loading the map to ensure the script has loaded
    const timer = setTimeout(() => {
      loadMap();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='map-container' style={{ height: '500px', width: '100%', backgroundColor: 'rgba(255, 0, 0, 0.1)', position: 'relative', zIndex: 1000 }}>
      <div ref={mapRef} style={{ height: '100%', width: '100%' }}></div>
    </div>
  );
};

export default Map;
