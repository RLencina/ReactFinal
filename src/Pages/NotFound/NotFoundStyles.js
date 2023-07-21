import { styled } from "styled-components";
import BackgroundIMG from "../../assets/imgs/notfound/bg-img.avif";

export const NotFoundContainer = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url("${BackgroundIMG}");
  width: 100%;
  height: calc(100vh - 80px);
  padding: 40px 60px;
  gap: 40px;

  h1 {
    text-align: center;
    font-family: "Under-Rated";
    width: 30%;
    font-size: 20px;
    color: black;

    @media (max-width: 1024px){
        font-size: 28px;
        width: 90%;
    }
    @media (max-width: 768px){
        font-size: 24px;
        width: 95%;
    }
    @media (max-width: 480px){
        font-size: 20px;
        width: 100%;
    }
  }

  button {
    width: 30%;
    border: none;
    outline: none;
    padding: 5px 10px;
    color: white;
    font-size: 20px;
    background-color: grey;
    text-align: center;
    cursor: pointer;
    border-radius: 25px;
    font-weight: 600;
    transition: all ease .2s;

    &:hover{
        background-color: pink;
        color: black;
    }

    @media (max-width: 768px){
        font-size: 22px;
        width: 60%;
    }
    @media (max-width: 480px){
        font-size: 20px;
        width: 80%;
    }
  }

  @media (max-width: 768px){
    padding: 40px 20px;
  }

  @media (max-width: 480px){
    padding: 20px;
  }
`;

