"use client";
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
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
    neighbourhood: string;
    fullAddress: string;
  };
  setAddress: Dispatch<
    SetStateAction<{
      state: string;
      city: string;
      neighbourhood: string;
      fullAddress: string;
    }>
  >;
};

const MapContext = createContext<context>({
  loading: false,
  step: 0,
  address: {
    city: "",
    neighbourhood: "",
    fullAddress: "",
    state: "",
  },
  getLocation: async () => {
    return "";
  },
  setAddress: () => {},
  location: { lat: 0, lng: 0 },
  setLocation: () => {},
});

export const MapContextConatiner = ({ children }: React.PropsWithChildren) => {
  const [address, setAddress] = useState({
    state: "",
    city: "",
    neighbourhood: "",
    fullAddress: "",
  });
  const [location, setLocation] = useState({ lat: 0, lng: 0 });
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    console.log(address);
  }, [address]);

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
        state: result.state.replace("استان", ""),
        neighbourhood: result.neighbourhood,
        fullAddress: result.formatted_address,
      });
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
      value={{
        location,
        setLocation,
        getLocation,
        address,
        loading,
        step,
        setAddress,
      }}
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
