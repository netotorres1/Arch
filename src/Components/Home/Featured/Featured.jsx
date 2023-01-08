import React from 'react'
import {Container,BtnSeeAll2, ContainerContent, Project1,ImgArrow, Project2, Project3, Number, ContainerText, LinkProjects, Title, ContainerTop, TitleFeatured, BtnSeeAll} from './style'
import {Link} from 'react-router-dom'

import IconArrow from './../../../assets/icons/icon-arrow-white.svg'

const Featured = () => {
  return (
    <Container>
        <ContainerTop>
            <TitleFeatured>Featured</TitleFeatured>
            <Link to={'/portifolio'}><BtnSeeAll>See All<ImgArrow src={IconArrow} /></BtnSeeAll></Link>
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
            <Link to={'/portifolio'}><BtnSeeAll2>See All<ImgArrow src={IconArrow} /></BtnSeeAll2></Link>
        </ContainerContent>
    </Container>
  )
}

export default Featured