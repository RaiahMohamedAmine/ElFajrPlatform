import React from 'react'
import './rdv-dialog.css'
import Dialog from './dialog';
import 'bootstrap/dist/css/bootstrap.min.css';
import RdvForm from '../Forms/rdv-form';


const RdvDialog=({
    onClose=f=>f,
})=>{
    return <Dialog onClose={onClose}>
        <div className='separation-line'></div>
        <div className='container rdv-dialog'>
            <div className='row'>
                <div className='col-6 rdv-container d-flex justify-content-center'>
                    <h1>Les Rendez-Vous</h1>
                </div>
                <div className='col-6 rdv-form-container'>
                    <RdvForm></RdvForm>
                </div>
            </div>
        </div>
    </Dialog>
}

export default RdvDialog