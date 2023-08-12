import React from 'react'
import Logo from './bl-ox-logo.svg'

function Header() {
  return (
    <div className='header__wrapper'>
        {/* Logo */}
        <div className='header_logo'>
            <img src={Logo} width={25} />
        </div>
    </div>
  )
}

export default Header