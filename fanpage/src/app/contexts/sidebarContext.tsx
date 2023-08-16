'use client'
import React, { createContext, useState, useContext } from 'react';

interface SidebarContextType {
  isOpen: boolean;
  handleMenuToggle: () => void;
}

const SidebarContext = createContext<SidebarContextType>({
  isOpen: false,
  handleMenuToggle: () => { },
});

export const useSidebarContext = () => useContext(SidebarContext);

interface SidebarProviderProps {
  children: React.ReactNode;
}

export const SidebarProvider: React.FC<SidebarProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <SidebarContext.Provider value={{ isOpen, handleMenuToggle }}>
      {children}
    </SidebarContext.Provider>
  );
};
