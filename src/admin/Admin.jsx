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
  height: 200px;
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
  margin-left:-70px;
`;

const Icon = styled.span`
  font-size: 20px;
  margin:auto;
  margin-top:-16px;
  margin-left:70px;
`;


const initialGroups = [
  { 
    id: Math.random, 
    name: "Группа JAVA 5", 
    lessons: 25, 
    students: 36, 
    img: "https://avatars.mds.yandex.net/i?id=3fe05358d08d34953fa68e39d53433a3_l-5300093-images-thumbs&n=13"
  },
  { 
    id: Math.random, 
    name: "Группа JAVA 5", 
    lessons: 25, 
    students: 36, 
    img: "https://habrastorage.org/getpro/habr/post_images/e22/6e8/41b/e226e841bc7f1d229c3c4312dacdb249.png"
  },
  { 
    id: Math.random, 
    name: "Группа JAVA 5", 
    lessons: 25, 
    students: 36, 
    img: "https://i.vuzopedia.ru/storage/app/uploads/public/5e6/f07/ffb/5e6f07ffb510c742821835.jpg"
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
            <Icon>💻</Icon>
              <Info>Уроки - {group.lessons}</Info>
            <Icon>👥</Icon>
              <Info>Студенты - {group.students}</Info>
            </CardContent>
          </Card>
        ))}
      </Grid> 
    </Container>
  );
};

export default Admin;





