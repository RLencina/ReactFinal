import { useNavigate } from "react-router-dom"
import { NotFoundContainer } from "./NotFoundStyles"

const NotFound = () => {
const navigate = useNavigate()
  return (
    <NotFoundContainer>
        <h1>UPS.. ALGO SALIO MAL, PÁGINA INEXISTENTE🫠</h1>

        <button onClick={()=> navigate('/')}>Volver a página principal</button>
    </NotFoundContainer>
  )
}
export default NotFound