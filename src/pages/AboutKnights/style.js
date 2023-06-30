import styled from "@emotion/styled";
import { COLORS } from "../../theme/COLORS";

export const Container = styled.div`
font-family: 'Anton', sans-serif;
width: 100vw;
height: 100vh;
main{
    width: 100vw;
    height: 90vh;
    display: flex;
}
.about{
    padding: 2rem;
    width: 50%;
    height: 90vh;
    background-color: #fc7f03;
    overflow: auto;
}
.photo{
    padding: 2rem 0;
    width: 50%;
    height: 90vh;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
}
ul{
    list-style: none;
    font-size: 1.5rem;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

p{
    font-size: 1.3rem;
}
img{
    height: 100%;
    width: 40%;
    object-fit: cover;
}
#iconeMenu{
    display: none;
}

@media screen and (max-width: 768px) {
    position: relative;

    #iconeMenu{
        cursor: pointer;
        position: absolute;
        display: flex;
        font-size: 30px;
        color: white;
        left: 5%;
        top: 5%;
    }
    .open{
        transform: translateX(100%);
    }
    #headerComponente{
        
        position: absolute;
        transition:  transform 300ms ease-in-out;
        translate: -100%;
        align-items: center;
        justify-content: space-around;
        height: 100vh;
        width: 180px;
        display: flex;
        flex-direction: column;

        >h1{
            height: 10%;
            font-size: 2rem;
        }
        ul{
            height: 50%;
            font-size: 1.5rem;
        }
    }

    main{
       background-color: black;
       flex-direction: column;
       width: 100vw;
       min-height: 100vh;
       gap: 2rem;
       overflow: auto;
    }
    .about{
        width: 100vw;
        min-height: 50vh;
        overflow: auto;
    }
    .photo{
        padding-top: 5rem;
        width: 100vw;
        height: 50vh;
        //background-color: green;

        
    }
    img{
        object-fit: cover;
        width: 50%;
        height: 100%;
    }
}

`