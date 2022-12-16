import { Container, SeraphStation, EeboxBuilding, FederalTower, ProjectDelSol, LePrototype, Tower, Row, ContainerContent, ContainerText, Title, LinkProjects, GrandEdelweissHotel, NectryTower, Hypers, TowerSXIV, TrinityBankTower, ProjectParamour } from './style'

const PortifolioComponent = () => {
    return(
        <Container>
            <ContainerContent>
                <Row>
                    <SeraphStation>
                        <ContainerText>
                            <Title>Seraph Station</Title>
                            <LinkProjects>September 2019</LinkProjects>
                        </ContainerText>
                    </SeraphStation>
                    <EeboxBuilding>
                        <ContainerText>
                            <Title>Eebox Building</Title>
                            <LinkProjects>August 2017</LinkProjects>
                        </ContainerText>
                    </EeboxBuilding>
                    <FederalTower>
                        <ContainerText>
                            <Title>Federal II Tower</Title>
                            <LinkProjects>March 2017</LinkProjects>
                        </ContainerText>
                    </FederalTower>
                </Row>
                <Row>
                    <ProjectDelSol>
                        <ContainerText>
                            <Title>Project Del Sol</Title>
                            <LinkProjects>January 2016</LinkProjects>
                        </ContainerText>
                    </ProjectDelSol>
                    <LePrototype>
                        <ContainerText>
                            <Title>Le Prototype</Title>
                            <LinkProjects>October 2015</LinkProjects>
                        </ContainerText>
                    </LePrototype>
                    <Tower>
                        <ContainerText>
                            <Title>228B Tower</Title>
                            <LinkProjects>April 2015</LinkProjects>
                        </ContainerText>
                    </Tower>
                </Row>
                <Row>
                    <GrandEdelweissHotel>
                        <ContainerText>
                            <Title>Grand Edelweiss Hotel</Title>
                            <LinkProjects>December 2013</LinkProjects>
                        </ContainerText>
                    </GrandEdelweissHotel>
                    <NectryTower>
                        <ContainerText>
                            <Title>Netcry Tower</Title>
                            <LinkProjects>August 2012</LinkProjects>
                        </ContainerText>
                    </NectryTower>
                    <Hypers>
                        <ContainerText>
                            <Title>Hypers</Title>
                            <LinkProjects>January 2012</LinkProjects>
                        </ContainerText>
                    </Hypers>
                </Row>
                <Row>
                    <TowerSXIV>
                        <ContainerText>
                            <Title>SXIV Tower</Title>
                            <LinkProjects>March 2011</LinkProjects>
                        </ContainerText>
                    </TowerSXIV>
                    <TrinityBankTower>
                        <ContainerText>
                            <Title>Trinity Bank Tower</Title>
                            <LinkProjects>September 2017</LinkProjects>
                        </ContainerText>
                    </TrinityBankTower>
                    <ProjectParamour>
                        <ContainerText>
                            <Title>Project Paramour</Title>
                            <LinkProjects>Frebruary 2008</LinkProjects>
                        </ContainerText>
                    </ProjectParamour>
                </Row>
            </ContainerContent>
        </Container>
    )
}

export default PortifolioComponent