import { Container } from "./style"
import { useNavigate } from "react-router-dom"

export function Header(){

    const navigate = useNavigate();
   

    return (

        <Container id="headerComponente">
           <h1>Santuario dos Guerrerios</h1>
     
            <ul>
            <li onClick={() => navigate(-1)}>Home</li>
            <li>About-me</li>
            <li>Api</li>
           </ul>
        </Container>
    )
}