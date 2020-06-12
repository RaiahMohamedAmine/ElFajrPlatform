import React from 'react'
import './header.css'

const Header = ({
    toHome = f => f,
    toArchive = f => f,
    toStats = f => f,
    toChangePass = f => f,
    toPrestationBureau =f=> f
}) => {
    return <div className='header'>
        <div className='header-left'>
            <span className='header-logo' onClick={toHome}></span>
            <div className='header-titles'>
                <h2 className='header-main-title'>Association El Fedjr</h2>
                <h5 className='header-secondary-title'>Bureau Dellys</h5>
            </div>
        </div>
        <div className='header-icons-container'>
            <div className='header-icon header-archive-icon' onClick={toArchive}>
            </div>
            <div className='header-icon header-calculator-icon' onClick={toPrestationBureau}>
            </div>
            <div className='header-icon header-stats-icon' onClick={toStats}>
            </div>
            <div className='header-icon header-settings-icon' onClick={toChangePass}>
            </div>
        </div>
    </div>
}
export default Header;