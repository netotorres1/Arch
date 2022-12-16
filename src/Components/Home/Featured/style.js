import styled from 'styled-components'
import DelSol from './../../../assets/portfolio/desktop/image-del-sol.jpg'
import Image228b from './../../../assets/portfolio/desktop/image-228b.jpg'
import prototype from './../../../assets/portfolio/desktop/image-prototype.jpg'
import {tablet, mobile } from './../../../responsive'

export const Container = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: 'League Spartan', sans-serif;
    ${mobile({position: 'relative'})};
    ${mobile({bottom: '50px'})};
`

export const ContainerContent = styled.div`
    width: 75%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    ${tablet({flexDirection: 'column'})};
    ${tablet({alignItems: 'center'})};
    ${tablet({width: '768px'})};

    ${mobile({width: '380px'})};
    
`

export const Project1 = styled.div`
    width: 30%;
    height: 500px;
    background-image: url(${DelSol});
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    ${tablet({width: '80%'})};
    ${tablet({height: '50%'})};
    ${tablet({marginBottom: '20px'})};

`

export const Project2 = styled.div`
    width: 30%;
    height: 500px;
    background-image: url(${Image228b});
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    ${tablet({width: '80%'})};
    ${tablet({height: '50%'})};
    ${tablet({marginBottom: '20px'})};
`

export const Project3 = styled.div`
    width: 30%;
    height: 500px;
    background-image: url(${prototype});
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    ${tablet({width: '80%'})};
    ${tablet({height: '50%'})};
    ${tablet({marginBottom: '20px'})};
`

export const ContainerText = styled.div`
    color: white;
    position: relative;
    bottom: 30px;
    left: 30px;
   
`

export const Title = styled.h2``

export const LinkProjects = styled.button`
    background-color: transparent;
    border: none;
    color: white;
`

export const Number = styled.h2`
    font-size: 150px;
    position: relative;
    left: 280px;
    color: rgba(238, 239, 244, 0.4);
    width: 150px;
    ${tablet({left: '520px'})};

    ${mobile({left: '220px'})};
    ${mobile({width: '100px'})};
`

export const ContainerTop = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 75%;
    align-items: center;
    margin: 50px;
    ${tablet({width: '80%'})};

    ${mobile({width: '380px'})};
    ${mobile({width: '80%'})};
`

export const TitleFeatured = styled.h2`
    font-size: 70px;
    ${mobile({fontSize: '45px'})};
`

export const BtnSeeAll = styled.button`
    height: 60px;
    width: 200px;
    color: white;
    font-weight: bold;
    background-color: #1b1d23;
    ${mobile({display: 'none'})};
`
export const BtnSeeAll2 = styled.button`
    height: 60px;
    width: 200px;
    color: white;
    font-weight: bold;
    background-color: #1b1d23;
    display: none;
    ${tablet({display: 'none'})};
    ${mobile({display: 'flex'})};
    ${mobile({alignItems: 'center'})};
    ${mobile({justifyContent: 'center'})};
    ${mobile({fontSize: '15px'})};
    ${mobile({border: 'none'})};
    ${mobile({width: '80%'})};
`