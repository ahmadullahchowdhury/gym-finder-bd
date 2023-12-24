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
  gymStatus:string, 
  setGymStatus: any;
};

type GlobalContextProviderType = {
  children: ReactNode;
};

const GlobalContext = createContext<GlobalContextType>({} as GlobalContextType);

export const GlobalContextProvider = ({
  children,
}: GlobalContextProviderType) => {
    const [ gymStatus , setGymStatus] = useState('') ;
    const contextValue = { gymStatus, setGymStatus };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
