import React from 'react'
import Logo from './../../../assets/logo-copy.svg'
import {Container, ContainerContent, ContainerLogo, ContainerNav, NavItem, BtnPortifolio, Img} from './style'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <Container>
        <ContainerContent>
            <ContainerLogo>
                <Link to={'/'}><Img src={Logo} /></Link>
            </ContainerLogo>
            <ContainerNav>
                <Link to={'/portifolio'}><NavItem>Portifolio</NavItem></Link>
                <NavItem>About Us</NavItem>
                <NavItem>Contact</NavItem>
            </ContainerNav>
        </ContainerContent>
        <BtnPortifolio>See Our Portifolio</BtnPortifolio>
    </Container>
  )
}

export default Footer