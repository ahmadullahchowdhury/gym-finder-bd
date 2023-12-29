"use client";

import Filters from "@/Components/filters";
import GymCard from "@/Components/gym-card";
import { useGlobalContext } from "@/Context/global-state-provider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Gyms = () => {
  const { districtId } = useParams();

  const [gyms, setGyms] = useState([]);
  const [url, setUrl] = useState<string>("" as string);

  const { name, status, gender, priceMax, priceMin, rating, amenities } =
    useGlobalContext();

  async function getGymsByFilters(url: string) {
    return await axios
      .get(url)
      .then(({ data }) => data)
      .catch((error) => console.log(error, "error"));
  }

  useEffect(() => {
    let url =
      (process.env.NEXT_PUBLIC_BACKEND_URL as string) +
      "gym/filters?district_id=" +
      districtId;

    if (name) {
      url += "&name=" + name;
    }

    if (status) {
      url += "&business_status=" + status;
    }
    if (gender) {
      url += "&allowed_gender=" + gender;
    }
    if (priceMax & priceMin) {
      url += "&monthly_fee_start=" + priceMin + "&monthly_fee_end=" + priceMax;
    }
    if (rating.length) {
      url += "&rating=" + rating.join(",");
    }
    if (amenities.length) {
      url += "&attributes=" + amenities.join(",");
    }

    getGymsByFilters(url).then((res) => setGyms(res));
  }, [name, districtId, status, gender, priceMax, priceMin, rating, amenities]);
  console.log("gymData....", gyms);

  return (
    <div className="pt-40 bg-slate-200">
      <div className="w-8/12 h-[100rem] mx-auto">
        <div className="grid grid-cols-4 gap-4">
          <div className="p-5 shadow-lg bg-black/10 rounded-xl md:col-span-2 lg:col-span-1">
            <Filters></Filters>
          </div>
          <div className="md:col-span-2 lg:col-span-3 ">
            <GymCard gyms={gyms}></GymCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gyms;
