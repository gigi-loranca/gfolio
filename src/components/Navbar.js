import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import Facts from './Facts';
import { ShakeText } from './StyledComponents';


const Navbar = () => {

const textSize = {fontSize:"64px"}

  const navigate = useNavigate()

  return (          
    <div style={{display:"flex", backgroundColor: "black", height:"20vh", justifyContent:"center", alignContent:"center", alignItems:"center"}} >                
        <section style={{display:"flex", width:"80%", gap: "1.5em", justifyContent:"space-between", marginRight:"1em"}}>
            <ShakeText style={textSize} onClick={() => navigate("/")}>              
                Home              
            </ShakeText>
            <ShakeText style={textSize} onClick={() => navigate("/about")}>
                About              
            </ShakeText>
            <ShakeText style={textSize} onClick={() => navigate("/contact")}>
                Contact
            </ShakeText>
        </section>
    </div>
    
  )
}
export default Navbar