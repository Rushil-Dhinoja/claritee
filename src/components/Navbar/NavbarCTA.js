import React from 'react'
import NavbarStyles from './Navbar.module.scss'
const NavbarCTA = () => {
    return (
        <div className={NavbarStyles['navbar-cta']}>
            <div className={NavbarStyles.signup} >Sign Up for free</div>
            <div className={NavbarStyles.signin}>Sign In</div>
        </div>
    )
}

export default NavbarCTA
