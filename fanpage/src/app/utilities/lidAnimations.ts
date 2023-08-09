export const moveLidUp = (backgroundRef: React.RefObject<HTMLImageElement>, setLidCovered: React.Dispatch<React.SetStateAction<boolean>>) => {
    if (backgroundRef.current) {
        const translation = window.innerWidth > window.innerHeight
            ? "-25%" // Landscape orientation
            : "-12%"; // Portrait orientation
        backgroundRef.current.style.transform = `translateY(${translation})`;
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
