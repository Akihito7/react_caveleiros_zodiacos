import styled from "@emotion/styled";
import { COLORS } from "../../theme/COLORS";

export const Container = styled.div`

width: 100vw;
height: 100vh;

grid-template-rows: 10vh 90vh;
grid-template-areas: "header main";
overflow: hidden;

>main{
    background-color: black;
    font-family: 'Anton', sans-serif;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-areas: "about photo";

    >.about{
        height: 100vh;
        color: white;
        background-color: ${COLORS.COLOR_TEXT};
        grid-area: about;
        overflow-y: auto;

        padding: 2rem 2rem 5rem 2rem;
        border-radius: 0 1rem 1rem 0;

        >ul{
            margin-top: 2rem;
            list-style: none;
            font-size: 2rem;
            margin-bottom: 2rem;

            li{
                margin-bottom: 1.8rem;
                
                text-align: justify;
            }

            span{
                font-size: 1.8rem;
            }
        }
    }
    >.photo{
        height: 100vh;
        grid-area: photo;
        background-color: black;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem;

        img{
            width: 80%;
            height: 100%;
            object-fit: cover;
        }
    }
}

`