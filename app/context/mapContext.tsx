"use client";
import React, { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

const MapContext = createContext({});
export const MapContextConatiner = ({ children }: React.PropsWithChildren) => {
  const [address, setAddress] = useState({
    state: "",
    city: "",
    formattedAddress: "",
  });
  const [location, setLocation] = useState({ lat: 0, lng: 0 });

  const getLocation = async () => {
    try {
      const res = await fetch(
        `https://api.neshan.org/v5/reverse?lat=${location.lat}&lng=${location.lng}`,
        { headers: { "Api-Key": process.env.NESHAN_API_KEY! } }
      );
      const result = await res.json();

      if (res.status === 484) {
        throw Error("مصرف از حد مجاز گذشته بعدا دوباره امتحان کنید");
      }
      if (!res.ok) {
        throw Error(result);
      }

      setAddress({
        city: result.city,
        state: result.state,
        formattedAddress: result.formatted_address,
      });
    } catch (error) {
      if (typeof error === "string") {
        return toast.error(error);
      } else {
        return toast.error("مشکلی پیش اومد شرمنده");
      }
    }
  };

  return (
    <MapContext value={{ location, setLocation, getLocation, address }}>
      {children}
    </MapContext>
  );
};

export const useLocation = () => {
  const data = useContext(MapContext);
  return data;
};
