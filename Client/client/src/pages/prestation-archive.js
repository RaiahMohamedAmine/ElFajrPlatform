import React, { useState, useEffect } from 'react'
import './prestation-archive.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dialog from '../Components/Presentationals/Dialogs/dialog'
import { withRouter } from 'react-router';
import GetPrestationById from '../middleware/prestation/GetPrestationById.js'
import PrestationCard from './../Components/Presentationals/prestation-card';


const PrestationArchive = ({
    match,
    history
}) => {
    const [prestations, setPrestation] = useState([])
    useEffect(() => {
        GetPrestationById(match.params.id).then(res => setPrestation(res.prestations))
    }, [])
    return <div>
        <Dialog type='sm' onClose={e => history.push('/archives')}>
            <div className='container prestation-archive-container'>
                <div className='row justify-content-center'>
                    <div className="col-auto">
                        <h1 style={{marginBottom:'40px'}}>Préstations</h1>
                    </div>
                </div>
                <div className='row justify-content-center prestation-archive-list'>
                    {
                        prestations.map(
                            (prestation, i) => {
                                return <PrestationCard prestation={prestation} key={i} canDelete={false}></PrestationCard>
                            }
                        )
                    }
                </div>
            </div>
        </Dialog>
    </div>
}


export default withRouter(PrestationArchive)