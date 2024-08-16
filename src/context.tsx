import React, { createContext } from "react";
interface ContextType {
    isLogin: boolean;
    setLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Context = React.createContext<ContextType | undefined>(undefined);
