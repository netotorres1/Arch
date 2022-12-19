import {Container, ContainerContent, Img, About, Title, ContainerAbout, TitleAbout, TextAbout} from './style'

const TellUs = () => {
    return(
        <Container>
            <ContainerContent>
                <Img>
                </Img>
                <About>
                    <Title>Contact</Title>
                    <ContainerAbout>
                        <TitleAbout>
                        Tell us about your project
                        </TitleAbout>
                        <TextAbout>
                            We’d love to hear more about your project. Please, leave a message below or give 
                            us a call. We have two offices, one in Texas and one in Tennessee. If you find 
                            yourself nearby, come say hello!
                        </TextAbout>
                    </ContainerAbout>
                </About>
            </ContainerContent>
        </Container>
    )
}

export default TellUs