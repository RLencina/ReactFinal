import Select from "react-select";
import { styled } from "styled-components";

export const CardProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--white-menus);
  border: 1px solid var(--grey-dark);
  gap: 10px;
  box-shadow: 4px 4px 8px var(--shadows), -4px 4px 8px var(--shadows);
  width: 100%;
  max-width: 300px;
  height: 500px;
  border-radius: 10px;
 
`;

export const CardProductMidContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  color: black;
  gap: 8px;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 14px;
  align-items: center;
`;

export const CardProductPrices = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 5px;
  gap: 10px;
  color: #c63637;

  span {
    color: red;
    text-decoration: line-through;
    font-size: 14px;
  }

  p {
    color: blue;
    font-size: 5px;
    padding: 5px 5px 5px 20px;
    background-color: var(--grey-light);
    position: relative;
    border: 1px solid var(--black);
      font-family: 'Roboto Condensed', sans-serif;
  }

  p::before {
    content: "";
    position: absolute;
    right: auto;
    border: 1px solid var(--black);
    top: 8px;
    left: 4px;
    height: 8px;
    width: 8px;
    border-radius: 50%;
    background-color: var(--white);
  }
`;

export const CardProductBottomContainer = styled(CardProductMidContainer)``;

export const BtnAddToCart = styled.button = styled.button`
    width: 100%;
    padding: 5px 10px;
    color: black;
    border-radius: 15px;
    background-color: white;
    border: 2px solid #ff6961;
    font-size: 14px;
    font-weight: 600;
    font-family: 'Roboto Condensed', sans-serif;
    outline: none;
    transition: all ease .15s;
    cursor: pointer;

    &:hover{
      transition: all ease-in .15s;
      background-color: #ffbfb0 ;
    }
`

export const SelectStyled = styled(Select)`
  z-index: 2;
`
