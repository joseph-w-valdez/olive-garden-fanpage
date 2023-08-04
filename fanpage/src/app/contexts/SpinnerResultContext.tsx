'use client'
import React, { useState, createContext, useContext, ReactNode } from "react";
import { MenuItem } from "../types/MenuItem";

interface FinalMenuItemContextType {
    finalMenuItem: MenuItem | null;
    setFinalMenuItem: React.Dispatch<React.SetStateAction<MenuItem | null>>;
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

    return (
        <FinalMenuItemContext.Provider value={{ finalMenuItem, setFinalMenuItem }}>
            {children}
        </FinalMenuItemContext.Provider>
    );
};
