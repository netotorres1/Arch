import styled from 'styled-components'
import {tablet, mobile } from './../../../responsive'

import Jackson from './../../../assets/about/desktop/avatar-jackson.jpg'
import Jake from './../../../assets/about/desktop/avatar-jake.jpg'
import Maria from './../../../assets/about/desktop/avatar-maria.jpg'
import Thompdson from './../../../assets/about/desktop/avatar-thompson.jpg'

export const Container = styled.div`
    display: flex;
    width: 100vw;
    justify-content: center;
    font-family: 'League Spartan', sans-serif;
    margin-top: 200px;
    ${tablet({width: '768px'})};

    ${mobile({width: '380px'})};
    ${mobile({height: '1550px'})};
    ${mobile({position: 'relative'})};
    ${mobile({bottom: '150px'})};
    
`

export const ContainerContent = styled.section`
    width: 75%;
    display: flex;
    flex-direction: row;
    ${tablet({flexDirection: 'column'})};
    ${tablet({width: '80%'})};

    
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 30px;

    ${tablet({width: '100%'})};
    ${tablet({marginBottom: '150px'})};

    ${mobile({flexDirection: 'column'})};
    ${mobile({height: '650px'})};
    ${mobile({marginBottom: '80px'})};
`

export const Title = styled.div`
    width: 60%;
    font-weight: 700;
    font-size: 100px;

    ${tablet({marginBottom: '60px'})};
    ${mobile({fontSize: '50px'})};
`

export const ContainerLeaders = styled.div`
    width: 100%;
`

export const JakeRichards = styled.div`
    height: 290px;
    width: 290px;
    margin: 30px;
    background-image: url(${Jake});

    ${tablet({margin: '0px'})};
`

export const ThompsonSmith = styled.div`
    height: 290px;
    width: 290px;
    background-image: url(${Thompdson});
    margin: 30px;
    ${tablet({margin: '0px'})};
`

export const JacksonRourke = styled.div`
    height: 290px;
    width: 290px;
    background-image: url(${Jackson});
    margin: 30px;
    ${tablet({margin: '0px'})};
`

export const MariaSimpson = styled.div`
    height: 290px;
    width: 290px;
    background-image: url(${Maria});
    margin: 30px;
    ${tablet({margin: '0px'})};
`

export const ContainerText = styled.div`
    position: relative;
    top: 300px;
`

export const Name = styled.h2``

export const Subtitle = styled.span`
    color: #696A6F;
`

