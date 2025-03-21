import React, { useState } from "react";
import styled from "styled-components";
// import SearchBar from './SearchBar';
import SearchBar from "./SearchBar ";

import images from '../../assets/images/Ellipse 2.png';
const Instructors = () => {
  const [searchTerm, setSearchTerm] = useState("");
 

  return (
    <>
        <Container>
      <h2>Инструкторы, Мен.</h2>
       <SearchBar/>
    </Container>
    <Container1>
        <h2>№</h2>
        <b>Фамиля имя</b >
        <h3>Уроки</h3>
        <h4>Дата регистрация</h4>
    </Container1>
    <Container2>
        <h2>1</h2>
        <img src={images} alt="" />
        <b>Толонбай у Доолот</b>
        <h4>Java - 5 / Html, Css</h4>
        <p>02 09 2023</p>
    </Container2>
   <Container3>
        <h2>2</h2>
        <img src={images} alt="" />
        <b>Толонбай у Доолот</b>
        <h4>Java - 4 / js, react js</h4>
        <p>02 09 2023</p>
    </Container3>
    </>
   
  );
};
export default Instructors;
const Container =styled.div`
width: 1550px;
    display: flex;
    justify-content: space-between;
    margin-top: 45px;
    &>h2{
   margin-left : 25px;
   color: #134764;
   }
`
const Container1 = styled.div`
width: 1550px;
    display: flex;
    justify-content: space-between;
    color: #134764;
    margin-top: 17px;
    &>h2{
        position: relative;
    left: 25px;
    }
    &>h4{
        font-size: 20px;
    }
    &>b{
        font-size: 25px;
      position: absolute;
      left: 109px;
     
    }
    &>h3{
        position: relative;
        right: 170px;
        font-size: 20px;
    }
`
const Container2 = styled.div`
width: 1550px;
display: flex;
justify-content: space-between;
margin-top: 17px;
&>h2{
        position: relative;
    left: 25px;
    }
&>img{
    width: 40px;
    height: 40px;
position: absolute;
left: 115px;
}
&>b{
    position: relative;
    right: 220px;
    display: flex;
    align-items: center;
}
&>h4{
    position: relative;
    right: 460px;
}
&>p{
    position: relative;
    right: 98px;
}
`
const Container3 =styled.div`
    width: 1550px;
display: flex;
justify-content: space-between;
margin-top: 17px;
&>h2{
        position: relative;
    left: 25px;
    }
&>img{
    width: 40px;
    height: 40px;
position: absolute;
left: 115px;
}
&>b{
    position: relative;
    right: 220px;
    display: flex;
    align-items: center;
}
&>h4{
    position: relative;
    right: 460px;
}
&>p{
    position: relative;
    right: 98px;
}
`