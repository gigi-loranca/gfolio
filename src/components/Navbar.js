import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import Facts from './Facts';
import { ShakeText } from './StyledComponents';

const Navbar = () => {

  const navigate = useNavigate()

  return (          
    <div className='App-header'  style={{display:"flex", justifyContent:"space-between", alignItems:"center"}} >                
        <div style={{marginLeft: "1em", gap:"1em"}}>                
            <Facts />
        </div>
        <section style={{display:"flex", gap: "1.5em", justifyContent:"space-around", marginRight:"1em"}}>
            <ShakeText  onClick={() => navigate("/")}>              
                🏠 Home              
            </ShakeText>
            <ShakeText onClick={() => navigate("/about")}>
                ⚡️ About              
            </ShakeText>
            <ShakeText onClick={() => navigate("/contact")}>
            📱 Contact
            </ShakeText>            
        </section>
    </div>
    
  )
}
export default Navbar