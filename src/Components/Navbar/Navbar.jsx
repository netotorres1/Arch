import React, {useState} from 'react'
import {Container, ContainerContent, LogoBtn, ContainerNavbar, BtnNavbar, BtnMenuMobile} from './style'
import Logo from './../../assets/logo.svg'
import {MdMenu, MdClose} from 'react-icons/md'

const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false)

  const handleOpen = () => {
    setOpenMenu(!openMenu);
  }

  return (
    <Container>
        <ContainerContent>
            <LogoBtn src={Logo} />
            <ContainerNavbar className={openMenu !== true ? '' : 'open'}>
                <BtnNavbar>Portfolio</BtnNavbar>
                <BtnNavbar>About Us</BtnNavbar>
                <BtnNavbar>Contact</BtnNavbar>
            </ContainerNavbar>
            <BtnMenuMobile onClick={handleOpen}>
              {openMenu !== true ? <MdMenu size={30} color='black'/> : <MdClose size={30} color='black' />}
            </BtnMenuMobile>
        </ContainerContent>
    </Container>
  )
}

export default Navbar