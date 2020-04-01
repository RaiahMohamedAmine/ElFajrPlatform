import React from 'react'
import './malade-dlg.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dialog from './dialog'
import Button from '../Buttons/button';



const ArchiveDlg = ({
    malade = {},
    onClose = f => f,
    toPrestations=f=>f,
}) => {
    return <Dialog type='sm' onClose={onClose}>
        <div className='malade-dlg-container container'>
            <div className='row justify-content-around'>
                <div className='col-7 malade-dlg-header'>
                    <p className='malade-name'>{malade.nom + " " + malade.prenom}</p>
                    <p className='malade-adr'>{malade.adresse}</p>
                </div>
                <div className='col-auto photo' style={{ backgroundImage: "url(data:image/jpeg;base64," + malade.photoIdentite + ")" }}></div>
                <div className="col-10 line"></div>
            </div>
            <div className='row justify-content-center'>
                <div className='col-10 malade-field'>ID: <p>{malade._id}</p></div>
                <div className='col-10 malade-field'>Date de Naissance : <p>{malade.dateNaissance}</p></div>
                <div className='col-10 malade-field'>Adresse : <p>{malade.adresse}</p></div>
                <div className='col-10 malade-field'>Situation Familiale: <p>{malade.situationFamilliale}</p></div>
                <div className='col-10 malade-field'>Assuré(e): <p>{malade.assure ? "OUI" : "NON"}</p></div>
                <div className='col-10 malade-field'>Adhérent(e): <p>{malade.adherent ? "OUI" : "NON"}</p></div>
                <div className='col-10 malade-field'>Sexe: <p>{malade.sexe}</p></div>
                <div className='col-10 malade-field'>Fonction: <p>{malade.fonction}</p></div>
                <div className='col-10 malade-field'>N° de telephone: <p>{malade.tel}</p></div>
                <div className='col-10 malade-field'>Type Cancer: <p>{malade.type}</p></div>
            </div>
            <div className='row justify-content-center modifier-btn'>
                <Button onClick={toPrestations}>Prestations</Button>
            </div>
        </div>
    </Dialog>
}

export default ArchiveDlg