import styled from '@emotion/styled'
import {COLORS} from '../../theme/COLORS'

export const Container = styled.div`

grid-area: header;
width: 100vw;
height: 10vh;

color:white;

background-color: ${COLORS.BACKGROUND};
font-family: 'Anton', sans-serif;
display: flex;
align-items: center;
padding: 0 2rem;

justify-content: space-evenly;

>h1{
    color: ${COLORS.COLOR_TEXT};
    font-size: 3rem;
    cursor: pointer;
}
>ul{
    list-style: none;
   display: flex;
   flex-direction: row;
   gap: 2rem;
   >li{
       color:white;
       font-size: 1.8rem;
       cursor: pointer;
       transition: 300ms;
   
   }
   >li:hover{
       transform: scale(1.1);
   }
}



`