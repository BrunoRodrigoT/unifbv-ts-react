import styled, { css } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const Label = styled.label`
    color: #1F1F1F;
    font-size: 1rem;
    margin-bottom: 0.2rem;
`

export const Input = styled.input<{ hasError: boolean }>`
    padding: 1rem;
    border-radius: 8px;
    border: 1px solid #1F1F1F;
    & :focus{
        border-color: lightblue;
        outline: 2px solid lightgreen;
    }
    & ::placeholder{
        color: #1F1F1F;
    }
    ${({ hasError }) => hasError && css`
    border-color: #DC2626;
    `} 
`

export const HelperText = styled.p`
    color: #DC2626;
    font-size: 0.8rem;
    margin-top: 0.5rem;
`