import React from 'react'
import imageImport from "../assets/images/glm.jpeg"
import { Text } from './StyledComponents'

function HomePage() {
  return (
    <div>      
      <h1>HomePage</h1>
      <img style={{width:"100px", border:"1px solid black", borderRadius:"4px"}} src={imageImport} alt="an image of guillermo" />
      <Text className='subtitle'>
        Hi, welcome to Guillermo`s website.
        <br/>
        Hi, welcome to Guillermo`s website paragraph two
      </Text>
    </div>
  )
}

export default HomePage