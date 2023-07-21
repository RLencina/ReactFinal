import { styled } from "styled-components";

export const CardsProductsContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 20px 0px;
    flex-wrap: wrap;
    gap: 30px;
    transition: all ease 0.25s;
`

export const PaginationContainer = styled.div`
    display: flex;
    gap: 20px;
    width: 100%;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 768px){
        justify-content: center;
    }

    @media (max-width: 650px){
        align-items: flex-start;
    }
`
export const PaginateBtn = styled.button`
    display: flex;
    gap: 10px;
    font-size: 14px;
    font-weight: 500;
    align-items: center;
    padding: 8px 10px;
    border-radius: 10px;
    font-family: 'Roboto Condensed', sans-serif;
    outline: none;
    cursor: pointer;
    transition: all ease .1s;
    

    &:disabled{
        background-color: ${({secondary})=> (secondary && 'var(--grey-dark)')};
        color: ${({secondary})=> (secondary? 'var(--grey-light)' : 'var(--grey-dark)')};
        cursor: not-allowed;
        border-color: ${({secondary})=> (secondary? 'var(--grey-dark)' : 'var(--grey-light)')};
        transition: all ease-in .1s;
    }

    &:hover{
        opacity: 1;
        transition: all .1s ease;
    }

    @media (max-width: 650px){
        padding: 10px;
    }

    @media (max-width: 400px){
        font-size: 16px;
    }
`
