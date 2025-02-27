import AddressForm from "@/app/components/AddressForm";
import Map from "@/app/components/map/Map";
import { useLocation } from "@/app/context/mapContext";
import React from "react";

const Address = () => {
  const { step } = useLocation();
  return <>{step === 0 ? <Map /> : <AddressForm />}</>;
};

export default Address;
