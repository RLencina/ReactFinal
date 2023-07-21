import { styled } from "styled-components";
import WaveImg from '../../assets/imgs/hero/bg/wave.svg'

export const MainContainer = styled.main`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 80px;
`;


export const AllStoreWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeadProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
  max-width: 1300px;
  justify-content: center;
  align-items: center;
`;



export const TitleCategories = styled.h3`
  font-size: 25px;
  border-bottom: 1px solid red;
  padding-top: 80px;
  width: 100%;
  color: black;
  font-family: 'Roboto Condensed', sans-serif;
`;
export const ProductsWrapper = styled.section`
  max-width: 1300px;
  width: 100%;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px;
  min-height: 500px;
  padding-bottom: 80px;
`;

export const ProductsTitle = styled.h2`
  font-size: 25px;
  color: var(--black);
  padding: 10px;
  border-bottom: 1px solid red;
  font-family: 'Roboto Condensed', sans-serif;

  @media (max-width: 768px){
    font-size: 30px;
  }

  @media (max-width: 480px){
    font-size: 26px;
    text-align: center;
  }
`;

export const AboutWrapper = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 10px;
`;

export const ContactWrapper = styled.section`
  margin-top: -2px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  height: auto;
`;
