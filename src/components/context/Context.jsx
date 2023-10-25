import React, { useContext, createContext, useState } from "react";

export const StateContext = createContext();

var initialState = {
    openedMenu: false,
    dataEntries: []
}

export const ContextProvider = ({ children }) => {
    const [openedMenu, setOpenedMenu] = useState(initialState.openedMenu)

    return (
        <StateContext.Provider value={{openedMenu, setOpenedMenu}}>
            {children}
        </StateContext.Provider>
    );
}

export const useStateContext = () => useContext(StateContext)