"use client";

import { UseQueryResult, useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";

type Division = {
  created_at: Date;
  created_by: string;
  updated_at: Date;
  updated_by: string;
  is_active: boolean;
  id: string;
  name: string;
};

type District = {
  created_at: Date;
  created_by: string;
  updated_at: Date;
  updated_by: string;
  is_active: boolean;
  id: string;
  name: string;
};

export default function Home() {
  const [divisionId, setDivisionId] = useState<string>("");
  const [activeButton, setActiveButton] = useState<string>("");

  function getDivisions(): Promise<Division[]> {
    return axios
      .get((process.env.NEXT_PUBLIC_BACKEND_URL as string) + "division/all")
      .then(({ data }) => data)
      .catch((error) => console.log(error, "error"));
  }

  const { data: divisions, isLoading: divisionsLoading } = useQuery({
    queryKey: ["divisions"],
    queryFn: getDivisions,
  });

  function getDistrict(divisionId: string): Promise<District[]> {
    setActiveButton((prevActiveButton: string) =>
      prevActiveButton === divisionId ? "" : divisionId
    );

    return axios
      .get(
        (process.env.NEXT_PUBLIC_BACKEND_URL as string) +
          `district/all-by-division/${divisionId}`
      )
      .then(({ data }) => data)
      .catch((error) => console.log(error, "error"));
  }

  const getButtonColor = (divisionId: string) => {
    return activeButton === divisionId ? "bg-slate-300" : "bg-slate-100";
  };

  const { data: districts, isLoading: districtsLoading } = useQuery({
    queryKey: ["districts", divisionId],
    queryFn: () => getDistrict(divisionId),
    enabled: !!divisionId,
  });

  return (
    <div className="bg-slate-100">
      <div className="text-5xl text-center pt-24   font-bold">Gym Finder</div>
      <div className="text-2xl text-center p-10  font-bold">
        Please select a Division then select a District
      </div>
      <div className=" flex flex-row  justify-center ">
        <div>
          {divisionsLoading && !divisions?.length ? (
            "loading"
          ) : (
            <div className=" p-1">
              {divisions?.map((division: Division) => (
                <div
                  onClick={() => setDivisionId(division.id)}
                  className={`grid grid-cols-1 p-2 m-1.5 w-40 hover:shadow-lg transition  rounded-lg cursor-pointer ${getButtonColor(
                    division.id
                  )}`}
                  key={division.id}
                >
                  {division.name}
                </div>
              ))}
            </div>
          )}
        </div>
        <div>
          {districtsLoading && !districts?.length ? (
            "loading"
          ) : (
            <div className=" p-1">
              {districts?.map((district: District) => (
                <Link
                  href={`gyms/${district.id}`}
                  className="grid grid-cols-1 p-2 m-1.5 w-40 bg-slate-300 hover:bg-slate-400 hover:shadow-lg rounded-lg cursor-pointer "
                  key={district.id}
                >
                  {district.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
