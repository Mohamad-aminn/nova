import React from "react";
import { MapContainer } from "react-leaflet/MapContainer";
import "leaflet/dist/leaflet.css";
import { Marker, Popup, TileLayer } from "react-leaflet";
import MapEvent from "./MapEvent";

// import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";

// import "leaflet-defaulticon-compatibility";
// END: Preserve spaces to avoid auto-sorting

const MapComponent = () => {
  return (
    <div id="map">
      <MapContainer
        className="w-full h-96 relative"
        preferCanvas={true}
        center={[51.505, -0.09]}
        zoom={11}
        scrollWheelZoom={true}
      >
        <MapEvent />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
};

export default MapComponent;
