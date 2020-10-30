import React, { createContext, useReducer, useContext } from 'react'

export const StateContext = createContext()
export const StateProvider = ({
    reducer, initailState, children
}) => (
        <StateContext.Provider value={useReducer, (reducer, initailState)}>
            {children}{/*App.js */}
        </StateContext.Provider>
    )
export const useStateValue = () => useContext(StateContext)
