import { styled } from "styled-components";

export const AboutContainer = styled.div`
  max-width: 1300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 16px;
  gap: 20px;

  p {
    color: var(--black);
    font-size: 26px;
    width: 60%;
    font-family: 'Roboto Condensed', sans-serif;
    text-align: center;
  
    
    @media (max-width: 1024px){
    font-size: 24px;
  }

  @media (max-width: 768px){
    width: 100%;
  }
  }

  p span {
    font-weight: 600;
    @media (max-width: 1024px){
    font-size: 24px;
  }
  }
`;


export const BenefitsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
  height: auto;

  @media (max-width: 768px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    align-items: center;
    justify-items: center;
    gap: 20px;
  }

  @media (max-width: 415px){
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
`;

export const BenefitContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  border: 1px solid var(--white-menus);
  background-color: #E5E5E1;
  box-shadow: -3px 6px 6px #f5aab0;
   border-radius: 500px;
  padding: 10px 5px;
  backdrop-filter: blur(5px);
  transform: scale(1);
  transition: all 0.3s ease;

  p {
     padding-top: 15px;
    font-size: 14px;
    font-weight: 500;
    color: black;
    font-family: 'Roboto Condensed', sans-serif;
    pointer-events: none;
  }

  &:hover {
    transform: scale(1.04);
    filter: drop-shadow(4px 4px 10px #e4717a);
  }

  @media (max-width: 1030px){
    width: 180px;
    height: 180px;
  }
`;
