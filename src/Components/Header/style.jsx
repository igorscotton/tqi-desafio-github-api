import styled from 'styled-components';

export const HeaderS = styled.header`
    height: 60px;
    display: flex;
    align-items: center;
    gap: 30px;
    background-color: #000;
`

export const InputS = styled.input`
    width: 100%;
    padding: 5px 10px;
    margin-left: 10px;
    border: none;
    border-radius: 8px;    
`

export const ButtonS = styled.button`
    padding: 5px 10px;
    margin-right: 10px;
    border: none;
    border-radius: 8px;
    background-color: #628fdb;
    color: #fff;
    font-weight: bold;

    &:hover{
        filter: brightness(0.5)
    }
`