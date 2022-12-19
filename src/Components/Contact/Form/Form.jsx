import {Container, ContainerContent, ContainerForm, Title, InputEmail, InputName, TextAreaMessage, Button} from './style'

const Form = () => {
    return(
        <Container>
            <ContainerContent>
                <Title>Conect with us</Title>
                <ContainerForm>
                    <InputName placeholder='Name' />
                    <InputEmail placeholder='Email' />
                    <TextAreaMessage placeholder='Message'>

                    </TextAreaMessage>
                    <Button>Submit</Button>
                </ContainerForm>
            </ContainerContent>
        </Container>
    )
}

export default Form