import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MapComponent = () => {
  const locations = [
    { id: 1, position: [18.4169336, -68.9710414], name: "Tienda 1" },
    { id: 2, position: [18.4360875, -68.9769396], name: "Tienda 2" },
    { id: 3, position: [18.4169306, -68.9710414], name: "Tienda 3" }
  ];

  const center = [18.4169336, -68.9710414]; // Opcional: elige una posición central para el mapa

  return (
    <MapContainer center={center} zoom={17} style={{ height: '100%', width: '100%'}}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map((location) => (
        <Marker key={location.id} position={location.position}>
          <Popup>
            {location.name}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
