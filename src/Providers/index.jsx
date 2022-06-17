import { UserGitHubProvider } from "./UserGItHub";
import { UserRepoProvider } from "./UserRepo";
import { UserStarredProvider } from "./UserStarred";

const Providers = ({children}) => {
    return(
        <UserGitHubProvider>
            <UserRepoProvider>
                <UserStarredProvider>
                    {children}
                </UserStarredProvider>
            </UserRepoProvider>            
        </UserGitHubProvider>
    )
}

export default Providers