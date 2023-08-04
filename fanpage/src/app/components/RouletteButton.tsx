import React from 'react';

interface RouletteButtonProps {
  waiting: boolean;
  click: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function RouletteButton({ waiting, click }: RouletteButtonProps) {
  const buttonClassNames = {
    base: "absolute text-xl bottom-[10%] py-3 px-5 btn",
    background: waiting ? "bg-red-500 cursor-not-allowed" : "bg-black bg-opacity-50",
    border: "border-4 border-gray-300 rounded",
    hover: waiting ? "hover:bg-red-500" : "hover:bg-opacity-75",
    text: "text-white font-extrabold",
    pointerEvents: waiting ? "pointer-events-none" : "pointer-events-auto",
    activeBackground: waiting ? "active:bg-red-500" : "active:bg-opacity-75",
    shadow: "shadow-xl",
    activeShadow: "active:shadow-md",
  };

    return(
        <button
        className={`
                  ${buttonClassNames.base}
                  ${buttonClassNames.background}
                  ${buttonClassNames.border}
                  ${buttonClassNames.hover}
                  ${buttonClassNames.text}
                  ${buttonClassNames.pointerEvents}
                  ${buttonClassNames.activeBackground}
                  ${buttonClassNames.shadow}
                  ${buttonClassNames.activeShadow}`}
        onClick={click}
        disabled={waiting}
      >
        {waiting ? "WAIT" : "SPIN"}
      </button>
    ); 
}