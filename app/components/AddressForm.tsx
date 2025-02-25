"use client";
import React, { useEffect, useState } from "react";
import { useLocation } from "../context/mapContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addressSchema } from "../schema/user";
import { states } from "../utils/lists";
import { toast } from "react-toastify";

const AddressForm = () => {
  const { step, address } = useLocation();
  const [loadingCities, setLoadingCities] = useState(false);
  const [cities, setCities] = useState<
    | {
        id: number;
        name: string;
        state_id: number;
      }[]
    | []
  >([]);
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(addressSchema),
  });

  const getCities = async (stateId: string) => {
    try {
      setLoadingCities(true);
      const res = await fetch(`http://localhost:3000/api/city/${stateId}`, {
        headers: { "Content-Type": "application/json" },
      });

      const result = await res.json();
      console.dir(result);
      if (res.ok) {
        setCities(result.cities);
      }
    } catch (error) {
      toast.error("مشکلی در سرور پیش اومده!");
    } finally {
      setLoadingCities(false);
    }
  };

  return (
    <form className="container mx-auto">
      <div className="flex flex-col items-center justify-center gap-5">
        <div className="min-w-80 md:w-96">
          <label className="label font-semibold">label</label>
          <select
            title="state"
            name="state"
            onChange={(e) => {
              getCities(e.target.value);
            }}
            // {...register("state")}
            value={address.state}
            className="select select-accent w-full max-w-md"
          >
            <option selected>انتخاب استان</option>
            {states.map(({ id, state }) => (
              <option value={id} key={id}>
                {state}
              </option>
            ))}
          </select>
        </div>

        <div className="min-w-80 md:w-96">
          <label className="label font-semibold">label</label>
          <select
            {...register("city")}
            value={address.state}
            className="select select-accent w-full max-w-md"
          >
            <option selected>انتخاب شهر</option>
            {cities.map((s, i) => (
              <option value={s.name} key={i}>
                {s.name}
              </option>
            ))}
          </select>
        </div>

        <div className="min-w-80 md:w-96">
          <label className="label font-semibold">label</label>
          <input
            {...register("neighbourhood")}
            value={address.state}
            className="input input-accent w-full max-w-md"
          />
        </div>

        <div className="min-w-80 md:w-96 col-span-">
          <label className="label font-semibold">label</label>
          <input
            {...register("fullAddress")}
            value={address.state}
            className="input input-accent w-full max-w-4xl"
          />
        </div>

        <div className="min-w-80 md:w-96">
          <label className="label font-semibold">label</label>
          <input
            {...register("houseNumber")}
            value={address.state}
            className="input input-accent w-full max-w-md"
          />
        </div>

        <div className="min-w-80 md:w-96">
          <label className="label font-semibold">label</label>
          <input
            {...register("residentialUnit")}
            value={address.state}
            className="input input-accent w-full max-w-md"
          />
        </div>

        <button type="submit">تایید آدرس</button>
      </div>
    </form>
  );
};

export default AddressForm;
