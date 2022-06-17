import { useState, createContext, useContext } from "react";

const UserGitHubContext = createContext();

export const UserGitHubProvider = ({children}) => {
    const [user, setUser] = useState();

    return(
        <UserGitHubContext.Provider value={{user, setUser}}>
            {children}
        </UserGitHubContext.Provider>
    )
}

export const useUserGitHub = () => useContext(UserGitHubContext)

