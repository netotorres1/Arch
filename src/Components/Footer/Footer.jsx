import React from 'react'
import Logo from './../../assets/logo-copy.svg'
import {Container, ContainerContent, ContainerLogo, ContainerNav, NavItem, BtnPortifolio, Img} from './style'

const Footer = () => {
  return (
    <Container>
        <ContainerContent>
            <ContainerLogo>
                <Img src={Logo} />
            </ContainerLogo>
            <ContainerNav>
                <NavItem>Portifolio</NavItem>
                <NavItem>About Us</NavItem>
                <NavItem>Contact</NavItem>
            </ContainerNav>
        </ContainerContent>
        <BtnPortifolio>See Our Portifolio</BtnPortifolio>
    </Container>
  )
}

export default Footer