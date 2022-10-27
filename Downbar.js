import React from 'react'
import { CurveDivider, Text } from './StyledComponents'

function Downbar() {
  return (
     <div style={{borderTop: "3px solid black",position: "absolute", bottom: 0, width: "100%"}}>
        <div>
            <div style={{ display:"flex",justifyContent:"space-evenly",width:"100%"}}>
                <Text className="subtitle">
                        Facebook 
                </Text>
                
                <Text className='subtitle'>
                    Instagram 
                </Text>
                
                <Text className="subtitle">
                    LinkedIn 
                </Text>
            </div>
        </div>
    </div>
  )
}

export default Downbar