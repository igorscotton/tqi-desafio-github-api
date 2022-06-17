import {HeaderS, InputS, ButtonS} from './style';
import { api } from '../../services/api';
import { useUserGitHub } from '../../Providers/UserGItHub';
import { useState } from 'react';
import { useUserRepo } from '../../Providers/UserRepo';
import { useUserStarred } from '../../Providers/UserStarred';

const Header = () => {

    const {setUser} = useUserGitHub();
    const {setRepositories} = useUserRepo();
    const {setStarred} = useUserStarred();
    const [value, setValue] = useState();

    const OnSearch = (e) => {
        setValue(e.target.value)
    }

    const handleSearch = async () => {
        const response = await api.get(value);
        const data = response.data;
        setUser(data)

        const repositorieResponse = await api.get(`${value}/repos`);
        const repositorieData = repositorieResponse.data;
        setRepositories(repositorieData)
        
        const starredResponse = await api.get(`${value}/starred`);
        const starredData = starredResponse.data;
        setStarred(starredData)

        console.log(data, repositorieData, starredData)
    }
    
    return (
        <HeaderS>
            <InputS type="text" onChange={OnSearch}/>
            <ButtonS type='submit' onClick={handleSearch}>Buscar</ButtonS>
        </HeaderS>
    )
}

export default Header