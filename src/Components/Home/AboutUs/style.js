import styled from "styled-components";
import ImageSmallTeam from './../../../assets/home/desktop/image-small-team.jpg'
import {tablet, mobile} from './../../../responsive'

export const Container = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    height: 650px;
    margin-bottom: 100px;
    ${tablet({width: '758px'})};

    ${mobile({width: '380px'})};
    ${mobile({height: '450px'})};
    ${mobile({marginTop: '100px'})};
    ${mobile({margi: '100px'})};
`
export const ImgArrow = styled.img`
    margin-left: 20px
`
export const ContainerContent = styled.div`
    width: 75%;
    background-image: url(${ImageSmallTeam});
    background-size: cover;
    z-index: 0;
    display: flex;
    align-items: center;
    ${tablet({width: '82%'})};

    ${mobile({width: '100%'})};
    ${mobile({height: '100%'})};
    
`
export const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    margin-left: 200px;
    ${tablet({position: 'relative'})};
    ${tablet({right: '165px'})};
   
    ${mobile({width: '350px'})};
`

export const Title = styled.h2`
    font-size: 50px;
    color: white;
    font-family: 'League Spartan', sans-serif;
    margin-bottom: 20px;

    ${mobile({fontSize: '35px'})};
    ${mobile({marginBottom: '20px'})};
`

export const Btn = styled.button`
    background-color: #1b1d23;
    width: 200px;
    height: 70px;
    color: white;
    font-size: 17px;
    border: none;
    font-weight: bold;
    font-family: 'League Spartan', sans-serif;

    &:hover{
        background-color: #2A3643;
        cursor: pointer;
        border: none;
    }
`

