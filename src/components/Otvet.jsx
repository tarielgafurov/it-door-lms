import React, { Fragment } from 'react'
import styled from 'styled-components'
import img7  from '../assets/images/image 7.png'

const Global = styled.div`
    width: 150%;
    margin-left: 5%;
`

const JavaGroup = styled.h3`
    color: rgba(135, 135, 135, 1);
`
const Lesson = styled.h3`
    color: rgba(19, 71, 100, 1);
    margin-left: 10px;
`
const Div = styled.div`
    display: flex;
    align-items: center;
`
const Main = styled.div`
    width: 75%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: 650px;
    border: 1px solid;
`
const P = styled.p`
    text-align: start;
`
const H3 = styled.h3`
    text-align: start;
    color: rgba(19, 71, 100, 1);
`

const Otvet = (props) => {
  return (
    <div>
        <Global>
        <Div>
        <JavaGroup>Java 5 /</JavaGroup>
        <Lesson>Уроки</Lesson>
        </Div>
        <Main>
            <p>1 - {props.text}</p>
            <img src={img7} alt="" />
            <p>2 - {props.text}</p>
            <p>3 - {props.text}</p>
            <div>
            <H3>Ответ</H3>
            <P>{props.text}</P>
            </div>
        </Main>

        </Global>
    </div>
  )
}

export default Otvet
