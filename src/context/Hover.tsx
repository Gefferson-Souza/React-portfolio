import { useState, createContext, ReactNode } from "react";

interface IHoverContext {
    isHover: boolean;
    setIsHover: (isHover: boolean) => void;
}

interface HoverContextProviderProps {
    children: ReactNode;
}

export const HoverContext = createContext({} as IHoverContext);


export const HoverContextProvider = ({ children }: HoverContextProviderProps) => {

    const [isHover, setIsHover] = useState<boolean>(false);

    return (
        <HoverContext.Provider value={{ isHover, setIsHover }} >
            {children}
        </HoverContext.Provider>
    )
}