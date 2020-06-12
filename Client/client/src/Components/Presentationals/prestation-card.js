import React from 'react'
import './prestation-card.css'


const PrestationCard = ({
    prestation,
    onDelete,
    canDelete=true
}) => <div className='prestation-card'>
        <div>
            <p>{prestation.date}</p>
            <p>{prestation.montant}</p>
            <p>{prestation.motif }{ prestation.details ? ' ( '+ prestation.details + ' )' : ''}</p>
        </div>
        {
            canDelete ?
            <span onClick={e => onDelete(prestation)} />
            : null
        }
    </div>

export default PrestationCard