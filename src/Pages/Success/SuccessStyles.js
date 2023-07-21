import { styled } from "styled-components";
import BackgroundBG from "../../assets/imgs/success/bg-img.avif";
import { FaCheckCircle } from "react-icons/fa";

export const SuccessContainer = styled.div`
  margin-top: 30px;
  width: 100%;
  background-image: url("${BackgroundBG}");
  background-size: cover;
  background-repeat: no-repeat;
  padding: 50px 80px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 40px;

  h1 {
    font-family: "Under-Rated";
    color: #f03687;
    text-align: center;
    font-size: 25px;
    text-shadow: 1px 1px 1px var(--soft-black);

    @media (max-width: 1024px) {
      font-size: 36px;
    }
    @media (max-width: 768px) {
      font-size: 30px;
    }
    @media (max-width: 480px) {
      font-size: 26px;
    }
    @media (max-width: 400px) {
      font-size: 22px;
    }
  }

  @media (max-width: 1024px){
    padding: 40px 60px;
  }
  @media (max-width: 768px){
    padding: 40px;
    justify-content: center;
    gap: 70px;
  }

  @media (max-width: 480px){
    padding: 30px;
    gap: 50px;
    justify-content: center;
  }

  @media (max-width: 400px){
    padding: 20px;
  }
`;
export const SuccesDivider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  

  h2 {
    color: black;
    font-size: 15px;
    font-family: 'Roboto Condensed', sans-serif;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 24px;
    }
    @media (max-width: 480px) {
      font-size: 20px;
    }
  }

  @media (max-width: 550px){
    flex-wrap: wrap;
  }
`;

export const SuccessIcon = styled(FaCheckCircle)`
  font-size: 60px;
  color: var(--green-light);
  filter: drop-shadow(-3px 3px 2px var(--shadows));

  @media (max-width: 768px){
    font-size: 54px;
  }

  @media (max-width: 480px){
    font-size: 50px;
  }
`;

export const SuccesOrder = styled.div`
  background-color: white;
  box-shadow: -4px 4px 6px var(--shadows);
  min-width: 200px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
 

  h3 {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 24px;
    color: #ff0080;

    @media (max-width: 768px){
      font-size: 22px;
    }
    @media (max-width: 480px){
      font-size: 20px;
    }
    @media (max-width: 400px){
      font-size: 18px;
    }
  }

  span {
    color: black;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 22px;

    @media (max-width: 768px){
      font-size: 22px;
    }
    @media (max-width: 480px){
      font-size: 20px;
    }
  }

  @media (max-width: 768px){
    padding: 10px 15px;
  }
  @media (max-width: 480px){
    padding: 10px;
    min-width: fit-content;
  }
`;
export const SuccessBtns = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 8px;

  button:nth-child(2) {
    font-family: 'Roboto Condensed', sans-serif;
    color: black;
    background-color: white;
    

    &:hover {
      background-color: pink;
      font-family: 'Roboto Condensed', sans-serif;
      transition: all ease 0.2s;
      color: black;
    }
  }

  button {
    outline: none;
    border: none;
    background-color: white;
    color: black;
    padding: 10px 10px;
    border-radius: 25px;
    font-weight: 600;
    font-size: 17px;
    font-family: 'Roboto Condensed', sans-serif;
    cursor: pointer;
    filter: drop-shadow(-4px 4px 6px var(--shadows));

    transition: all ease-in 0.2s;

    &:hover {
      background-color: pink;
      transition: all ease 0.2s;
      color: black;
    }

    @media (max-width: 768px){
      padding: 10px 15px;
      font-size: 18px;
    }
    @media (max-width: 480px){
      padding: 10px;
      font-size: 16px;
    }
    @media (max-width: 400px){
      padding: 5px;
    }
  }

  @media (max-width: 768px){
    width: 60%;
  }
  @media (max-width: 480px){
    width: 80%
  }
`;
