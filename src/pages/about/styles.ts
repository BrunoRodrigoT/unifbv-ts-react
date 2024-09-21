import styled from "styled-components";


export const Card = styled.div`
    display: flex;  
    align-items: center;
    background-color: #222222;
    border-radius: 8px;
    width: 500px;
`

export const Image = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 8px;
`

export const ContainerInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    color: white;
    font-size: 1.2rem;
`

export const ContentCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 2rem;
`