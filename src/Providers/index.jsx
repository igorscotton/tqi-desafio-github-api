import { UserGitHubProvider } from "./UserGItHub";

const Providers = ({children}) => {
    return(
        <UserGitHubProvider>
            {children}
        </UserGitHubProvider>
    )
}

export default Providers