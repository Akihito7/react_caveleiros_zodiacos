import styled from '@emotion/styled'
import img from '../../imagens/background.jpg'
import { COLORS } from '../../theme/COLORS'
import img2 from "../../imagens/backgroudSearch.jpg"

export const Container = styled.div`

box-sizing: border-box;
width: 100vw;
height: 100vh;



>main{
    width: 100%;
    height: 90vh;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center -100px;
    overflow-y: auto;
    overflow-x: hidden;

    >.mainPage{
        color:white;
        width: 80rem;
        margin:  0 auto 8.7rem;

        padding: 10rem 0 0 0;

        button{
    font-family: 'Anton', sans-serif;
    background-color: ${COLORS.COLOR_TEXT};
    border-radius: .5rem;
    width: 30rem;
    height: 5rem;
    border:none;
    color:white;
    font-size: 2rem;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 6rem auto 0;
    cursor: pointer;
    transition: 300ms;
}

   
    }
    >.mainPage h1{
        font-family: 'Anton', sans-serif;
        font-size: 4.5rem;
}
>.mainPage h2{
    margin-top: 4rem;
    font-family: 'Anton', sans-serif;
    font-size: 2.5rem;
    text-align: justify;
 
   
    
}
span{
    color: ${COLORS.COLOR_TEXT}

}

.mainPage button:hover{
    transform:scale(1.1);
}
a{
    text-decoration: none;
}
.searchMain{

display: grid;
width: 100vw;

grid-template-columns: 1fr 1fr;

grid-template-areas: "imagem search" ;


>.imagem{
    background-color: ${COLORS.BACKGROUND_ORANGE};
    grid-area: imagem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 0 ;
    width: 50vw;
>img{
    width: 50rem;
    height: 80rem;
    object-fit: cover;
    border-radius: 1rem;
}
}
}
.search{
    
    grid-area: search;
    background-image: url(${img2});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    gap: 40rem; 
    align-items: center;
    padding: 3rem;
    width: 50vw;

}
img{
    width: 3rem;
    height: 3rem;

    transition: 300ms;
}

input{
    outline: none;
    width: 50rem;
    height: 5rem;
    border-radius: 3rem 0 0 3rem;
    background-color: #313131;
    border: none;
    padding: 2rem;
    margin: 4rem 0 0 ;
    font-size: 2rem;
    color: white;
}
input::placeholder{
    color: ${COLORS.COLOR_TEXT};
    font-size: 2rem;
    font-family: 'Anton', sans-serif;
}
.searchButton{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  

    button{
        width: 10rem;
        height: 5rem;
        background-color: #313131;
        margin: 4rem 0 0 ;
        border-radius: 0 3rem 3rem 0;
        border: none;
    }
    img:hover{
        transform: scale(1.5);
    }
}
.phrase{
    display: flex;
    flex-direction: column;
    font-family: 'Anton', sans-serif;
    font-size: 2rem;
    width: 40rem;
    color: white;
    border-radius: 2rem;
    padding: 2rem;
    text-align: justify;
   
}
.phrase h4{
    align-self: flex-end;
    color: ${COLORS.COLOR_TEXT}
}

}
`