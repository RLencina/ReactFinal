import {
  FooterContainer,
  FooterLinks,
  FooterLink,
} from "./FooterStyles";


const Footer = () => {
  return (
    <FooterContainer>

      <FooterLinks>
        <FooterLink>Terminos y condiciones</FooterLink>

        <FooterLink>Tiendas</FooterLink>

        <FooterLink style={{ border: "none" }}>
          Politicas de privacidad
        </FooterLink>
      </FooterLinks>
      <span>Popular.Sport🏋️</span>
    </FooterContainer>
  );
};
export default Footer;
