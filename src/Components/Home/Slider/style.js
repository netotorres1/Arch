import styled from "styled-components";
import {tablet, mobile } from '../../../responsive'

export const Container = styled.div`
    width: 100vw;
    height: 700px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 100px;
    ${tablet({marginBottom: '0px'})};
    ${tablet({height: '450px'})};

    ${mobile({height: '250px'})};
`

export const ContainerContent = styled.div`
    width: 75%;
    height: 100%;
    font-family: 'League Spartan', sans-serif;
    ${tablet({width: '630px'})};
    ${mobile({width: '380px'})};
`
export const ContentSliderParamour = styled.div`
    position: absolute;
    bottom: 200px;
    left: 200px;
    color: white;
    width: 40%;
    ${tablet({width: '60%'})};
    ${tablet({top: '100px'})};
    ${tablet({left: '70px'})};

    ${mobile({top: '20px'})};
    ${tablet({left: '40px'})};
`
export const ImgArrow = styled.img`
    margin-left: 20px
`

export const ImageHeroParamour = styled.img`
    width: 100%;
`
export const ImageHeroSeraph = styled.img`
    width: 100%;
`
export const ImageHeroFederal = styled.img`
    width: 100%;
`
export const ImageHeroTrinity = styled.img`
    width: 100%;
`

export const Title = styled.h1`
    font-size: 100px;
    line-height: 90px;
    margin-bottom: 50px;
    ${tablet({fontSize: '70px'})};
    ${tablet({lineHeight: '50px'})};
    ${tablet({marginBottom: '20px'})};

    ${mobile({fontSize: '40px'})};
    ${mobile({lineHeight: '30px'})};
    ${mobile({marginBottom: '10px'})};
`

export const Text = styled.p`
    font-size: 20px;
    margin-bottom: 50px;
    ${tablet({fontSize: '15px'})};
    ${tablet({marginBottom: '20px'})};

    ${mobile({marginBottom: '10px'})};
    
`

export const Btn = styled.button`
    background-color: #1b1d23;
    width: 250px;
    height: 70px;
    color: white;
    font-size: 17px;
    border: none;

    &:hover{
        cursor: pointer;
        background-color: #717987;
    }

    font-family: 'League Spartan', sans-serif;
    ${tablet({width: '150px'})};
    ${tablet({height: '50px'})};

    ${mobile({fontSize: '15px'})};
    ${mobile({width: '200px'})};
`