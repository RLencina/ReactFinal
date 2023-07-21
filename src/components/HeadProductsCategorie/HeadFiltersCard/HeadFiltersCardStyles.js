import { styled } from "styled-components"

export const HeadFilterCard =  styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 350px;
  height: 350px;
  transition: all ease .2s;
  overflow: hidden;
  cursor: pointer;
  border-radius: 6px;
  border: 3px solid #ffbfb0;
  
  &:hover:nth-child(odd){
    transform: scale(1.048);
    transition: all 0.3s ease-in-out;
  }

  &:hover:nth-child(even){
    transform: scale(1.048);
    transition: all 0.3s ease-in-out;
  }



  @media (max-width: 1024px){
    width: 200px;
  }

  @media (max-width: 500px){
    width: 150px;
  }
`

export const HeadCardText = styled.h2`
  position: absolute;
  right: auto;
  left: auto;
  color: #f03687;
  text-shadow: 1px 1px 2px var(--shadows), -2px 2px 2px var pink;
  font-weight: 600;
  transition: all ease-in .2s;
  pointer-events: none;
  padding-top: 300px;

`
export const HeadCardImg = styled.img`
  width: 100%;
  height: 100%;
  
`
