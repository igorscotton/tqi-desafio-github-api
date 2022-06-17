import styled from 'styled-components'

export const ShowCaseS = styled.section`
    margin: 30px 30px 0 40px;
    padding: 20px;
`

export const ShowCaseCard = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    justify-content: space-around;
    margin-top: 30px;
    gap: 15px;
`

export const Button = styled.button`
    padding: 5px 10px;
    margin-right: 3px;
    border-radius: 3px;
    border: none;
    background-color: #628fdb;
    color: white;
    font-weight: bold;
`