import styled from "styled-components"

const AllLessins = styled.h2`
    color: #134764;
    margin-right: 80%;
`
const GlobalDiv = styled.div`
    width: 77%;
    height: 500px;
    margin-left: 4%;
    display: flex;
    flex-wrap: wrap;
`
const MapDiv = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    margin-left: 30px;
    margin-top: 30px;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
`
const BtnDiv = styled.div`
    height: 75px;
`
const Name = styled.h6`
    font-size: 16px;
    margin: 10px;
`
const ImgKurs = styled.img`
    width: 300px;
`

const Kurs = (props) => {

// git init , git add , git commit -m "" , git push origin 

  return (
    <div>
        
        <AllLessins>Все уроки</AllLessins>
        <GlobalDiv>
            {props.data.map((el) => {
                return <MapDiv id={el.id}>
                    <ImgKurs src={el.img} alt="" />
                    <BtnDiv>
                    <Name>{el.name}</Name>
                    <button>{el.button}</button>
                    </BtnDiv>
                </MapDiv>
            })}
        </GlobalDiv>
        </div>

  )
}

export default Kurs
