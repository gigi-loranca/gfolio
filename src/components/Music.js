import React from 'react'
import imageImport from "../assets/images/glm.jpeg"
import { Text, Page } from './StyledComponents'
import SoundCloudEmbed from './SoundCloudEmbeded';   

const tracks = [{name: "Vamo a comernos bb", url: "https://soundcloud.com/spaansekech69/vamo-a-comerno-bb"}]; 

function Music() {
  return (
    <Page style={{zIndex: 1, margin:"10vh 20vh 0 20vh"}}>
      <Text className="title">All tracks</Text>
      <div style={{width:"900px", height:"10px", gap:"1em", display:"flex", flexDirection:"column"}}>
        <SoundCloudEmbed trackUrl="https://soundcloud.com/spaansekech69" />
      </div>
    </Page>
  )
}

export default Music