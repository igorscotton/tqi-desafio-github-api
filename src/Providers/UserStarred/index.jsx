import { useState, createContext, useContext } from "react";

const UserStarredContext = createContext();

export const UserStarredProvider = ({children}) => {
    const [starred, setStarred] = useState([]);
    
    
    return(
        <UserStarredContext.Provider value={{starred, setStarred}}>
            {children}
        </UserStarredContext.Provider>
    )
}

export const useUserStarred = () =>  useContext(UserStarredContext)