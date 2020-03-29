import React, { useEffect } from 'react'
import './rdv-dialog.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import RdvMalade from './../rdv-malade';
import RdvForm from './../../Containers/RdvForm';
import DialogTemplate from './two-col-dlg';

const RdvDialog = ({
    id,
    rdvs = [],
    loading = true,
    onAdd = f => f,
    fetchRdv = f => f,
    onDelete = f => f,
    onClose = f => f,
}) => {
    useEffect(() => {
        fetchRdv(id)
    }, [id, fetchRdv])
    return <DialogTemplate onClose={onClose} title='Les Rendez Vous'>
        <div className='row justify-content-center rdv-list' style={{height: loading ? "100%":'auto'}}>
            {loading ?
                <span>
                    <div className='loading'></div>
                </span>
                :
                rdvs.map((rdv, i) => {
                    return <RdvMalade key={i} rdv={rdv} onDelete={onDelete} />
                })
            }
        </div>
        <RdvForm onAdd={onAdd} idMalade={id}></RdvForm>
    </DialogTemplate>
}

export default RdvDialog