import styled from "styled-components";
import {tablet, mobile} from './../../../responsive'

export const Container = styled.div`
    width: 100vw;
    height: 900px;
    display: flex;
    justify-content: center;
    ${tablet({height: '660px'})};
    ${mobile({height: '400px'})};
    
`

export const ContainerContent = styled.div`
    width: 75%;
    display: flex;
    flex-direction: column;
    position: relative;
    ${tablet({width: '768px'})};

    ${mobile({height: '500px'})};
`

export const ContainerWelcome = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    ${mobile({position: 'relative'})};
    ${mobile({bottom: '240px'})};
`

export const ContainerText = styled.div`
    width: 70%;
    display: flex;
    flex-direction: row;
    margin-top: 150px;
    color: #7d828f;
    
    ${tablet({display: 'flex'})};
    ${tablet({alignItems: 'center'})};
    ${tablet({justifyContent: 'center'})};
    ${tablet({width: '100%'})};
`

export const Title = styled.h1`
    position: absolute;
    font-size: 250px;
    left: 30px;
    top: 90px;
    color: #eeeff4;
    font-family: 'League Spartan', sans-serif;
    ${tablet({fontSize: '160px'})};
    ${tablet({left: '60px'})};
    ${tablet({bottom: '40px'})};

    ${mobile({display: 'none'})};
`

export const ContainerLeft = styled.div`
    width: 50%;
    height: 60%;
    margin-top: 100px;
    margin-right: 100px;
    font-family: 'League Spartan', sans-serif;
    ${tablet({width: '80%'})};
    ${tablet({position: 'relative'})};
    ${tablet({left: '40px'})};

`

export const TitleContainerleft = styled.h2`
    font-size: 60px;
    color: black;
    ${tablet({marginBottom: '20px'})};

    ${mobile({fontSize: '40px'})};
`

export const TextContainerLeft = styled.p`
    ${tablet({marginBottom: '20px'})};
`

export const ContainerRight = styled.div`
    width: 50%;
    ${tablet({display: 'none'})};
`

export const ImgContainerRight = styled.img``