import React from 'react'
import './styles/map.css'

type MapProps = {
  address: string;
}

const Map: React.FC<MapProps> = ({ address }) => {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
  return (
    <div className="map-container">
      <iframe
        title="Google Map"
        src={mapSrc}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="map-iframe"
      ></iframe>
    </div>
  )
}

export default Map
