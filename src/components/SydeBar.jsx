import styled from 'styled-components';
import { LiaLaptopCodeSolid } from "react-icons/lia"
import { FaUsers } from "react-icons/fa6";

const Group = styled.div`
  position: absolute;
    height: 729px;
    bottom: 0px;
    width: 20%;
    left: -9%;
    margin-left: 80%;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
`
const IkonOne = styled.div`
  height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
    color: #134764;
`
const IkonTwo = styled.div`
  height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #134764;
`
const IkonName = styled.h3`
  margin: 20px;
`

const SideBar = () => {
  return (
    <Group>
      <IkonOne><LiaLaptopCodeSolid/><IkonName>Курсы</IkonName></IkonOne>
      <IkonTwo><FaUsers/><IkonName>Группа</IkonName></IkonTwo>
    </Group>
  )
}

export default SideBar
