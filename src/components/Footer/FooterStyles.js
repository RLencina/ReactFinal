import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: #fbe3e3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 20px;
  gap: 20px;
  z-index: 1;
`;



export const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  @media (max-width: 480px){
    flex-direction: column;
    gap: 15px;
  }
`;

export const FooterLink = styled(Link)`
  color: #ff0080;
  padding: 0 10px;

  @media (max-width: 700px){
    text-align: center;
  }

  @media (max-width: 480px){
    border: none;
  }
`;
