import styled from "styled-components";
import ImageHero from './../../../assets/about/desktop/image-hero.jpg'
import ImageHeroMobile from './../../../assets/about/mobile/image-hero.jpg'
import {tablet, mobile } from './../../../responsive'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
    font-family: 'League Spartan', sans-serif;

    ${mobile({width: '380px'})};
    
`

export const ContainerContent = styled.section`
    width: 75%;
    height: 500px;
    display: flex;
    flex-direction: row;
    ${tablet({width: '80%'})};
    ${tablet({height: '550px'})};

    ${mobile({width: '100%'})};
    ${mobile({height: '250px'})};   
`

export const Img = styled.div`
    width: 100%;
    background-image: url(${ImageHero});
    
    ${mobile({width: '100%'})};
    ${mobile({heigth: '100%'})};
    ${mobile({backgroundImage: `url(${ImageHeroMobile})`})};
    ${mobile({backgroundSize: 'cover'})};
`

export const About = styled.div`
    width: 100%;
    height: 350px;
    background-color: white;
    position: relative;
    right: 100px;
    top: 150px;
    position: relative;
    display: flex;
    justify-content: flex-end;

    ${tablet({position: 'absolute'})};
    ${tablet({top: '305px'})};
    ${tablet({left: '135px'})};
    ${tablet({width: '550px'})};

    ${mobile({width: '300px'})}; 
    ${mobile({height: '250px'})};   
    ${mobile({left: '0px'})};
    ${mobile({top: '300px'})};
`

export const Title = styled.h1`
    font-size: 200px;
    position: absolute;
    bottom: 280px;
    right: 100px;
    color: #EEEFF4;
    ${tablet({fontSize: '150px'})};
    ${tablet({left: '150px'})};

    ${mobile({display: 'none'})};
`

export const ContainerAbout = styled.div`
    width: 60%;
    margin: 50px;
    margin-top: 100px;
    
    ${mobile({height: '100%'})};
    ${mobile({marginTop: '20px'})};
    ${mobile({margin: '10px'})};
    ${mobile({position: 'relative'})};   
    ${mobile({right: '70px'})};  
    ${mobile({top: '20px'})}; 
`

export const TitleAbout = styled.h2`
    font-size: 50px;
    margin-bottom: 50px;

    ${mobile({fontSize: '35px'})};
    ${mobile({marginBottom: '20px'})};
`

export const TextAbout = styled.p`
    ${mobile({fontSize: '15px'})};
    color: #60636D;
`