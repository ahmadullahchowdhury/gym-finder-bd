"use client";

import { AllowedGenderEnum } from "@/app/enum/allowed-gender.enum";
import { AttributeEnum } from "@/app/enum/attribute.enum";
import { BusinessStatusEnum } from "@/app/enum/business-status.enum";
import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  ReactNode,
} from "react";

type GlobalContextType = {
  priceMin: number;
  priceMax: number;
  status: "" | BusinessStatusEnum;
  name: string;
  amenities: AttributeEnum[];
  rating: string[];
  priceRange: number[];
  gender: "" | AllowedGenderEnum;
  setAttribute: (name: string, value: any) => void;
  reset: any;
  sliderValue: any;
  setSliderValue: any;
};

type GlobalContextProviderType = {
  children: ReactNode;
};

const GlobalContext = createContext<GlobalContextType>({} as GlobalContextType);

export const GlobalContextProvider = ({
  children,
}: GlobalContextProviderType) => {
  const [status, setStatus] = useState<BusinessStatusEnum | "">("");
  const [name, setName] = useState("");
  const [amenities, setAmenities] = useState<AttributeEnum[]>([]);
  const [rating, setRating] = useState<string[]>([]);
  const [gender, setGender] = useState<AllowedGenderEnum | "">("");
  const [priceRange, setPriceRange] = useState([]);

  const [priceMin, setPriceMin] = useState<number>(0);
  const [priceMax, setPriceMax] = useState<number>(0);

  const [sliderValue, setSliderValue] = useState([30, 50]);

  const reset = () => {
    console.log("clicked");
    setName("");
    setSliderValue([30, 50]);
    setAmenities([]);
    setRating([]);
    setStatus("");
    setGender("");
  };

  function setAttribute(name: string, value: any) {
    if (name === "name") {
      setName(value);
    } else if (name === "status") {
      setStatus(value);
    } else if (name === "amenities") {
      setAmenities(value);
    } else if (name === "rating") {
      setRating(value);
    } else if (name === "gender") {
      setGender(value);
    } else if (name === "priceRange") {
      setPriceRange(value);
    } else if (name === "priceMin") {
      setPriceMin(value);
    } else if (name === "priceMax") {
      setPriceMax(value);
    }
  }

  const contextValue = {
    status,
    priceMax,
    priceMin,
    name,
    amenities,
    rating,
    priceRange,
    gender,
    sliderValue,
    setSliderValue,
    setAttribute,
    reset,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
