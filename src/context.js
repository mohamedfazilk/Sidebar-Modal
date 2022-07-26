import React, { useState, useContext } from 'react'

const AppContext = React.createContext();  //creating a provider context

const AppProvider = ({children}) =>{
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); //for opening & closing sidebar
    const [isModalOpen, setIsModalOpen] = useState(false);     //for opening & closing modal

    const openSidebar = () =>{
        setIsSidebarOpen(true)
    }

    const closeSidebar = () =>{
        setIsSidebarOpen(false)
    }
    

    const openmodal = () =>{
        setIsModalOpen(true)
    }

    const closemodal = () =>{
        setIsModalOpen(false)
    }
    
    

    return <AppContext.Provider  value='hello'>{children}</AppContext.Provider>
}

//custom hook
export const useGlobalContext =  () =>{
    return useContext(AppContext)
}

export {AppContext, AppProvider}

