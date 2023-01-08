import styled from 'styled-components'
import {tablet, mobile} from './../../../responsive'

export const Container = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    font-family: 'League Spartan', sans-serif;
    ${tablet({width: '768px'})};

    ${mobile({width: '380px'})};
    ${mobile({flexDirection: 'column'})};
`
export const ImgArrow = styled.img`
    margin-left: 20px
`
export const ContainerContent = styled.div`
    width: 65%;
    display: flex;
    flex-direction: row;
    background-color: #eeeff4;
    position: relative;
    left: 40px;
    ${tablet({width: '100%'})};
    ${tablet({left: '0px'})};

    ${mobile({height: '300px'})};
    ${mobile({flexDirection: 'column'})};
    ${mobile({alignItems: 'center'})};
    ${mobile({position: 'relative'})};
    ${mobile({top: '60px'})};
`

export const ContainerLogo = styled.div`
    height: 150px;
    width: 150px;
    background-color: #1b1d23;
    display: flex;
    justify-content: center;
    align-items: center;
    ${mobile({position: 'absolute'})};
    ${mobile({bottom: '270px'})};
`

export const ContainerNav = styled.nav`
    padding: 30px;
    display: flex;
    align-items: center;
    ${mobile({flexDirection: 'column'})};
`

export const NavItem = styled.button`
    padding: 30px;
    background-color: transparent;
    font-weight: bold;
    border: none;
    color: #7d828f;

    &:hover{
        color: black;
        cursor: pointer;
    }
`

export const BtnPortifolio = styled.button`
    width: 250px;
    height: 60px;
    background-color: #1b1d23;
    color: white;
    font-weight: bold;
    position: relative;

    &:hover{
        cursor: pointer;
        background-color: #717987;
        border: none;
    }
    right: 40px;
    ${tablet({right: '30px'})}; 
    ${tablet({border: 'none'})};
    ${mobile({right: '0px'})};
`

export const Img = styled.img`
    height: 50px;
    width: 100px;
`