import React from 'react'
import {Container,BtnSeeAll2, ContainerContent, Project1, Project2, Project3, Number, ContainerText, LinkProjects, Title, ContainerTop, TitleFeatured, BtnSeeAll} from './style'

const Featured = () => {
  return (
    <Container>
        <ContainerTop>
            <TitleFeatured>Featured</TitleFeatured>
            <BtnSeeAll>See All</BtnSeeAll>
        </ContainerTop>
        <ContainerContent>
            <Project1>
                <Number>1</Number>
                <ContainerText>
                    <Title>Project Del Sol</Title>
                    <LinkProjects>View All Projects</LinkProjects>
                </ContainerText>
            </Project1>
            <Project2>
                <Number>2</Number>
                <ContainerText>
                    <Title>228B Tower</Title>
                    <LinkProjects>View All Projects</LinkProjects>
                </ContainerText>
            </Project2>
            <Project3>
                <Number>3</Number>
                <ContainerText>
                    <Title>Le Prototype</Title>
                    <LinkProjects>View All Projects</LinkProjects>
                </ContainerText>
            </Project3>
            <BtnSeeAll2>See All</BtnSeeAll2>
        </ContainerContent>
    </Container>
  )
}

export default Featured