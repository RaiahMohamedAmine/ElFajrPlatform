import React, { useEffect } from 'react'
import './prestation-dlg.css'
import './rdv-dialog.css'
import DialogTemplate from './two-col-dlg'
import 'bootstrap/dist/css/bootstrap.min.css';
import PrestationBureau from './../Forms/prestationBureau-form';
import PrestationCard from '../prestation-card';


const PrestationDialog = ({
    prestations = [],
    loading,
    onAdd = f => f,
    onClose = f => f,
    onDelete = f => f,
    fetchPrestation = f => f,
}) => {
    useEffect(() => {
        fetchPrestation()
    }, [fetchPrestation])
    return <DialogTemplate title='Préstations Bureau' onClose={onClose}>
        <div className='row justify-content-center prestation-list' style={{ height: loading || prestations.length === 0 ? "100%" : 'auto' }}>
            {loading ?
                <span>
                    <div className='loading'></div>
                </span>
                :
                    prestations.map(
                        (prestation, i) => <PrestationCard key={i} onDelete={onDelete} prestation={prestation} />
                    )}
        </div>
        <PrestationBureau onAdd={onAdd} />
    </DialogTemplate>
}

export default PrestationDialog