"use client";
import React, { useState } from "react";
import { useLocation } from "../context/mapContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addressSchema } from "../schema/user";
import { getStateId, states } from "../utils/lists";
import { toast } from "react-toastify";

const AddressForm = () => {
  const { address, setAddress } = useLocation();
  const [loadingCities, setLoadingCities] = useState(false);
  const [cities, setCities] = useState<
    | {
        id: number;
        name: string;
        state_id: number;
      }[]
    | []
  >([]);
  const { register, handleSubmit, setValue, getValues } = useForm({
    resolver: zodResolver(addressSchema),
  });

  const getCities = async (name: string) => {
    try {
      setLoadingCities(true);
      const stateId = getStateId(name);
      console.log(stateId);
      const res = await fetch(`http://localhost:3000/api/city/${stateId}`, {
        headers: { "Content-Type": "application/json" },
      });

      const cities = await res.json();
      if (res.ok) {
        setCities(cities);
      }
    } catch (error) {
      toast.error("مشکلی در سرور پیش اومده!");
    } finally {
      setLoadingCities(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setAddress((prev) => ({
      ...prev,
      [name]: value,
    }));
    setValue(name, value);
  };

  return (
    <form className="container mx-auto">
      <div className="flex flex-col items-center justify-center gap-5">
        <div className="min-w-80 md:w-96">
          <label className="label font-semibold">استان</label>
          <input
            value={address.state}
            title="state"
            name="state"
            onChange={(e) => {
              handleChange(e);
              getCities(e.target.value);
            }}
            // {...register("state")}
            className="input input-accent w-full max-w-md"
            list="states"
          />{" "}
          <datalist id="states">
            {states.map(({ id, state }) => (
              <option key={id}>{state}</option>
            ))}{" "}
          </datalist>
        </div>

        {!loadingCities ? (
          <div className="min-w-80 md:w-96">
            <label className="label font-semibold">شهر</label>
            <input
              value={address.city}
              name="city"
              title="city"
              onChange={(e) => {
                handleChange(e);
              }}
              className="input input-accent w-full max-w-md"
              list="cities"
            />
            <datalist id="cities">
              {cities.map((s, i) => (
                <option key={i} value={s.name}>
                  {s.name}
                </option>
              ))}{" "}
            </datalist>
          </div>
        ) : (
          <div className="loading loading-dots text-accent"></div>
        )}

        <div className="min-w-80 md:w-96">
          <label className="label font-semibold">محله</label>
          <input
            name="neighbourhood"
            title="neighbourhood"
            onChange={(e) => handleChange(e)}
            value={address.neighbourhood}
            className="input input-accent w-full max-w-md"
          />
        </div>

        <div className="min-w-80 md:w-96 col-span-">
          <label className="label font-semibold">آدرس کامل</label>
          <input
            name="fullAddress"
            title="fullAddress"
            onChange={(e) => handleChange(e)}
            value={address.fullAddress}
            className="input input-accent w-full max-w-4xl"
          />
        </div>

        <div className="min-w-80 md:w-96">
          <label className="label font-semibold">پلاک</label>
          <input
            name="houseNumber"
            title="houseNumber"
            onChange={(e) => handleChange(e)}
            className="input input-accent w-full max-w-md"
          />
        </div>

        <div className="min-w-80 md:w-96">
          <label className="label font-semibold">واحد</label>
          <input
            name="residentialUnit"
            title="residentialUnit"
            onChange={(e) => handleChange(e)}
            className="input input-accent w-full max-w-md"
          />
        </div>

        <button type="submit">تایید آدرس</button>
      </div>
    </form>
  );
};

export default AddressForm;
