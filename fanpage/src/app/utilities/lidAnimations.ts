export const moveLidUp = (backgroundRef: React.RefObject<HTMLImageElement>, setLidCovered: React.Dispatch<React.SetStateAction<boolean>>) => {
    if (backgroundRef.current) {
        backgroundRef.current.style.transition = "transform 500ms ease-in";
        backgroundRef.current.style.transform = "translateY(-25%)";
        setLidCovered(false);

    }
};

export const moveLidDown = (backgroundRef: React.RefObject<HTMLImageElement>, setLidCovered: React.Dispatch<React.SetStateAction<boolean>>) => {
    if (backgroundRef.current) {
        backgroundRef.current.style.transition = "transform 500ms ease-in";
        backgroundRef.current.style.transform = "translateY(0)";
        setLidCovered(true);
    }
};
