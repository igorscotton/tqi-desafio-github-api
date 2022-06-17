import { useState, createContext, useContext } from "react";

const UserRepoContext = createContext();

export const UserRepoProvider = ({children}) => {
    const [repositories, setRepositories] = useState([]);
    
    
    return(
        <UserRepoContext.Provider value={{repositories, setRepositories}}>
            {children}
        </UserRepoContext.Provider>
    )
}

export const useUserRepo = () =>  useContext(UserRepoContext)