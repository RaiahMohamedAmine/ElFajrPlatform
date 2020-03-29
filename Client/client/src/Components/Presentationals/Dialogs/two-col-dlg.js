import React from 'react'
import './tmp-dialog.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dialog from './dialog';


const DialogTemplate = ({
    onClose = f => f,
    title,
    children = [],
}) => {
    return <Dialog onClose={onClose}>
        <div className='separation-line'></div>
        <div className='container tmp-dialog'>
            <div className='row'>
                <div className='col-6 left-part'>
                    <div className='row justify-content-center'>
                        <div className='col-auto'>
                            <h1 className='tmp-dlg-title'>{title}</h1>
                        </div>
                        <div className='col-10 separation-line2'></div>
                    </div>
                    {/* first child */}
                    {children[0]}
                </div>
                <div className='col-6 right-part'>
                    {/* second child */}
                    {children[1]}
                </div>
            </div>
        </div>
    </Dialog>
}

export default DialogTemplate