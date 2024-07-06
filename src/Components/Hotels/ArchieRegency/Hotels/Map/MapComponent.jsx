import React from 'react';

const MapComponent = ({Address}) => {
  return (
    <div>
      <iframe 
        src={Address} 
        width="100%" 
        height="450" 
        style={{ border: 0 }} // Use JavaScript object for inline styles
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade" // Specify referrer policy without a value
        title="Google Map"
      ></iframe>
    </div>
  );
};

export default MapComponent;


