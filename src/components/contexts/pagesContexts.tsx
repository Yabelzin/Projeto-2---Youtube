import { createContext, useState } from "react";

export const PagesContext = createContext({} as any);

export const PagesContextStore = ({children}: any) => {
    const [turnMenu, setTurnMenu] = useState(false)
    const [seeChannels, setSeeChannels] = useState(false)

    return (
        <PagesContext.Provider value={{turnMenu, setTurnMenu, seeChannels, setSeeChannels}}>
            {children}
        </PagesContext.Provider>
    )
} 