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
                <Link to={'/about'}><NavItem>About Us</NavItem></Link>
                <Link to={'/contact'}><NavItem>Contact</NavItem></Link>
            </ContainerNav>
        </ContainerContent>
        <Link to={'/portifolio'}><BtnPortifolio>See Our Portifolio</BtnPortifolio></Link>
    </Container>
  )
}

export default Footer