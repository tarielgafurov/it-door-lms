import React, { useState } from "react";
import img from '../../assets/images/image 4.png';
import img1 from '../../assets/images/Img1.png';
import img2 from '../../assets/images/img2.png';
import images from '../../assets/images/image 5.png';
import images1 from '../../assets/images/image6.png';

import styled from "styled-components";
import Sidebar from "./Sidebar";

// Массивдин элементтеринин баарында бирдей түзүм болуусу керек
const groups = [
  { id: 1,  name:"Группа JAVA 5",src: img,  students: 36, lessons: 25, sr1: img2, src2:img1 },
                                                             
];
const group = [
  { id: 2,  name1:"Группа JAVA 5",src3: images,  student: 36, lesson: 25, sr4: img2, src5:img1 },
                                                             
];
const grout = [
  { id: 3,  name2:"Группа JAVA 5",src4: images1,  student1: 36, lesson1: 25, sr7: img2, src8:img1 },
                                                             
];


const Grouplist = () => {
  const [isGridView, setIsGridView] = useState(true);

  return (
    <div>
      <Title>Все группы</Title>

      
        

        <Container4>
       
     {/* Тизмени көрсөтүү */}
     {groups.map((e) => (
       <GroupCard key={e.id}>
        
         <img   src={e.src} alt="Сурот"  />
         <Text>{e.name}</Text>
         <Wrapper>
           <Container2>
           <Img src={e.sr1} alt="" />
         <Paragraph>Уроки: {e.lessons}</Paragraph>
         </Container2>
          <Container3>
          <Img1 src={e.src2} alt="" />
          <Paragraph1>Студенттер: {e.students}</Paragraph1>
          </Container3>
         </Wrapper>
         

       </GroupCard>

     ))}

<MainWrapper>

 
 {group.map((e) => (
       <GroupCard2 key={e.id}>
        
         <img src={e.src3} alt="Сурот1"  />
         <Text1>{e.name1}</Text1>
         <Wrapper>
           <Container2>
           <Img src={e.sr4} alt="" />
         <Paragraph>Уроки: {e.lesson}</Paragraph>
         </Container2>
          <Container3>
          <Img1 src={e.src5} alt="" />
          <Paragraph1>Студенттер: {e.student}</Paragraph1>
          </Container3>
         </Wrapper>
         

       </GroupCard2>

     ))}
</MainWrapper>

        <Section>
{grout.map((e) => (
       <GroupCard2 key={e.id}>
        
         <img src={e.src4} alt="Сурот"  />
         <Text2>{e.name2}</Text2>
         <Wrapper>
           <Container2>
           <Img src={e.sr7} alt="" />
         <Paragraph>Уроки: {e.lesson1}</Paragraph>
         </Container2>
          <Container3>
          <Img1 src={e.src8} alt="" />
          <Paragraph1>Студенттер: {e.student1}</Paragraph1>
          </Container3>
         </Wrapper>
         

       </GroupCard2>

     ))}
        </Section>

   </Container4>



   
   <Sidebar/>
    </div>
    
   
  );
};

export default Grouplist;


const Container4 = styled.div`
width: 1530px;
height: 400px;
margin-top: 50px;
left: 30px;
display: flex;
justify-content: space-around;
position: absolute;
left: 30px;
`
const GroupCard = styled.div`
    width: 450px;
  padding: 15px;
  background-color: #f9f9f9;
  max-width: 450px;
  height: 200px;
  
  
`
const Text = styled.h2`
  margin-top: 39px;
  position: relative;
  left: 150px;
`
const Text2 = styled.h2`
position: relative;
left: 150px;
`
const Text1 = styled.h2`
position: relative;
left: 150px;
`
const Images = styled.div`
width: 350px;
height: 210px;
`

const Title = styled.h2`
margin-top: 15px;
 font-size: 24px;
  color: #333;
  position: absolute;
  left: 30px;
`
const Paragraph = styled.p`
  font-size: 1.01rem;
  text-align: center;
bottom: 1px;
left: 87px;
`;
const Container2 = styled.div`
  margin-top: 15px;
  width: 200px;
  height: 62px;
 
`
const Img = styled.img`
width: 60px;
 height : 40px;
 left: 70px;
 position: relative;

`
const Container3 = styled.div`
margin-top: 15px;
  width: 200px;
  height: 62px;
`
const Paragraph1 = styled.p`
bottom: 20px;
left: 40px;
position: relative;
bottom: 2px;
`
const Img1 = styled.img`
width: 60px;
 height : 40px;
 position: relative;
 left: 60px;
`
const Wrapper = styled.div`
width: 464px;
height: 100px;
margin-top: 20px;
display: flex;
justify-content: space-around;
`

const MainWrapper =styled.div`
width: 482px;
height: 400px;
`
const GroupCard2 = styled.div`
    width: 450px;
  padding: 15px;
  background-color: #f9f9f937;
  max-width: 450px;
  height: 200px;
  &> img{
width: 350px;
height: 210px;
margin-bottom: 10px;
  }
`
const Section = styled.div`
width: 482px;
height: 400px;

`