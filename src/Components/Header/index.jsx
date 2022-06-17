import {HeaderS, InputS, ButtonS} from './style';
import { api } from '../../services/api';
import { useUserGitHub } from '../../Providers/UserGItHub';
import { useState } from 'react';

const Header = () => {

    const {user, setUser} = useUserGitHub();
    const [value, setValue] = useState();

    const OnSearch = (e) => {
        setValue(e.target.value)
    }

    const handleSearch = async () => {
        const response = await api.get(value);
        const data = response.data;
        setUser(data)
    }
    
    return (
        <HeaderS>
            <InputS type="text" onChange={OnSearch}/>
            <ButtonS type='submit' onClick={handleSearch}>Buscar</ButtonS>
        </HeaderS>
    )
}

export default Header