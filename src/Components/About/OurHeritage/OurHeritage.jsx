import {Container, ContainerContent, ContainerText, Title, ContainerP, Line1, Line2, Line3, Img} from './style'

const OurHeritage = () => {
    return(
        <Container>
            <ContainerContent>
                <ContainerText>
                    <Title>Our Heritage</Title>
                    <ContainerP>
                        <Line1>
                            Founded in 2007, we started as a trio of architects. Our complimentary skills and 
                            relentless attention to detail turned Arch into one of the most sought after boutique 
                            firms in the country.
                        </Line1>
                        <Line2>
                            Speciliazing in Urban Design allowed us to focus on creating exceptional structures that 
                            live in harmony with their surroundings. We consider every detail from every surrounding 
                            element to inform our designs. 
                        </Line2>
                        <Line3>
                            Our small team of world-class professionals provides input on every project.
                        </Line3>
                    </ContainerP>
                </ContainerText>
                <Img>
                </Img>
            </ContainerContent>
        </Container>
    )
}

export default OurHeritage