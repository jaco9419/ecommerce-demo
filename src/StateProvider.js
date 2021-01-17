import { createContext, useContext, useReducer } from "react";

// Data layer
export const StateContext = createContext();

// Provider
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)} >
        {children}
    </StateContext.Provider>
)

// This is what I use it inside a component
export const useStateValue = () => useContext(StateContext);