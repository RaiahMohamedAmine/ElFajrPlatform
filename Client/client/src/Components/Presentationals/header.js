import React, { Component } from 'react'
import './header.css'

const Header = ({
        onClick=f=>f,
    }) => {
    return <div className='header'>
        <div className='header-left'>
            <span className='header-logo'></span>
            <h2 className='header-title'>Association El Fadjr</h2>
        </div>
        <div className='header-settings' onClick={e => onClick()}>
        </div>
    </div>
}
export default Header;