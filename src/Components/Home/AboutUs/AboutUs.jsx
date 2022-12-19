import React from 'react'
import {Container, ContainerContent, ContainerText, Title, Btn} from './style'
import { Link } from 'react-router-dom'

const AboutUs = () => {
  return (
    <Container>
        <ContainerContent>
            <ContainerText>
                <Title>Small Team, Big Ideas</Title>
                <Link to={'/about'}><Btn>About Us</Btn></Link>
            </ContainerText>
        </ContainerContent>
    </Container>
  )
}

export default AboutUs