"use client";
import React, { useEffect, useState } from "react";
import { Marker, useMap, useMapEvents } from "react-leaflet";
import { FaLocationCrosshairs } from "react-icons/fa6";

const MapEvent = () => {
  const [position, setPosition] = useState<null | { lat: number; lng: number }>(
    null
  );

  const map = useMap();
  const MapEvents = useMapEvents({
    moveend: () => {
      console.log(MapEvents.getCenter());
    },
  });

  return (
    <>
      {position && <Marker position={position}></Marker>}
      <div
        title="get location"
        className="absolute bottom-4 right-4 size-10 z-[99999999999999]"
        onClick={() => {
          navigator.geolocation.getCurrentPosition(
            (pos) => {
              console.log(pos);
              setPosition({
                lat: pos.coords.latitude,
                lng: pos.coords.longitude,
              });
              map.zoomIn(20);
              map.flyTo({
                lat: pos.coords.latitude,
                lng: pos.coords.longitude,
              });
            },
            (err) => {
              alert(err);
            },
            { timeout: 10000 }
          );
        }}
      >
        <FaLocationCrosshairs size={"large"} color="#000" />
      </div>
    </>
  );
};

export default MapEvent;
