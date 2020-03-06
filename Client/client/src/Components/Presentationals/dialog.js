import './dialog.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

const Dialog = ({
    children,
    onClose = f => f,
}) => {
    return <div className='dialog-bg container-fluid'>
        <div className='dialog-close' onClick={e => onClose()}><p>+</p></div>
        <div className='dialog-container container'>
            <div className='dialog-popup'>
                <div className='dialog-content'>
                    {children}
                </div>
            </div>
        </div>
    </div>

}


export default Dialog