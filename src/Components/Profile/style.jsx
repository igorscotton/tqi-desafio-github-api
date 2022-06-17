import styled from 'styled-components';

export const ProfileS = styled.section`
    display: flex;
    align-items: center;
    margin: 30px 30px 0 30px;
    color: white;

    @media screen and (max-width: 600px){
        flex-direction: column;
        justify-content: center;
    }
`

export const ImageS = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 100%;
`

export const ProfileInfos = styled.div`
    margin-left: 20px;
`


export const Typograph = styled.p`
   margin: 0;
   line-height : 32px;
`

export const QuantityInfos = styled.div`
    display: flex;
    gap: 30px;

    @media screen and (max-width: 600px){
        font-size: 10px;
    }
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    

    p{
        margin: 10px 0 0 0;
        font-weight: bold;
    }
`