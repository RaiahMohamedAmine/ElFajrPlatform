import React, { useEffect} from 'react'
import './rdv-dialog.css'
import Dialog from './dialog';
import 'bootstrap/dist/css/bootstrap.min.css';
import RdvForm from './../Forms/rdv-form';
import RdvMalade from './../rdv-malade';

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
    }, [id,fetchRdv])
    return <Dialog onClose={onClose}>
        <div className='separation-line'></div>
        <div className='container rdv-dialog'>
            <div className='row'>
                <div className='col-6 left-part'>
                    <div className='row justify-content-center'>
                        <div className='col-auto'>
                            <h1>Les Rendez-Vous</h1>
                        </div>
                        <div className='col-10 separation-line2'></div>
                    </div>
                    <div className='row justify-content-center rdv-list'>
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
                </div>
                <div className='col-6 rdv-form-container'>
                    <RdvForm onAdd={onAdd} idMalade={id}></RdvForm>
                </div>
            </div>
        </div>
    </Dialog>
}

export default RdvDialog