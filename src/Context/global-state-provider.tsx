"use client";

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  ReactNode,
} from "react";

type GlobalContextType = {
  status: string;
  name: string;
  amenities: string;
  rating: string;
  priceRange: number[];
  gender: string;
  setAttribute: (name: string, value: any) => void;
};

type GlobalContextProviderType = {
  children: ReactNode;
};

const GlobalContext = createContext<GlobalContextType>({} as GlobalContextType);

export const GlobalContextProvider = ({
  children,
}: GlobalContextProviderType) => {
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [amenities, setAmenities] = useState("");
  const [rating, setRating] = useState("");
  const [gender, setGender] = useState("");
  const [priceRange, setPriceRange] = useState([20, 30]);

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
    }
  }

  const contextValue = {
    status,
    name,
    amenities,
    rating,
    priceRange,
    gender,
    setAttribute,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
