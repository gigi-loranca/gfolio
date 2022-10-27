import styled from "styled-components";

export const FactButton = styled.h2`
    &:hover {
        color: palevioletred;
        cursor: pointer;
    };
    display:inline-block;
    font-weight: bold;
    font-size: 20px;
    color: white;
    border:0.16em solid rgba(255,255,255,0);
    width:"100%";
    border-radius:2em;
    box-sizing: border-box;
    text-decoration:none;
    background-color: #282c34;
    text-align:center;
    transition: all 0.2s;
`

export const Text = styled.h1`
  color: #282c34;
  
  &:hover{
    color: palevioletred;
    transform : scale(1.05);
    transition: transform ease-out 319ms;
  }
  
    &.title {
      font-size: 24px;
      weight: 400;
    };
    &.subtitle {
      font-size: 16px;
      weight: 200;
    };
`

export const HoverText = styled.h1`
font-weight: bold;
font-size:"20px";
color: white;
&:hover {
    animation: shake 0.3s cubic-bezier(.36,.07,.19,.97) both;
    perspective: 1000px;
    color: palevioletred;
    cursor: pointer;
    transform: translate3d(0, 0, 0);
    @keyframes shake {
        10%, 90% {
          transform: translate3d(-1px, 0, 0);
        }
        20%, 80% {
          transform: translate3d(2px, 0, 0);
        }        
        30%, 50%, 70% {
          transform: translate3d(-2px, 0, 0);
        }
        40%, 60% {
          transform: translate3d(2px, 0, 0);
      }
  };
`;

export const CurveDivider = styled.div`
  border-top: 1px solid #282c34;
  border-radius: 10%;
`
