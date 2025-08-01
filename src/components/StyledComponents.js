import styled from "styled-components";

export const FactButton = styled.h2`
    &:hover {
        color: grey;
        cursor: pointer;
    };
    display:inline-block;
    font-weight: bold;
    font-size: 2vmin;
    color: white;
    width:"100%";
    border-radius: 3em;
    box-sizing: border-box;
    text-decoration:none;
    text-align:center;
    transition: all 0.2s;
`

export const Text = styled.h1`
  color: white;
  font-size: 2vmin;
  &:hover{
    // color: red;
    // transform : scale(1.05);
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

export const ShakeText = styled.h1`
color: white;
font-weight: bold;
font-size: 2vmin;
content;
&:hover {
    animation: shake 0.1s cubic-bezier(.36,.07,.19,.97);
    perspective: 1000px;
    color: grey;
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
`

export const Page = styled.div`
  background: "black";
`

