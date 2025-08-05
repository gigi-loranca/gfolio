import React from 'react'
import { Page, Text } from './StyledComponents'

function Contact() {
  return (
    <Page style={{zIndex: 1, margin:"20vh"}}>      
      <Text className='title'>Contact</Text>
      <nav>
        <Text className='subtitle'>
        Send an email to <a href="mailto:guillerme212@gmail.com" target="_blank">guillerme22@gmail.com</a>
        </Text>
        <Text className='subtitle'>
          Phone call contact @ <a href="tel:+34609881432">+34609881432</a>
        </Text>
      </nav>
    </Page>
  )
}

export default Contact