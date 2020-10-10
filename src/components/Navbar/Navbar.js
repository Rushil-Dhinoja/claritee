import React from 'react'
import Navlist from './NavList'
import NavbarStyles from './Navbar.module.scss'
import NavbarLogo from './NavbarLogo'
import NavbarCTA from './NavbarCTA'

const Navbar = () => {
    return (
        <div className={NavbarStyles.navbar}>
            <NavbarLogo />
            <Navlist />
            <NavbarCTA />
        </div>
    )
}

export default Navbar
