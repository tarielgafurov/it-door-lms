import React from 'react'
import styled from 'styled-components'

const MyGroup = styled.h1`
  margin-right: 1160px;
  color: rgba(19, 71, 100, 1);
`
const Global = styled.div`
  width: 500px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 100px;
    color: rgba(19, 71, 100, 1);
`
const Naming = styled.h2 `
      margin-right: 110px;
`
const GlobalUser = styled.div`
  width: 500px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 100px;
` 
const UserProfile = styled.div`
  display: flex;
    width: 300px;
    align-items: center;
` 
const UserName = styled.h3 `
      margin-left: 20px;

`

const Group = (props) => {


    const sort = props.items.sort(( a , b) => { return b.score - a.score })
    
 

  return (
    <div>
      <MyGroup>Моя группа</MyGroup>
      <Global>
        <h2>No.</h2>
        <Naming>Имя и Фамиля</Naming>
        <h2>Баллы</h2>
      </Global>
      {sort.map((el , zIndex) => {
        return <GlobalUser id={el.id}>
          <div><h3>{zIndex+1}</h3></div>
          <UserProfile>
          <img src={el.img} alt="Аватар" />
          <UserName>{el.name}</UserName>
          </UserProfile>
          <h3>{el.score}</h3>
        </GlobalUser>
        
      })}
        </div>
  )
}

export default Group
