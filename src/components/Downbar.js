import React from 'react'
import { Text } from './StyledComponents'
import facebookIcon from '../assets/images/facebook.svg'
import instagramIcon from "../assets/images/Instagram_Icon.svg"
import linkedinIcon from "../assets/images/Linkedin_icon.svg"
import soundcloudIcon from "../assets/images/soundcloud_icon.svg"
import gmailIcon from "../assets/images/gmail_icon.svg"

//icons found at iconfinder.com

function Downbar() {
  return (
     <div style={{borderTop: "1px solid black",position: "absolute", bottom: 0, width: "100%"}}>
        <div style={{display: "flex", justifyContent:"center"}}>
            <div style={{ display:"flex",justifyContent:"space-around",width:"25%"}}>
                <Text className="subtitle">
                    <img width="25px" src={facebookIcon || ""} alt=""/>                        
                </Text>                
                <Text className='subtitle'>
                    <img width="25px" src={instagramIcon || ""} alt=""/>
                </Text>                
                <Text className="subtitle">
                    <img width="25px" src={linkedinIcon || ""} alt="" />                    
                </Text>
                <Text className="subtitle">
                    <img width="25px" src={soundcloudIcon || ""} alt="" />                    
                </Text>
                <Text className="subtitle">
                    <img width="25px" src={gmailIcon || ""} alt="" />                    
                </Text>
            </div>
        </div>
    </div>
  )
}

export default Downbar