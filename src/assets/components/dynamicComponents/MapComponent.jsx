import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MapComponent = () => {
  const position = [18.4168000, -68.9709000]; // Reemplaza con la latitud y longitud de tu tienda

  return (
    <MapContainer center={position} zoom={20} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          ¡Aquí está la Sucursal!
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
