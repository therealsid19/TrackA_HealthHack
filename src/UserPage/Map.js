import React, { useRef, useEffect } from 'react';

const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });

    // Add a marker
    new window.google.maps.Marker({
      position: { lat: -34.397, lng: 150.644 },
      map,
      title: 'Hello World!',
    });
  }, []);

  return (
    <div className='map-container'>
      <div ref={mapRef} style={{ height: '100%', width: '100%' }}></div>
    </div>
  );
};

export default Map;
