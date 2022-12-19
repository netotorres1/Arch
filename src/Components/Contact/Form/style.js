import styled from 'styled-components'
import {tablet, mobile } from './../../../responsive'

export const Container = styled.section`
    width: 100vw;
    display: flex;
    justify-content: center;
    font-family: 'League Spartan', sans-serif;
    ${tablet({width: '768px'})};
    ${tablet({height: '600px'})};

    ${mobile({width: '380px'})};
    ${mobile({height: '700px'})};
`

export const ContainerContent = styled.div`
    width: 75%;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 550px;
    ${tablet({width: '80%'})};
    ${tablet({display: 'flex'})};
    ${tablet({flexDirection: 'column'})};
    ${tablet({justifyContent: 'flex-start'})};
`

export const Title = styled.h1`
    width: 30%;
    font-size: 80px;
    ${tablet({width: '100%'})};
    ${tablet({textAlign: 'left'})};
    ${tablet({margin: '50px'})};
    ${tablet({marginTop: '150px'})};

    ${mobile({width: '50%'})};
    ${mobile({fontSize: '50px'})};
    ${mobile({position: 'relative'})};
    ${mobile({right: '80px'})};
`

export const ContainerForm = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    align-items: flex-end;
    ${tablet({width: '100%'})};
`

export const InputName = styled.input`
    padding: 20px;
    width: 100%;
    border: none;
    border-bottom: 1px solid black;
    margin-bottom: 20px;
    ${tablet({marginBottom: '30px'})};
`

export const InputEmail = styled.input`
    padding: 20px;
    width: 100%;
    border: none;
    border-bottom: 1px solid black;
    margin-bottom: 20px;
    ${tablet({marginBottom: '30px'})};
`

export const TextAreaMessage = styled.textarea`
    padding: 20px;
    width: 100%;
    border: none;
    border-bottom: 1px solid black;
    margin-bottom: 20px;
    ${tablet({marginBottom: '0px'})};
`

export const Button = styled.button`
    height: 70px;
    width: 70px;
    color: white;
    background-color: black;
`