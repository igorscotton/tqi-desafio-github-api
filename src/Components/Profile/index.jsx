import { useUserGitHub } from '../../Providers/UserGItHub';
import { ProfileS, ImageS, Typograph, ProfileInfos, QuantityInfos, Info } from './style';

const Profile = () => {
    const {user} = useUserGitHub();
    
    return (        
        <ProfileS>
            <ImageS src={user && user.avatar_url} alt="Profile picture" />
            <ProfileInfos>
                <h1>{user && user.name}</h1>
                <Typograph>Username: <span>{user && user.login}</span>                   </Typograph>
                <Typograph>Company:  <span>{user && user.company}</span>                 </Typograph>
                <Typograph>Location: <span>{user && user.location}</span>                </Typograph>
                <Typograph>Blog:     <a href={user && user.blog}>{user && user.blog}</a> </Typograph>
                <QuantityInfos>
                    <Info>
                        <p>Followers</p>
                        <span>{user && user.followers}</span>
                    </Info>
                    <Info>
                        <p>Followings</p>
                        <span>{user && user.following}</span>
                    </Info>
                    <Info>
                        <p>Gists</p>
                        <span>{user && user.public_gists}</span>
                    </Info>
                    <Info>
                        <p>Repos</p>
                        <span>{user && user.public_repos}</span>
                    </Info>
                </QuantityInfos>
            </ProfileInfos>
        </ProfileS>
    )
}

export default Profile