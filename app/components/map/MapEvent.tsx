"use client";
import React, { useEffect, useState } from "react";
import { Marker, useMap, useMapEvents } from "react-leaflet";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { useLocation } from "../../context/mapContext";

const MapEvent = () => {
  const { setLocation } = useLocation();

  const map = useMap();
  const MapEvents = useMapEvents({
    moveend: () => {
      console.log(MapEvents.getCenter());
      const { lat, lng } = MapEvents.getCenter();
      setLocation({ lat, lng });
    },
  });

  return (
    <div
      title="get location"
      className="absolute bottom-4 right-4 size-10 z-[99999999999999]"
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            console.log(pos);

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
  );
};

export default MapEvent;
