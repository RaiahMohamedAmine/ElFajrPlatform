import React from 'react'
import './rdv-malade.css'

const RdvMalade = ({
    rdv,
    onDelete,
}) => {
    return <div className='rdv-malade'>
        <div>
            <p>{rdv.dateRDV}</p>
            <p>{rdv.lieu}</p>
            <p>{rdv.motif}{ rdv.details ? ' ( '+ rdv.details + ' )' : ''}</p>
        </div>
        <span onClick={e=> onDelete(rdv)}/>
    </div>
}

export default RdvMalade