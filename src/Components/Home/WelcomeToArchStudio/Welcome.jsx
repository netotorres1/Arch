import React from 'react'
import {Container, ContainerWelcome, ContainerContent, Title, ContainerText, ContainerLeft, TitleContainerleft, TextContainerLeft, ContainerRight, ImgContainerRight} from './style'
import ImageWelcome from './../../../assets/home/desktop/image-welcome.jpg'

const Welcome = () => {
  return (
    <Container>
        <ContainerContent>
            <Title>Welcome</Title>
            <ContainerWelcome>
                <ContainerText>
                    <ContainerLeft>
                        <TitleContainerleft>
                            Welcome to Arch Studio
                        </TitleContainerleft>
                        <TextContainerLeft>
                            We have a unique network and skillset to help bring your projects to life. Our 
                            small team of highly skilled individuals combined with our large network put us 
                            in a strong position to deliver exceptional results.
                        </TextContainerLeft>
                        <TextContainerLeft>
                            Over the past 10 years, we have worked on all kinds of projects. From stations 
                            to high-rise buildings, we create spaces that inspire and delight.
                        </TextContainerLeft>
                        <TextContainerLeft>
                            We work closely with our clients so that we understand the intricacies of each 
                            project. This allows us to work in harmony the surrounding area to create truly 
                            stunning projects that will stand the test of time.
                        </TextContainerLeft>
                    </ContainerLeft>
                    <ContainerRight>
                        <ImgContainerRight src={ImageWelcome} />
                    </ContainerRight>
                </ContainerText>
            </ContainerWelcome>
        </ContainerContent>
    </Container>
  )
}

export default Welcome