import React, {useState} from 'react'
import {Container, ContainerContent, LogoBtn, ContainerNavbar, BtnNavbar, BtnMenuMobile} from './style'
import Logo from './../../../assets/logo.svg'
import {MdMenu, MdClose} from 'react-icons/md'
import {Link} from 'react-router-dom'

const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false)

  const handleOpen = () => {
    setOpenMenu(!openMenu);
  }

  return (
    <Container>
        <ContainerContent>
            <Link to={'/'} ><LogoBtn src={Logo} /></Link>
            <ContainerNavbar className={openMenu !== true ? '' : 'open'}>
                <Link to={'/portifolio'}><BtnNavbar>Portfolio</BtnNavbar></Link>
                <Link to={'/about'}><BtnNavbar>About Us</BtnNavbar></Link>
                <Link to={'/contact'}><BtnNavbar>Contact</BtnNavbar></Link>
            </ContainerNavbar>
            <BtnMenuMobile onClick={handleOpen}>
              {openMenu !== true ? <MdMenu size={30} color='black'/> : <MdClose size={30} color='black' />}
            </BtnMenuMobile>
        </ContainerContent>
    </Container>
  )
}

export default Navbar