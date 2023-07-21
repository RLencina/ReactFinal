import { styled } from "styled-components";

export const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1500px;
  transition: all ease 0.2s;

  @media (max-width: 1100px) {
    max-width: 956px;
  }

  @media (max-width: 768px) {
    max-width: 600px;
  }

  @media (max-width: 480px) {
    max-width: 400px;
  }

  @media (max-width: 320px) {
    max-width: 320px;
  }
`;

