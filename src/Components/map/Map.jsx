import {MapContainer , TileLayer , Marker , Popup } from 'react-leaflet';
import React from 'react'
import "./map.scss";
import "leaflet/dist/leaflet.css";
export const Map = () => {
  return (
   
    <MapContainer center={[52.4797, -1.90269]} zoom={13} scrollWheelZoom={false} className='map'>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright"> OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  
  </MapContainer>
  
)
  
}
