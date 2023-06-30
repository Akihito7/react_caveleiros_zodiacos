import { Container } from "./style";
import { Header } from '../../components/header';
import { api } from '../../axios';
import { useRef, useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export function AboutKnights(){ 

    const menuHeader = document.getElementById("iconeMenu");
    const headerComponente = document.getElementById("headerComponente");

    const [mounted,setMounted] = useState(false);
    
    const params = useParams();

    const [ infoCavaleiros, setInfoCavaleiros ] = useState({});

    const img = `${api.defaults.baseURL}/files/${infoCavaleiros.image}`
    
    async function takeInfos(){
        
        const response = await api.get(`/cavaleiros/${params.name}`);

        const infoKnights = response.data;

        setInfoCavaleiros(infoKnights);

    }

 

    function menuToggle() {
       if(headerComponente.classList.contains("open")){
        headerComponente.classList.remove("open");
        menuHeader.innerHTML = "menu"
       }
       else{
        headerComponente.classList.add("open");
        menuHeader.innerHTML = "close"
       }

    }
    
    useEffect( () => {   
        
        if(mounted){

            menuHeader.addEventListener("click", menuToggle);
            
            takeInfos();  
        }
        else{
            setMounted(true);
        }
},[mounted])
      
    return(

        <Container>
            <Header></Header>

            <main>
            <span id="iconeMenu"className ="material-symbols-outlined">
                       menu
                     </span>
                <div className="photo">
                    <img src={img} alt="imagem do afrodite de peixes" />
                </div>
                <div className="about">
                    <ul>
                        <li>Nome: <span>{infoCavaleiros.nome}</span></li>
                        <li>Idade: <span>{infoCavaleiros.idade}</span></li>
                        <li>Sobre: <span>{infoCavaleiros.sobre}</span></li>
                        <li>Poderes: <span>{infoCavaleiros.poderes}</span></li>
                        <li>Classificação: <span>{infoCavaleiros.classificacao}</span></li>
                        <li>Potencial Destrutivo: <span>{infoCavaleiros.potencial_destrutivo}</span></li>
                        <li>Alcance: <span>{infoCavaleiros.alcance}</span></li>
                        <li>Resistência: <span>{infoCavaleiros.resistencia}</span></li>
                        <li>Força do impacto: <span>{infoCavaleiros.forca_impacto}</span></li>
                        <li>Estamina: <span>{infoCavaleiros.estamina}</span></li>
                        <li>Inteligência: <span>{infoCavaleiros.inteligencia}</span></li>
                        <li>Mentalidade: <span>{infoCavaleiros.mentalidae}</span></li>
                        <li>Força física: <span>{infoCavaleiros.forca_fisica}</span></li>
                    </ul>

                </div>
                
            </main>
        </Container>

    )
}
