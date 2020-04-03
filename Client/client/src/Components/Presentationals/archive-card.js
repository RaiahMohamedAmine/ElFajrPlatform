import React from 'react'
import './archive-card.css'

const ArchiveCard = ({
    malade,
    onClick
}) => {
    return <div className='archive-card-container' onClick={onClick}>
        <div className={malade.etat === 'mort' ? 'etat mort' : 'etat gueri'}></div>
        <div className='archive-card-photo' style={{ backgroundImage: "url(data:image/jpeg;base64," + malade.photoIdentite + ")" }}></div>
        <div className='archive-card-nom'>{malade.nom + " " + malade.prenom}</div>
        <div>{"Archivé le : "+malade.dateArchive}</div>
    </div>
}

export default ArchiveCard