import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import Facts from './Facts';
import { ShakeText } from './StyledComponents';


const Navbar = () => {

const textSize = {fontSize:"64px"}

  const navigate = useNavigate()

  return (          
    <div style={{position: "fixed", zIndex: 1, display:"flex", backgroundColor: "black", height:"10vh", justifyContent:"center", alignContent:"center", alignItems:"center"}} >                
        <section style={{display:"flex", width:"100%", gap: "1.5em", justifyContent:"space-between", marginRight:"1em"}}>
            <ShakeText style={textSize} onClick={() => navigate("/")}>              
                Home              
            </ShakeText>
            <ShakeText style={textSize} onClick={() => navigate("/about")}>
                Education and Experience              
            </ShakeText>
            <ShakeText style={textSize} onClick={() => navigate("/music")}>
                Music
            </ShakeText>
        </section>
    </div>
    
  )
}
export default Navbar