import styled from 'styled-components'
import ImageMap from './../../../assets/contact/desktop/image-map.png'
import ImageMapMobile from './../../../assets/contact/mobile/image-map.png'
import {tablet, mobile } from './../../../responsive'

export const Container = styled.section`
    width: 100vw;
    display: flex;
    justify-content: center;

    font-family: 'League Spartan', sans-serif;

    ${tablet({width: '768px'})};
    ${tablet({height: '1200px'})};

    ${mobile({marginTop: '150px'})};
    ${mobile({width: '380px'})};
    ${mobile({height: '900px'})};
`

export const ContainerContent = styled.div`
    width: 75%;
    display: flex;
    flex-direction: column;
    ${tablet({width: '100%'})};
    ${tablet({alignItems: 'center'})};
 
`

export const ContainerTop = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 500px;
    width: 100%;
    ${tablet({flexDirection: 'column'})};
    ${tablet({alignItems: 'flex-start'})};
    ${tablet({width: '80%'})};
    ${tablet({height: '100%'})};
    ${tablet({marginTop: '100px'})};
    
`

export const ContainerMap = styled.div`
    background-image: url(${ImageMap});
    background-size: cover;
    height: 600px;
    width: 100%;

    ${tablet({width: '80%'})};
    ${tablet({height: '1000px'})};

    ${mobile({width: '100%'})};
    ${mobile({height: '400px'})};
    ${mobile({backgroundImage: `url(${ImageMapMobile})`})};
`

export const Title = styled.h2`
    font-size: 80px;
    width: 40%;

    ${tablet({marginBottom: '40px'})};

    ${mobile({fontSize: '50px'})};
`

export const ContainerOffice = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-right: 100px;
    color: #7d828f;

    ${tablet({marginBottom: '40px'})};
`

export const ContainerTitle = styled.span`
    font-weight: bold;
    margin-bottom: 30px;
`

export const Email = styled.span`
    margin-bottom: 10px;
`

export const Adress = styled.span`
    margin-bottom: 10px;
`

export const Phone = styled.span`
    margin-bottom: 40px;
    
`

export const Button = styled.button`
    font-weight: bold;
    border: none;
    background-color: transparent;
    width: 100px;
    ${tablet({position: 'relative'})};
    ${tablet({left: '470px'})};
    ${tablet({bottom: '70px'})};

    ${mobile({bottom: '0px'})};
    ${mobile({left: '0px'})};
`

