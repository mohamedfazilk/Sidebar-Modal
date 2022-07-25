import React, { useState, useContext } from 'react'

const AppContext = React.createContext();  //creating a provider context

const AppProvider = ({children}) =>{
    return <AppContext.Provider  value='hello'>{children}</AppContext.Provider>
}

export {AppContext, AppProvider}

