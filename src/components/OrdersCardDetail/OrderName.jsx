import { FaMapPin, FaMapSigns, FaPhone } from "react-icons/fa";
import {
  OrderNameBot,
  OrderNameContainer,
  OrderNameMid,
  OrderNameText,
} from "./OrdersCardDetailStyles";

const OrderName = ({ users, orderID }) => {
  return (
    <OrderNameContainer>
      <h2>Pedido #{orderID} </h2>
      <OrderNameText>{users.name}</OrderNameText>

      <OrderNameMid>
        <FaPhone color="pink" />
        <p>
          <b>Teléfono:</b> {users.phone}
        </p>
        <FaMapSigns color="pink" />
        <span>
          <b>Localidad:</b> {users.location}
        </span>
      </OrderNameMid>

      <OrderNameBot>
        <FaMapPin color="pink"/>
        <p>Dirección: {users.adress}</p>
      </OrderNameBot>
    </OrderNameContainer>
  );
};
export default OrderName;
