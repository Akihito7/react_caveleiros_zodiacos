
import { Container } from './style';
import { Header } from '../../components/header';
import img from '../../imagens/lupa.png'
import img2 from '../../imagens/imagemCavaleiros.jpeg'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

export function PageInitial(){

    const navigate = useNavigate();

    const [ name,setName ] = useState();

    function buscarInfo(name){
        navigate(`/cavaleiros/${name}`);
    }

    return(

       <Container>
        <Header></Header>

         <main>
            <div className="firstScreen">

                <div className="infoFirstScreen">
                <h1>Você é um fã apaixonado de <span>Os Cavaleiros do Zodíaco?</span></h1>
                <h2>e está procurando <span>informações detalhadas sobre os lendários Cavaleiros de Ouro?</span> Então você veio ao lugar certo! Aqui, você encontrará um guia completo para desvendar todos os segredos desses guerreiros lendários</h2>
                <a href="#pesquiseAqui"><button>Experimente agora</button></a>
                </div>
                
            </div>

            <div className="secondScreen">

                <div className="imagemSecondScreen">

                    <img  src={img2}alt="imagem de os cavaleiros do zodiacos" />

                </div>
                  <div className="searchSecondScreen">

                <div className="searchButtonSecondScreen"> 

                <input onChange={(event)=> setName(event.target.value)} id="pesquiseAqui"type="text" placeholder="Pesquise Aqui"/>

                <button class="buttonSearch">
                    <img class="ney" src={img}  alt="imagem de uma lupa na cor laranja" 
                    onClick={() => {
                        buscarInfo(name);
                    }}/>
                </button>
                </div>

                <div class="phraseSecondScreenSearch">

                        <h3>
                            "Somente aqueles que ja dessistiram de viver acham que os sonhos são impossíveis... Para nós os sonhos jamais serão impossíveis"
                        </h3>

                        <h4>- Hyoga de Cisne</h4>
                     </div>

                  </div>
            </div>
         </main>
        </Container>

    )

}