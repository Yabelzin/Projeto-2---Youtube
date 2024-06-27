import { createContext, useState } from "react";

export const PagesContext = createContext();

export const PagesContextStore = ({children}) => {
    const [turnMenu, setTurnMenu] = useState(false)
    const [seeChannels, setSeeChannels] = useState(false)

    return (
        <PagesContext.Provider value={{turnMenu, setTurnMenu, seeChannels, setSeeChannels}}>
            {children}
        </PagesContext.Provider>
    )
} 