'use client'
import React, { useState, createContext, useContext, ReactNode } from "react";
import { MenuItem } from "../types/MenuItem";

interface RandomItemContextType {
    randomItem: MenuItem | null;
    setRandomItem: React.Dispatch<React.SetStateAction<MenuItem | null>>;
}

const RandomItemContext = createContext<RandomItemContextType | undefined>(undefined);

export const useRandomItem = () => {
    const context = useContext(RandomItemContext);
    if (!context) {
        throw new Error('useRandomItem must be used within a RandomItemProvider');
    }
    return context;
};

interface RandomItemProviderProps {
    children: ReactNode;
}

export const RandomItemProvider: React.FC<RandomItemProviderProps> = ({ children }) => {
    const [randomItem, setRandomItem] = useState<MenuItem | null>(null);

    return (
        <RandomItemContext.Provider value={{ randomItem, setRandomItem }}>
            {children}
        </RandomItemContext.Provider>
    );
};
