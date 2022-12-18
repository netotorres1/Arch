import {Container, ContainerContent, Img, About, Title, ContainerAbout, TitleAbout, TextAbout} from './style'

const Team = () => {
    return(
        <Container>
            <ContainerContent>
                <Img>
                </Img>
                <About>
                    <Title>About</Title>
                    <ContainerAbout>
                        <TitleAbout>
                            Your team of professionals
                        </TitleAbout>
                        <TextAbout>
                            Our small team of world-class professionals will work with you every step of the way. 
                            Strong relationships are at the core of everything we do. This extends to the 
                            relationship our projects have with their surroundings.
                        </TextAbout>
                    </ContainerAbout>
                </About>
            </ContainerContent>
        </Container>
    )
}

export default Team