import React from 'react'
import './header.css'

const Header = ({
        toHome=f=>f,
        toArchive=f=>f
    }) => {
    return <div className='header'>
        <div className='header-left'>
            <span className='header-logo' onClick={toHome}></span>
            <h2 className='header-title'>Association El Fadjr</h2>
        </div>
        <div className='header-settings' onClick={toArchive}>
        </div>
    </div>
}
export default Header;