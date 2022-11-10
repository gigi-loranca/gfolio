import React from 'react'
import { Text } from './StyledComponents'

function Contact() {
  return (
    <div>      
      <h1>Contact</h1>
      <nav>
        <Text className='subtitle'>
        Send an email to <a style={{marginLef: "1em"}} href="mailto:guillerme212@gmail.com" target="_blank">guillerme22@gmail.com</a>
        </Text>
        <Text className='subtitle'>
          Phone call contact @ <a href="tel:+34609881432">+34609881432</a>
        </Text>
      </nav>
    </div>
  )
}

export default Contact