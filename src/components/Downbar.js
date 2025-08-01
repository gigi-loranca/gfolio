import React from 'react'
import { Text } from './StyledComponents'
import facebookIcon from '../assets/images/facebook.svg'
import instagramIcon from "../assets/images/Instagram_Icon.svg"
import linkedinIcon from "../assets/images/Linkedin_icon.svg"
import soundcloudIcon from "../assets/images/soundcloud_icon.svg"
import gmailIcon from "../assets/images/gmail_icon.svg"

function Downbar() {

    const urlReturnOnClick = social => {
        //select wich social to open
        if (social === "ig") {
            window.open('https://instagram.com/gigi.offiiciel');            
        } if (social ==="sc") {
            window.open('https://soundcloud.com/spaansekech69');
        } if (social ==="ld") {
            window.open("https://www.linkedin.com/in/guillermo-loranca-miranda-09b688b4/")
        } if (social === "mail") {
            const emailAddress = 'guillerme212@gmail.com';
            const subject = 'Hi Guillermo';
            const body = 'I wanted to get in touch with you about...';
            const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            window.location.href = mailtoLink;
        };
    }
  return (
     <div style={{borderTop: "1px solid black",position: "absolute", bottom: 0, width: "100%"}}>
        <div style={{display: "flex", justifyContent:"center"}}>
            <div style={{ display:"flex",justifyContent:"space-around", width:"25%"}}>
                <Text className="subtitle" onClick={e => urlReturnOnClick("fb")}>
                    <img width="25px" src={facebookIcon || ""} alt=""/>                        
                </Text>                
                <Text className='subtitle' onClick={e => urlReturnOnClick("ig")}>
                    <img width="25px" src={instagramIcon || ""} alt=""/>
                </Text>                
                <Text className="subtitle" onClick={e => urlReturnOnClick("ld")}>
                    <img width="25px" src={linkedinIcon || ""} alt="" />                    
                </Text>
                <Text className="subtitle" onClick={e => urlReturnOnClick("sc")}>
                    <img width="25px" src={soundcloudIcon || ""} alt="" />                    
                </Text>
                <Text className="subtitle" onClick={e => urlReturnOnClick("mail")}>
                    <img width="25px" src={gmailIcon || ""} alt="" />                    
                </Text>
            </div>
        </div>
    </div>
  )
}

export default Downbar   