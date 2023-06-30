import styled from '@emotion/styled'
import img from '../../imagens/background.jpg'
import { COLORS } from '../../theme/COLORS'
import img2 from "../../imagens/backgroudSearch.jpg"

export const Container = styled.div`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
font-family: 'Anton', sans-serif;
display: flex;
align-items: center;
flex-direction: column;
min-height: 100vh;
width: 100vw;

main{
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.firstScreen{
    width: 100vw;
    height: 100vh;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3rem;

}
.infoFirstScreen{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    color: white;
    padding: 0 10rem;
}
h1{
    font-size: 4rem;
}
h2{
    font-size: 2.5rem;
    text-align: justify;
}
span{
    color: #fc7f03;
}
button{
    font-size: 1.8rem;
    border-radius: 0.5rem;
    font-family: 'Anton', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20rem;
    height: 5rem;
    border: none;
    background-color:  #fc7f03;
    color: white;
    padding: 0 1remm;
    cursor: pointer;
    transition: 300ms;
}
button:hover{
    transform: scale(1.1);
}
a{
    text-decoration: none;
}
.secondScreen{
    width: 100vw;
    display: flex;
    padding: 2rem;
    background: rgb(255,68,13);
    background: linear-gradient(90deg, rgba(255,68,13,1) 29%, rgba(87,25,4,1) 60%, rgba(0,0,0,1) 100%);
    justify-content: center;
    gap: 2rem;

}
.imagemSecondScreen{
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
}
.imagemSecondScreen img{
    border-radius: 1rem;
    height: 700px;
    width: 100%;
    object-fit: cover;
}
.searchSecondScreen{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
    padding: 0 5rem;
}
.searchButtonSecondScreen{
    display: flex;
    width: 100%;
    padding: 2rem;
    justify-content: center;
}
.searchButtonSecondScreen img{
    width: 30px;
}
#pesquiseAqui{
    width: 90%;
    border: none;
    border-radius: 1rem 0 0 1rem;
    outline: none;
    padding:  0 2rem ;
}
#pesquiseAqui::placeholder{
    padding: 10%;
    font-family: 'Anton', sans-serif;
    text-align: center;
    }

.buttonSearch{
    width: 4rem;
    border-radius: 0 1rem 1rem 0;
}
.phraseSecondScreenSearch{
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;

    >h3{
        font-size: 2rem;
        color: white;
    }
    >h4{
        font-size: 1.5rem;
        color: white;
    }
}




@media screen and (max-width: 768px){
    font-family: 'Anton', sans-serif;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    align-items: center; 

    #headerComponente{
        display: none;
    }
    .infoFirstScreen{
        font-size: 1rem
    }
    main{
        display: flex;
        flex-direction: column;
        width: 100vw;
        min-height: 100vh;
        align-items: center;
    }
    .firstScreen{
      background-image: url(${img});
      background-repeat: no-repeat;
      background-size: cover;
      color: white;
      width: 100%;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
    }
    .infoFirstScreen{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
        height: 80%;
        width: 100vw;
        padding: 2rem;
        gap: 2rem;
    }
    .secondScreen{
        width: 100vw;
        height: auto;
        background: linear-gradient(0deg, rgb(252, 127, 3), rgb(17, 19, 2));
        padding: 0;
    }
    .searchButtonSecondScreen{
        display: flex;
        flex-direction: row;
        width: 100vw;
        padding: 4rem 2rem;
    }
    #pesquiseAqui{
        padding: 0 2rem;
        width: 80%;
        height: 5rem;
        border-radius: 1rem 0 0 1rem;
        border: none;
        outline: none;
    }
    #pesquiseAqui::placeholder{
        padding: 1rem;
        font-family: 'Anton', sans-serif;
        text-align: center;
    }
    .buttonSearch{
        width: 20%;
        border-radius: 0 1rem 1rem 0;
    }
    .phraseSecondScreenSearch{
        color: white;
        width: 80vw;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        align-items: center;
        margin: 0 auto 2rem auto;
    }
    .imagemSecondScreen{
        display: none;
    }
    h1{
        font-size: 3rem;
    }
    h2{
        font-size: 2rem;
        text-align: justify;
    }
    h3{
        font-size: 2rem;
    }
    h4{
        font-size: 1.6rem;
    }
    span{
        color: #fc7f03;
    }
    button{
        font-size: 1.8rem;
        border-radius: 0.5rem;
        font-family: 'Anton', sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20rem;
        height: 5rem;
        border: none;
        background-color:  #fc7f03;
        color: white;
        padding: 0 1remm;
    }
    a{
        text-decoration: none;
    }
    img{
        width: 30px;
        color: white;
    }
  

}
`


