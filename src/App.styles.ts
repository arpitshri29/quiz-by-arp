import styled, {createGlobalStyle} from "styled-components";
import BGImage from './img/bg.jpg';

export const GlobalStyle = createGlobalStyle`
    html{
        height: 100%;
    }
    
    body{
        background-image: url(${BGImage});
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }
    
    *{
        box-sizing: border-box;
        font-family: 'Nunito', sans-serif;
    }    
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    > p{
        color: #000;
    }
    
    .score{
        color: lightblue;
        font-size: 24px;
        margin: 0;
    }
    
    h1{
        background-image: linear-gradient(180deg, #fff, #15b1ca);
        background-size: 100%;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
        filter: drop-shadow(2px 2px #646c6d);
        font-size: 70px;
        font-weight: 400;
        text-align: center;
        margin: 20px;
    }
    
    .start, .next{
        cursor: pointer;
        border: 2px solid #3cb9ce;
        background: linear-gradient(180deg, #fff, #70c3d0);
        box-shadow: 0px 5px 10px rgba(0,0,0,0.25);
        height: 40px;
        margin: 20px 0;
        border-radius: 10px;
        padding: 0 40px;
    }
    
    .start{
        max-width: 200px;
        
    }
`