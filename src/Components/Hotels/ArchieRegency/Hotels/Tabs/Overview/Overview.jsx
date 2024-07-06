import React, { useState } from 'react';
import MapComponent from '../../Map/MapComponent'; 
import './Overview.css'

export default function Overview() {
  const [showMap, setShowMap] = useState(false);

  const handleLocationClick = () => {
    setShowMap(true);
  };

  const handleCloseMap = () => {
    setShowMap(false);
  };

  return (
    <div className="abtPptDtls">
      <span data-nosnippet="true">
        <h2 className="latoBlack font22 blackText appendBottom5">About Archie Regency</h2>
      </span>
      <p className="font14 latoBold lineHight25 appendBottom10">
        <b>Enjoy a comfortable stay at this budget hotel in Bangalore which offers airport transfers, Wi-Fi & tidy rooms.</b>
      </p>
      <ul className="abtPptDtls__list">
        <li className="abtPptDtls__list--item">The railway station, Krantivira Sangolli Rayanna is approximately 1 km from the hotel.</li>
        <li className="abtPptDtls__list--item" onClick={handleLocationClick}>Falcon Coins Gallery is only 250 m from the hotel. (Click to view map)</li>
        <li className="abtPptDtls__list--item">For some movie action with your friend and family, Triveni Theatre 4K Digital Cinema is 650 m away.</li>
      </ul>
      <ul className="abtPptDtlsTags flex-wrap">
        <li className="abtPptDtlsTags__item mb-2" style={{ borderColor: '#C8E6FE', backgroundColor: '#EDF6FF' }}>
          <img src="https://promos.makemytrip.com/hoteldescription/Restaurantsdesktop.png" alt="Food and Dining" />
          <span className="abtPptDtlsTags__txt" style={{ color: '#040404' }}>Food and Dining</span>
        </li>
        <li className="abtPptDtlsTags__item mb-2" style={{ borderColor: '#C8E6FE', backgroundColor: '#EDF6FF' }} onClick={handleLocationClick}>
          <img src="https://promos.makemytrip.com/hoteldescription/Locationdesktop.png" alt="Location & Surroundings" />
          <span className="abtPptDtlsTags__txt" style={{ color: '#040404' }}>Location & Surroundings</span>
        </li>
        <li className="abtPptDtlsTags__item mb-2" style={{ borderColor: '#C8E6FE', backgroundColor: '#EDF6FF' }}>
          <img src="https://promos.makemytrip.com/hoteldescription/Propertydesktop.png" alt="Property Highlights" />
          <span className="abtPptDtlsTags__txt" style={{ color: '#040404' }}>Property Highlights</span>
        </li>
        <li className="abtPptDtlsTags__item mb-2" style={{ borderColor: '#C8E6FE', backgroundColor: '#EDF6FF' }}>
          <img src="https://promos.makemytrip.com/hoteldescription/Accomodationdesktop.png" alt="Room Details & Amenities" />
          <span className="abtPptDtlsTags__txt" style={{ color: '#040404' }}>Room Details & Amenities</span>
        </li>
      </ul>
      {showMap && <MapComponent Address="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.798420084674!2d85.33279977506255!3d23.39550860230886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e147e897a4ef%3A0xa974e9426c22bcad!2sJanki%20Tower!5e0!3m2!1sen!2sin!4v1714816426492!5m2!1sen!2sin" onClose={handleCloseMap} />}
    </div>
  );
}
