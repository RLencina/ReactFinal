import {
  ContactContainer,
  ContactInput,
  ContactLabel,
  ContactLeftDiv,
  ContactRightDiv,
  ContactTitle,
  ContainInput,
  ContainerInputs,
  SubmitBtn,
  SubmitContainer
} from "./ContactStyles";

import { FaCheckCircle } from "react-icons/fa";
import { contactForm } from "../../data/contactNewsLetterForm";
import { useState } from "react";

const Contact = () => {
  const [toggleSubmit, setToggleSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setToggleSubmit(!toggleSubmit);
  };

  return (
    <ContactContainer>
      

      <ContactRightDiv>
        <h2>Enterate de todo lo nuevo!</h2>
        <form onSubmit={handleSubmit}>
          {!toggleSubmit ? (
            <ContainerInputs>
              {contactForm.map((input) => (
                <ContainInput key={input.id}>
                  <ContactLabel htmlFor={input.name}>
                    {input.label}
                  </ContactLabel>
                  <ContactInput
                    type={input.type}
                    placeholder={input.placeholder}
                    id={input.name}
                    required={true}
                  />
                </ContainInput>
              ))}
              <SubmitBtn type="submit" value="Quiero recibir las novedades" />
            </ContainerInputs>
          ) : (
            <SubmitContainer>
              <button
                title="Volver"
                onClick={() => setToggleSubmit(!toggleSubmit)}
              >
                <FaCheckCircle/>
              </button>
              <h3>
                Te estaremos enviando las novedades!
              </h3>
            </SubmitContainer>
          )}
        </form>
      </ContactRightDiv>
      <ContactLeftDiv>
        <ContactTitle>Contactanos!</ContactTitle>
        <span>Av. Belgrano 1227, Mendoza</span>
        <span>Tel: 2623392265</span>
        <span>Redes: Popular.sport </span>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.408746427063!2d-68.85158132449075!3d-32.88735967361781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e090371b8eba9%3A0x725138bf6ff069c3!2sAv.%20Belgrano%201227%2C%20M5500FIY%20Mendoza!5e0!3m2!1ses!2sar!4v1689643189299!5m2!1ses!2sar"
          loading="lazy"
        ></iframe>
      </ContactLeftDiv>
      
    </ContactContainer>
  );
};
export default Contact;
