import React from "react";
import { BackgroundPage } from "./StyledComponents";
import swordImage from "../assets/images/tribal.jpeg"; // Adjust the path as necessary
import cybersigilism from "../assets/images/cybersigilism.jpeg"; // Adjust the path as necessary
import { useLocation } from "react-router-dom"; // Import useLocation to conditionally render components based on the current path
const Background = () => {

  const location = useLocation()

  return (
    <BackgroundPage style={{backgroundColor:"black"}}>
        <div>
           {location.pathname !== "/" && (
          <img
            style={{
              position: "fixed",
              right: "0",
              zIndex: 0.1,
              width: "25%",
              height: "90%",
              objectFit: "cover",
            }}
            src={swordImage}
            alt="bgImage"
          />
        )}
        </div>
        <img src={cybersigilism} alt="cybersigilismImg" style={{position:"fixed", left:"1vw", bottom:"0", width:"10vw" , Index:"0.1", objectFit:"cover"}} />
        <img src={cybersigilism} alt="cybersigilismImg" style={{position:"fixed", right:"1vw", bottom:"0", width:"10vw" , Index:"0.1", objectFit:"cover"}} />
        {location.pathname == "/" && (
          <>
            <img src={cybersigilism} alt="cybersigilismImg" style={{position:"fixed", right:"1vw", top:"0", width:"10vw" , Index:"0.1", objectFit:"cover"}} />
            <img src={cybersigilism} alt="cybersigilismImg" style={{position:"fixed", left:"1vw", top:"0", width:"10vw" , Index:"0.1", objectFit:"cover"}} />
          </>
        )}
    </BackgroundPage>
  );
};

export default Background;