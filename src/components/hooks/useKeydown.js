import { useEffect, useRef } from "react";

export const useKeydown = () => {
    const ref = useRef(null);
 
    useEffect(() => {
        const handleKeydown = (event) => {
            if(event.key === "Escape"){
                buttonRef.current?.click();
            }
        }

            window.addEventListener("keydown" , handleKeydown);

            return () => {
                window.removeEventListener("keydown" , handleKeydown);
            }
    }, []);
             return ref;
}   