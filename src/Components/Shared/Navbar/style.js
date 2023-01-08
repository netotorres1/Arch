import styled from 'styled-components'
import {tablet, mobile} from './../../../responsive'

export const Container = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const ContainerContent = styled.div`
    width: 75%;
    display: flex;
    align-items: center;
    flex-direction: row;
    padding: 20px;
    ${tablet({justifyContent: 'space-between'})};
    ${mobile({width: '380px'})};
 
`

export const LogoBtn = styled.img`
    margin-right: 20px;
    ${mobile({height: '40px'})};
    ${mobile({marginTop: '10px'})};

    ${mobile({position: 'relative'})};
    ${mobile({left: '20px'})};

`

export const ContainerNavbar = styled.nav`
    font-family: 'League Spartan', sans-serif;
    ${tablet({display: 'flex'})};
    ${mobile({display: 'none'})};
    ${mobile({flexDirection: 'column'})};
    ${mobile({position: 'absolute'})};
    ${mobile({top: '94px'})};
    ${mobile({left: '60px'})};
    ${mobile({fontWeight: 'bold'})};
    
    ${mobile({background: '#EEEFF4'})};
    ${mobile({width: '320px'})};
    ${mobile({height: '280px'})};
    ${mobile({justifyContent: 'center'})};
    ${mobile({zIndex: '5'})};
    ${mobile({boxShadow: '-200px 200px 0px 200px rgba(0,0,0,0.72)'})};
    &.open{
        ${mobile({display: 'flex'})};
    }
    
`
export const BtnNavbar = styled.button`
    padding: 25px;
    background-color: transparent;
    border: none;
    font-weight: bold;
    color: #7d828f;

    ${mobile({fontSize:'30px'})};
    ${mobile({fontWeight: '700'})};
    ${mobile({padding:'10px'})};
    ${mobile({marginLeft:'30px'})};

    &:hover{
        cursor: pointer;
        color: black;
    }
`

export const BtnMenuMobile = styled.button`
    display: none;
    ${mobile({display: 'flex'})};
    ${mobile({marginTop: '10px'})};
    ${mobile({background: 'transparent'})};
    ${mobile({border: 'none'})};
`