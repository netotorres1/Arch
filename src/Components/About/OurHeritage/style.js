import styled from "styled-components";
import Heritage from './../../../assets/about/desktop/image-heritage.jpg'
import {tablet, mobile } from './../../../responsive'

export const Container = styled.div`
    widows: 100vw;
    height: 500px;
    display: flex;
    justify-content: center;
    font-family: 'League Spartan', sans-serif;
    margin-top: 200px;

    ${mobile({width: '380px'})};
    ${mobile({height: '580px'})};

`

export const ContainerContent = styled.section`
    width: 75%;
    display: flex;
    flex-direction: row;
    ${tablet({width: '80%'})};
    ${mobile({height: '550px'})};
`

export const ContainerText = styled.div``

export const Img = styled.div`
    background-image: url(${Heritage});
    background-size: cover;
    width: 100%;
    height: 100%;
    ${tablet({display: 'none'})};
`

export const Title = styled.h2`
    font-size: 100px;
    width: 50%;
    margin-bottom: 30px;
    margin-top: 100px;

    ${mobile({fontSize: '50px'})};
`

export const ContainerP = styled.div`
    color: #60636D;
`

export const Line1 = styled.p`
    width: 80%;
    margin-bottom: 30px;
`

export const Line2 = styled.p`
    width: 80%;
    margin-bottom: 30px;
`

export const Line3 = styled.p`
    width: 80%;
    margin-bottom: 30px;
`
