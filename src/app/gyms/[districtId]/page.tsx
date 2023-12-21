"use client";

import Filters from "@/Components/filters";
import GymCard from "@/Components/gym-card";
import { useParams, usePathname } from "next/navigation";

const Gyms = () => {
  const { districtId } = useParams();

  return (
    <div className="bg-slate-200 pt-40">

    <div className="w-8/12 h-[100rem] mx-auto">
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-black/10 p-5 rounded-xl shadow-lg">
          <Filters></Filters>
        </div>
        <div className="col-span-3 ">
          <GymCard></GymCard>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Gyms;
