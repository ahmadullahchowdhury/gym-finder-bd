"use client";

import Filters from "@/Components/filters";
import GymCard from "@/Components/gym-card";
import { useParams, usePathname } from "next/navigation";

const Gyms = () => {
  const { districtId } = useParams();

  return (
    <div className="pt-40 bg-slate-200">

    <div className="w-8/12 h-[100rem] mx-auto">
      <div className="grid grid-cols-4 gap-4">
        <div className="p-5 shadow-lg  bg-black/10 rounded-xl md:col-span-2 lg:col-span-1">
          <Filters></Filters>
        </div>
        <div className="md:col-span-2 lg:col-span-3 ">
          <GymCard></GymCard>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Gyms;
