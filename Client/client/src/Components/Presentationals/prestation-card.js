import React from 'react'
import './prestation-card.css'


const PrestationCard = ({
    prestation,
    onDelete
}) => <div className='prestation-card'>
        <div>
            <p>{prestation.date}</p>
            <p>{prestation.montant}</p>
            <p>{prestation.motif}</p>
        </div>
        <span onClick={e => onDelete(prestation)} />
    </div>

export default PrestationCard