import React, { useState } from 'react'
import styled from 'styled-components'
import { FaPlus } from "react-icons/fa6";
import { BsPersonVideo3 } from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";
import Otvetili from './Otvetili';
import Otvetili2 from './Otvetili2';


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
const DivLesson = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Div = styled.div`
    display: flex;
    align-items: center;
`
const MapLesson = styled.div`
    width: 80%;
    padding: 10px 10px 10px 0px;
`

const LessonHTML = styled.div`
    margin-top: 4px;
    width: 800px;
    display: flex;
    justify-content: space-between;
    margin-left: 28px;
`
const LessonDivs = styled.div`
    margin-top: 20px;
    width: 85%;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
`
const H3 = styled.h3`
    text-align: start;
`
const OtvetDiv = styled.div`
    border: 1px solid;
    width: 210px;
`

const items =  {
        lessonName:"HTML-документ и его границы",
        paragraph:"Урок HTML",
        lessonTimeOne:"22.05.2023, 22:35",
        paragraphtwo:"HTML вёрстка",
        lessonTimeTwo:"22.05.2023, 22:35",
        answered:"5",
        otveili:["Nurs" , "Beka" , "Alihan" , "Beken" , "Adilet"],

        lessonName2:"HTML-документ и его границы",
        paragraph2:"Урок HTML",
        lessonTimeOne2:"22.05.2023, 22:35",
        paragraphtwo2:"HTML вёрстка",
        lessonTimeTwo2:"22.05.2023, 22:35",
        answered2:"4",
        otveili2:["Nurs" , "Beka" , "Alihan" , "Beken"],
             }





function Lessons () {
    
    const [state , setState] = useState(false)
    const [twoState , twoSetState] = useState(false)

    const stateOtvetOpen = () => {
        console.log("nurs");

        return setState((prevState) => !prevState)
    }
    const twoStateOtvetOpen = () => {
        console.log("bekz");
        
        return twoSetState((prevState) => !prevState)
    }

        return  <Global>
        <DivLesson>
        <Div>
      <JavaGroup>Java 5 /</JavaGroup>
      <Lesson>Уроки</Lesson>
        </Div>
      <button><FaPlus/> Ввести урок</button>
        </DivLesson>
        <MapLesson>
        <LessonDivs>
            <div>
                 <H3>1 - {items.lessonName}</H3>   
                    <LessonHTML>
                <p><BsPersonVideo3/> {items.paragraph}</p>
                <p> {items.lessonTimeOne}</p>
                    </LessonHTML>
                    <LessonHTML>
                <p><TfiWrite/> {items.paragraphtwo}</p>
                <p>{items.lessonTimeTwo}</p>
                    </LessonHTML>
            </div>
                <div>
                    <OtvetDiv onClick={stateOtvetOpen}>
                        <p>ответили:{items.answered} студентов</p>
                        {state ? <Otvetili obj={items}/> : null}
                    </OtvetDiv>
                </div> 
                </LessonDivs>

                <LessonDivs>
                    <div>
                 <H3>1 - {items.lessonName2}</H3>   
                    <LessonHTML>
                <p><BsPersonVideo3/> {items.paragraph2}</p>
                <p> {items.lessonTimeOne2}</p>
                    </LessonHTML>
                    <LessonHTML>
                <p><TfiWrite/> {items.paragraphtwo2}</p>
                <p>{items.lessonTimeTwo2}</p>
                    </LessonHTML>
                    </div>
                <div>
                    <OtvetDiv onClick={twoStateOtvetOpen}>
                        <p>ответили:{items.answered2} студентов</p>
                        {twoState ? <Otvetili2 obj={items}/> : null}
                    </OtvetDiv>
                </div> 
                </LessonDivs>
        </MapLesson>
    </Global> 


}


export default Lessons
