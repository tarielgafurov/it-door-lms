import React from 'react'
import styled from 'styled-components'

const OtvetDiv = styled.div`
    border: 1px solid;
    max-height: 200px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
`

const Otvetili = (props) => {

  const obj = props.obj.otveili

  
  

  return  <OtvetDiv> 
            {obj.map((el) => {
                return <p>{el}</p>
            })}
            
          </OtvetDiv>
}

export default Otvetili
