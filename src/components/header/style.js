import styled from '@emotion/styled'
import {COLORS} from '../../theme/COLORS'

export const Container = styled.div`

grid-area: header;
width: 100%;
height: 10vh;

color:white;

background-color: ${COLORS.BACKGROUND};
font-family: 'Anton', sans-serif;
display: flex;
align-items: center;
padding: 0 16rem;
justify-content: space-between;

>h1{
    color: ${COLORS.COLOR_TEXT};
    font-size: 3rem;
    cursor: pointer;
}
>ul{
    list-style: none;
   display: flex;
   flex-direction: row;
   gap: 3rem;
   >li{
       color:white;
       font-size: 2.5rem;
       cursor: pointer;
       transition: 300ms;
   
   }
   >li:hover{
       transform: scale(1.1);
   }
}

`