import React, { useEffect } from 'react'
import './prestation-dlg.css'
import './rdv-dialog.css'
import DialogTemplate from './two-col-dlg'
import 'bootstrap/dist/css/bootstrap.min.css';
import PrestationForm from './../Forms/prestation-form';
import PrestationCard from '../prestation-card';


const PrestationDialog = ({
    prestations = [],
    loading,
    id,
    onAdd = f => f,
    onClose = f => f,
    onDelete = f => f,
    fetchPrestation = f => f,
}) => {
    useEffect(() => {
        fetchPrestation(id)
    }, [id,fetchPrestation])
    return <DialogTemplate title='Préstations' onClose={onClose}>
        <div className='row justify-content-center prestation-list' style={{ height: loading || prestations.length === 0 ? "100%" : 'auto' }}>
            {loading ?
                <span>
                    <div className='loading'></div>
                </span>
                :
                prestations.length === 0 ?
                    <span>
                        <p>Ce malade n'a bénéficié d'aucune prestation</p>
                    </span>
                    :
                    prestations.map(
                        (prestation, i) => <PrestationCard key={i} idMalade={id} onDelete={onDelete} prestation={prestation} />
                    )}
        </div>
        <PrestationForm onAdd={onAdd} idMalade={id} />
    </DialogTemplate>
}

export default PrestationDialog