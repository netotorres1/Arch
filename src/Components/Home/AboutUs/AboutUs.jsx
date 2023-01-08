import React from 'react'
import {Container, ContainerContent, ContainerText, Title,ImgArrow, Btn} from './style'
import { Link } from 'react-router-dom'

import IconArrow from './../../../assets/icons/icon-arrow-white.svg'

const AboutUs = () => {
  return (
    <Container>
        <ContainerContent>
            <ContainerText>
                <Title>Small Team, Big Ideas</Title>
                <Link to={'/about'}><Btn>About Us<ImgArrow src={IconArrow} /></Btn></Link>
            </ContainerText>
        </ContainerContent>
    </Container>
  )
}

export default AboutUs