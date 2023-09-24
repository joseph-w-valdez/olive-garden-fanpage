'use client'
import React, { useState, createContext, useContext, ReactNode } from "react";
import { MenuItem } from "../types/MenuItem";
import { LoggedOutProvider, useLoggedOutContext } from "./LoggedOutContext";
import { Bars } from 'react-loading-icons'

interface FinalMenuItemContextType {
    finalMenuItem: MenuItem | null;
    setFinalMenuItem: React.Dispatch<React.SetStateAction<MenuItem | null>>;
    isSpinning: boolean;
    setIsSpinning: React.Dispatch<React.SetStateAction<boolean | undefined>>;
}

const FinalMenuItemContext = createContext<FinalMenuItemContextType | undefined>(undefined);

export const useFinalMenuItem = () => {
    const context = useContext(FinalMenuItemContext);
    if (!context) {
        throw new Error('useFinalMenuItem must be used within a FinalMenuItemProvider');
    }
    return context;
};

interface FinalMenuItemProviderProps {
    children: ReactNode;
}

export const FinalMenuItemProvider: React.FC<FinalMenuItemProviderProps> = ({ children }) => {
    const [finalMenuItem, setFinalMenuItem] = useState<MenuItem | null>(null);
    const [isSpinning, setIsSpinning] = useState<boolean | undefined>(undefined);

    return (
        <FinalMenuItemContext.Provider value={{ finalMenuItem, setFinalMenuItem, isSpinning, setIsSpinning }}>
            {children}
        </FinalMenuItemContext.Provider>
    );
};
