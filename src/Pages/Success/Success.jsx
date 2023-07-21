import {
  SuccesDivider,
  SuccesOrder,
  SuccessContainer,
  SuccessBtns,
} from "./SuccessStyles";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const Success = () => {
  useEffect(() => {
    document.title = "¡Muchas gracias!";
    successRef.current.scrollIntoView();
  }, []);

  const orderID = useSelector((state) => state.orders.orderID);
  const successRef = useRef();

  const navigate = useNavigate();
  return (
    <SuccessContainer ref={successRef}>
      <h1>¡Muchas gracias por elegirnos!</h1>

      <SuccesDivider>
        <h2>Vas a estar recibiendo todo el detalle de tu compra en el Mail</h2>
      </SuccesDivider>

      <SuccesOrder>
        <h3>Pedido: </h3>
        <span>#{orderID}</span>
      </SuccesOrder>

      <SuccessBtns>
        <button onClick={() => navigate("/#products")}>Volver a página principal</button>

        <button onClick={() => navigate("/orders")}>Mis Pedidos</button>
      </SuccessBtns>
    </SuccessContainer>
  );
};
export default Success;
