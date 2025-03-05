import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Grid = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 300px;
  text-align: center;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 150px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin: 10px 0;
`;

const CardContent = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Info = styled.p`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Icon = styled.span`
  font-size: 18px;
`;


const initialGroups = [
  { 
    id: Math.random, 
    name: "Группа JAVA 5", 
    lessons: 25, 
    students: 36, 
    img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=300&h=200&fit=crop"
  },
  { 
    id: Math.random, 
    name: "Группа JavaScript 5", 
    lessons: 25, 
    students: 36, 
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=200&fit=crop"
  },
  { 
    id: Math.random, 
    name: "Programming Refresher", 
    lessons: 25, 
    students: 36, 
    img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=300&h=200&fit=crop"
  }
];

const Admin = () => {
  const [groups, setGroups] = useState(initialGroups);

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
              <Info>
                <Icon>💻</Icon> Уроки - {group.lessons}
              </Info>
              <Info>
                <Icon>👥</Icon> Студенты - {group.students}
              </Info>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

export default Admin;





