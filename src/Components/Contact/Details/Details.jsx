import {Container, ContainerContent, ContainerTop, Title, ContainerOffice, ContainerTitle, Email, Adress, Phone, Button, ContainerMap } from './style'

const Details = () => {
    return(
        <Container>
            <ContainerContent>
                <ContainerTop>
                    <Title>Contact Details</Title>
                    <ContainerOffice>
                        <ContainerTitle>Main Office</ContainerTitle>
                        <Email>Mail: archone@mail.com</Email>
                        <Adress>Adress: 1892 Chernoweth Drive TN</Adress>
                        <Phone>Phone: 123-456-3451</Phone>
                        <Button>View on Map</Button>
                    </ContainerOffice>
                    <ContainerOffice>
                        <ContainerTitle>Office II</ContainerTitle>
                        <Email>Mail: archone@mail.com</Email>
                        <Adress>Adress: 3399 Wines Lane TX</Adress>
                        <Phone>Phone: 832-123-4321</Phone>
                        <Button>View on Map</Button>
                    </ContainerOffice>
                </ContainerTop>
                <ContainerMap>
                </ContainerMap>
            </ContainerContent>
        </Container>
    )
}

export default Details