import styled from 'styled-components'
import {mobile, tablet} from './../../responsive'

import Image228b from './../../assets/portfolio/desktop/image-228b.jpg'
import Image228bTablet from './../../assets/portfolio/tablet/image-228b.jpg'
import Image228bMobile from './../../assets/portfolio/mobile/image-228b.jpg'

import DelSol from './../../assets/portfolio/desktop/image-del-sol.jpg'
import DelSolTablet from './../../assets/portfolio/tablet/image-del-sol.jpg'
import DelSolMobile from './../../assets/portfolio/mobile/image-del-sol.jpg'

import Edelweiss from './../../assets/portfolio/desktop/image-edelweiss.jpg'
import EdelweissTablet from './../../assets/portfolio/tablet/image-edelweiss.jpg'
import EdelweissMobile from './../../assets/portfolio/mobile/image-edelweiss.jpg'

import Eebox from './../../assets/portfolio/desktop/image-eebox.jpg'
import EeboxTablet from './../../assets/portfolio/tablet/image-eebox.jpg'
import EeboxMobile from './../../assets/portfolio/mobile/image-eebox.jpg'

import federal from './../../assets/portfolio/desktop/image-federal.jpg'
import federalTablet from './../../assets/portfolio/tablet/image-federal.jpg'
import federalmobile from './../../assets/portfolio/mobile/image-federal.jpg'

import ImageHypers from './../../assets/portfolio/desktop/image-hypers.jpg'
import ImageHypersTablet from './../../assets/portfolio/tablet/image-hypers.jpg'
import ImageHypersmobile from './../../assets/portfolio/mobile/image-hypers.jpg'

import netcry from './../../assets/portfolio/desktop/image-netcry.jpg'
import netcryTablet from './../../assets/portfolio/tablet/image-netcry.jpg'
import netcryMobile from './../../assets/portfolio/mobile/image-netcry.jpg'

import paramour from './../../assets/portfolio/desktop/image-paramour.jpg'
import paramourTablet from './../../assets/portfolio/tablet/image-paramour.jpg'
import paramourMobile from './../../assets/portfolio/mobile/image-paramour.jpg'

import prototype from './../../assets/portfolio/desktop/image-prototype.jpg'
import prototypeTablet from './../../assets/portfolio/tablet/image-prototype.jpg'
import prototypeMobile from './../../assets/portfolio/mobile/image-prototype.jpg'

import Seraph from './../../assets/portfolio/desktop/image-seraph.jpg'
import SeraphTablet from './../../assets/portfolio/tablet/image-seraph.jpg'
import SeraphMobile from './../../assets/portfolio/mobile/image-seraph.jpg'


import sxiv from './../../assets/portfolio/desktop/image-sxiv.jpg'
import sxivTablet from './../../assets/portfolio/tablet/image-sxiv.jpg'
import sxivMobile from './../../assets/portfolio/mobile/image-sxiv.jpg'

import trinity from './../../assets/portfolio/desktop/image-trinity.jpg'
import trinityTablet from './../../assets/portfolio/tablet/image-trinity.jpg'
import trinityMobile from './../../assets/portfolio/mobile/image-trinity.jpg'

export const Container = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    ${tablet({width: '768px'})};
    ${mobile({width: '380px'})};
`
export const ContainerContent = styled.section`
    width: 75%;
    ${tablet({width: '80%'})};

    ${mobile({width: '80%'})};
    
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 50px;
    ${tablet({flexDirection: 'column'})};
    ${tablet({width: '100%'})};
    ${tablet({height: '840px'})};
`

export const SeraphStation = styled.div`
    height: 500px; 
    width: 30%;
    background-image: url(${Seraph});
    background-size: cover;

    ${tablet({width: '100%'})};
    ${tablet({height: '250px'})};
    ${tablet({backgroundImage: `url(${SeraphTablet})`})};

    ${mobile({backgroundImage: `url(${SeraphMobile})`})};
    
`

export const EeboxBuilding = styled.div`
    height: 500px; 
    width: 30%;
    background-image: url(${Eebox});
    background-size: cover;
    ${tablet({width: '100%'})};
    ${tablet({height: '250px'})};
    ${tablet({backgroundImage: `url(${EeboxTablet})`})};

    ${mobile({backgroundImage: `url(${EeboxMobile})`})};
`

export const FederalTower = styled.div`
    height: 500px; 
    width: 30%;
    background-image: url(${federal});
    background-size: cover;
    ${tablet({width: '100%'})};
    ${tablet({height: '250px'})};
    ${tablet({backgroundImage: `url(${federalTablet})`})};

    ${mobile({backgroundImage: `url(${federalmobile})`})};
`

export const ProjectDelSol = styled.div`
    height: 500px; 
    width: 30%;
    background-image: url(${DelSol});
    background-size: cover;
    ${tablet({width: '100%'})};
    ${tablet({height: '250px'})};
    ${tablet({backgroundImage: `url(${DelSolTablet})`})};

    ${mobile({backgroundImage: `url(${DelSolMobile})`})};
`

export const LePrototype = styled.div`
    height: 500px; 
    width: 30%;
    background-image: url(${prototype});
    background-size: cover;
    ${tablet({width: '100%'})};
    ${tablet({height: '250px'})};
    ${tablet({backgroundImage: `url(${prototypeTablet})`})};

    ${mobile({backgroundImage: `url(${prototypeMobile})`})};
`

export const Tower = styled.div`
    height: 500px; 
    width: 30%;
    background-image: url(${Image228b});
    background-size: cover;
    ${tablet({width: '100%'})};
    ${tablet({height: '250px'})};
    ${tablet({backgroundImage: `url(${Image228bTablet})`})};

    ${mobile({backgroundImage: `url(${Image228bMobile})`})};
`

export const GrandEdelweissHotel = styled.div`
    height: 500px; 
    width: 30%;
    background-image: url(${Edelweiss});
    background-size: cover;
    ${tablet({width: '100%'})};
    ${tablet({height: '250px'})};
    ${tablet({backgroundImage: `url(${EdelweissTablet})`})};

    ${mobile({backgroundImage: `url(${EdelweissMobile})`})};
`

export const NectryTower = styled.div`
    height: 500px; 
    width: 30%;
    background-image: url(${netcry});
    background-size: cover;
    ${tablet({width: '100%'})};
    ${tablet({height: '250px'})};
    ${tablet({backgroundImage: `url(${netcryTablet})`})};

    ${mobile({backgroundImage: `url(${netcryMobile})`})};
`

export const TowerSXIV = styled.div`
    height: 500px; 
    width: 30%;
    background-image: url(${sxiv});
    background-size: cover;
    ${tablet({width: '100%'})};
    ${tablet({height: '250px'})};
    ${tablet({backgroundImage: `url(${sxivTablet})`})};

    ${mobile({backgroundImage: `url(${sxivMobile})`})};
`

export const TrinityBankTower = styled.div`
    height: 500px; 
    width: 30%;
    background-image: url(${trinity});
    background-size: cover;
    ${tablet({width: '100%'})};
    ${tablet({height: '250px'})};
    ${tablet({backgroundImage: `url(${trinityTablet})`})};

    ${mobile({backgroundImage: `url(${trinityMobile})`})};
`

export const Hypers = styled.div`
    height: 500px; 
    width: 30%;
    background-image: url(${ImageHypers});
    background-size: cover;
    ${tablet({width: '100%'})};
    ${tablet({height: '250px'})};
    ${tablet({backgroundImage: `url(${ImageHypersTablet})`})};

    ${mobile({backgroundImage: `url(${ImageHypersmobile})`})};
`

export const ProjectParamour = styled.div`
    height: 500px; 
    width: 30%;
    background-image: url(${paramour});
    background-size: cover;
    ${tablet({width: '100%'})};
    ${tablet({height: '250px'})};
    ${tablet({backgroundImage: `url(${paramourTablet})`})};

    ${mobile({backgroundImage: `url(${paramourMobile})`})};
`



export const ContainerText = styled.div`
    position: relative;
    top: 420px;
    left: 40px;
    color: white;
    ${tablet({top: '190px'})};
    font-family: 'League Spartan', sans-serif;
    width: 300px;
`

export const Title = styled.h2`
    text-shadow:2px 2px 5px #000000;
`

export const LinkProjects = styled.span`
    text-shadow:2px 2px 5px #000000;

`