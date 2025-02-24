"use client";
import React, { createContext, Dispatch, useContext, useState } from "react";
import { Id, toast } from "react-toastify";

type context = {
  location: { lat: number; lng: number };
  setLocation: React.Dispatch<
    React.SetStateAction<{
      lat: number;
      lng: number;
    }>
  >;
  loading: boolean;
  step: number | 0 | 1;
  getLocation: () => Promise<Id | undefined>;
  address: {
    state: string;
    city: string;
    formattedAddress: string;
  };
};

const MapContext = createContext<context>({
  loading: false,
  step: 0,
  address: {
    city: "",
    formattedAddress: "",
    state: "",
  },
  getLocation: async () => {
    return "";
  },
  location: { lat: 0, lng: 0 },
  setLocation: () => {},
});

export const MapContextConatiner = ({ children }: React.PropsWithChildren) => {
  const [address, setAddress] = useState({
    state: "",
    city: "",
    formattedAddress: "",
  });
  const [location, setLocation] = useState({ lat: 0, lng: 0 });
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(0);

  const getLocation = async () => {
    try {
      setLoading(true);
      const myHeader = new Headers();
      myHeader.append("Api-Key", "service.1ca06931c21c4de985a8b6964fb10ae2");

      const res = await fetch(
        `https://api.neshan.org/v5/reverse?lat=${location.lat}&lng=${location.lng}`,
        { headers: myHeader }
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
      console.log(result);
    } catch (error) {
      if (typeof error === "string") {
        return toast.error(error);
      } else {
        return toast.error("مشکلی پیش اومد شرمنده");
      }
    } finally {
      setLoading(false);
      setStep(1);
    }
  };

  return (
    <MapContext
      value={{ location, setLocation, getLocation, address, loading, step }}
    >
      {children}
    </MapContext>
  );
};

export const useLocation = () => {
  const data = useContext(MapContext);
  if (!data) {
    throw Error("this component dont have access to context!");
  }
  return data;
};
