import './dialog.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

const Dialog = ({
    children,
    onClose = f => f,
    type='lg',
}) => {
    type= ['sm','lg','xs'].includes(type) ? type : 'lg'
    return <div className='dialog-bg container-fluid'>
        <div className='dialog-close' onClick={e => onClose()}><p>+</p></div>
        <div className='dialog-container container'>
            <div className={"dialog-popup dialog-popup-"+type}>
                <div className='dialog-content'>
                    {children}
                </div>
            </div>
        </div>
    </div>

}


export default Dialog