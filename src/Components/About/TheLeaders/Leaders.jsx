import {Container, ContainerContent, Title, ContainerLeaders, Row, JakeRichards, ThompsonSmith, JacksonRourke, MariaSimpson, Name, Subtitle, ContainerText} from './style'

const Leaders = () => {
    return(
        <Container>
            <ContainerContent>
                <Title>The Leaders</Title>
                <ContainerLeaders>
                    <Row>
                        <JakeRichards>
                            <ContainerText>
                                <Name>Jake Richards</Name>
                                <Subtitle>Chief Architect</Subtitle>
                            </ContainerText>
                        </JakeRichards>
                        <ThompsonSmith>
                            <ContainerText>
                                <Name>Thompson Smith</Name>
                                <Subtitle>Head of Finance</Subtitle>
                            </ContainerText>
                        </ThompsonSmith>

                    </Row>    
                    <Row>
                        <JacksonRourke>
                            <ContainerText>
                                <Name>Jackson Rourke</Name>
                                <Subtitle>Lead Designer</Subtitle>
                            </ContainerText>
                        </JacksonRourke>
                        <MariaSimpson>
                            <ContainerText>
                                <Name>Maria Simpson</Name>
                                <Subtitle>Senior Architect</Subtitle>
                            </ContainerText>
                        </MariaSimpson>
                    </Row>
                </ContainerLeaders>
            </ContainerContent>
        </Container>
    )
}

export default Leaders