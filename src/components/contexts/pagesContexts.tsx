import { ReactNode, createContext, useState } from "react";

type PagesContextProps = {
    children: ReactNode;
};

type PagesContextType = {
    openMenu: boolean
    setOpenMenu: (newState: boolean) => void
};

const initialValue = {
    openMenu: false,
    setOpenMenu: () => {},
};

export const PagesContext = createContext<PagesContextType>(initialValue);

export const PagesContextsProvider = ({children}: PagesContextProps) => {
    const [openMenu, setOpenMenu] = useState(initialValue.openMenu);

    return (
        <PagesContext.Provider value={{openMenu, setOpenMenu}}>
            {children}
        </PagesContext.Provider>
    )
};