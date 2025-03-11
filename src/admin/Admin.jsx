import React, { useState } from "react";
import styled from "styled-components";
import admin1 from '../assets/images/imgadmin1.png';
import admin2 from '../assets/images/imgadmin2.png';

const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 20px;
`;

const Grid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  width: 400px;
  height: 340px;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 220px; 
  overflow: hidden;
`;


const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;


const Title = styled.h3`
  font-size: 22px;
  font-weight: bold;
  margin: 15px 0;
`;

const CardContent = styled.div`
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Info = styled.p`
  display: flex;
  align-items: center;
  gap: 5px;
  margin:auto;
  margin-left:-100px;
  margin-top:16px;
  `;

const Icon = styled.img`
  font-size: 22px;
  display: flex;
  margin:auto;
  margin-top:-20px;
  margin-left:80px;
 
`;


const initialGroups = [
  { 
    id: Math.random(), 
    name: "Группа JAVA 5", 
    lessons: 25, 
    students: 36, 
    img: "https://raw.githubusercontent.com/tarielgafurov/it-door-lms/330457065767b06d90f10470cf4f7866084fe74f/src/assets/images/image%204.png"
  },
  { 
    id: Math.random(), 
    name: "Группа JAVA 5", 
    lessons: 26, 
    students: 36, 
    img: "https://raw.githubusercontent.com/tarielgafurov/it-door-lms/330457065767b06d90f10470cf4f7866084fe74f/src/assets/images/image%205.png"
  },
  { 
    id: Math.random(), 
    name: "Группа JAVA 5", 
    lessons: 25, 
    students: 36, 
    img: "https://raw.githubusercontent.com/tarielgafurov/it-door-lms/330457065767b06d90f10470cf4f7866084fe74f/src/assets/images/image6.png"
  }
];

const Admin = () => {
  const [groups] = useState(initialGroups);

  return (
    <Container>
      <Grid>
        {groups.map((group) => (
          <Card key={group.id}>
            <ImageContainer>
              <Image src={group.img} alt={group.name} />
            </ImageContainer>
            <Title>{group.name}</Title> 
                  <CardContent> 
                        <Icon src={admin1} alt="admin1" />
               <Info> Уроки - {group.lessons}</Info>
                        <Icon src={admin2} alt="admin2" />
               <Info>Студенты - {group.students}</Info>
                  </CardContent> 
          </Card>
        ))}
      </Grid> 
    </Container>
  );
};

export default Admin;






