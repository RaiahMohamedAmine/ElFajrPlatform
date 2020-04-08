import React from 'react'
import './header.css'

const Header = ({
    toHome = f => f,
    toArchive = f => f,
    toStats=f=>f,
}) => {
    return <div className='header'>
        <div className='header-left'>
            <span className='header-logo' onClick={toHome}></span>
            <h2 className='header-title'>Association El Fadjr</h2>
        </div>
        <div className='header-icons-container'>
            <div className='header-icon header-archive-icon' onClick={toArchive}>
            </div>
            <div className='header-icon header-stats-icon' onClick={toStats}>
            </div>
        </div>
    </div>
}
export default Header;