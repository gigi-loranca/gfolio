import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { FactButton, Text } from './StyledComponents'


function Facts() {
    const [fact, setFact] = useState("")

    useEffect(() => {
        setFact("⭐︎ Press 4 random fact ⭐︎")
      return () => {
        setFact("⭐︎ Press 4 random fact ⭐︎")
      }
    }, [])

    const handleGetFact = async() => {
        setFact("🏃‍♂️ Fetching... 🏃‍♂️")
        const url = "https://api.api-ninjas.com/v1/facts?limit=1"
        const res = await axios.get(url, {
            headers: {'X-Api-Key': "+jlR5d98sJwYHiUmYn7kbQ==LIxyqn464G8Y13yi"},
            }).then(res => {
                if (res.data){
                    const fact = res.data[0].fact
                    setFact(`⭐︎ ${fact} ⭐︎`)
                }
            }).catch(e => {
                setFact("Oops! there was an error")
            })
            return res
    }

  return (
    <div style={{display:"flex", justifyContent:"center"}}>
        <div style={{}}>                    
                    <FactButton onClick={handleGetFact} style={{backgroundColor:"#282c34", fontSize:"16px"}}>                        
                        {fact}
                    </FactButton>

        </div>
    </div>
  )
}

export default Facts