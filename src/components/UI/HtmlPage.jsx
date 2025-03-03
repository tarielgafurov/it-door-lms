import styled from '@emotion/styled';
import React from 'react'
import { Link } from 'react-router-dom';
const HtmlPage = () => {
  return (
    <div>
      < Title>
            <b>Полный курс по JAVA /</b>
                <StyledLink to = "/">HTML-боюнча тушундуруу....</StyledLink>
           
            </ Title>
            <BoldText >
            <h3>Домашняя задания</h3>
            </BoldText >
            < Paragraph>
                <p>1 - Java[прим. 1] — Верстка кылуу</p>
                <p>2 - Java[прим. 1] — Верстка кылуу код жазуу</p>
                <p>3 - Java[прим. 1] — тудулист жасоо</p>
            </ Paragraph>
            <Text>
                <p>
                HTML-документ и ег границы ответ д. задания Java[прим. 1] — строго типизированный объе ктно-ориентированный язык программирования общего назначения, разработанный компанией Sun Microsystems (в последующем приобретённой компанией Oracle). Разработка ведётся сообществом, организованным через Java Community Process; язык и основные реализующие его технологии распространяются по лицензии GPL.
                </p>
            </Text>
    </div>
  )
}
export default HtmlPage;
const  Title = styled.div`
    position: relative;
    left: 20px;
    top: 30px;
    & > b{
        color: #878787;
    }
`
const BoldText = styled.div`
    position: relative;
    left: 50px;
    top: 30px;
    margin-top: 20px;
`
const  Paragraph =styled.div`
height: 200px;
    margin-top: 20px;
    flex-direction:  column;
    position: relative;
    left: 50px;
    top: 30px;
`
const Text = styled.div`
position: relative;
    left: 50px;
    top: 30px;
     flex-direction:  column;
     font-size: 18px;
     & > p{
        width: 770px;
     }
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
  `