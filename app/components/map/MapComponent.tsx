import React from "react";
import { MapContainer } from "react-leaflet/MapContainer";
import "leaflet/dist/leaflet.css";
import { TileLayer } from "react-leaflet";
import MapEvent from "./MapEvent";
import { FaLocationDot } from "react-icons/fa6";
import { useLocation } from "../../context/mapContext";

// import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";

// import "leaflet-defaulticon-compatibility";
// END: Preserve spaces to avoid auto-sorting

const MapComponent = () => {
  const { location, getLocation } = useLocation();

  return (
    <div id="map" className="relative h-[33rem] p-4">
      <button
        onClick={getLocation}
        className="absolute z- text-white bottom-8 max-w-sm right-1/2 translate-x-[50%] p-6 rounded-md w-full bg-blue-400"
      >
        همینجام
      </button>
      <MapContainer
        className="w-full h-96 relative"
        preferCanvas={true}
        center={[51.505, -0.09]}
        zoom={11}
        scrollWheelZoom={true}
      >
        <MapEvent />

        <div className="absolute z-[999999] top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <FaLocationDot size={50} color="#0009" />
        </div>

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
};

export default MapComponent;
