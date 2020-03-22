import React from 'react'
import './personal-form.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import TextField from '../Form-Items/text-field';
import Select from '../Form-Items/select';
import Button from '../button';

const PersonalForm = ({
    onChange,
    onSubmit
}) => {
    return <form className='container personal-form'
        onSubmit={onSubmit}>
        <div className='row'>
            <div className='col-4'>
                <TextField title='Nom' required
                    name='nom' onChange={onChange}></TextField>
            </div>
            <div className='col-4'>
                <TextField title='Prénom' required
                    name='prenom' onChange={onChange}></TextField>
            </div>
            <div className='col-4'>
                <TextField title='ID' type='number' required
                    name='id' onChange={onChange}></TextField>
            </div>
            <div className='col-9'>
                <TextField title='Adresse' required
                    name='adresse' onChange={onChange}></TextField>
            </div>
            <div className='col-3'>
                <Select title='Sexe' required name='sexe' onChange={onChange}>
                    <option value='Male'>Homme</option>
                    <option value='Female'>Femme</option>
                </Select>
            </div>
            <div className='col-4'>
                <Select title='Situation Familiale'
                    name='situationFamilliale' onChange={onChange}>
                    <option value='marie(e)'>Marié(e)</option>
                    <option value='celibataire'>Célibataire</option>
                </Select>
            </div>
            <div className='col-4'>
                <TextField title='N° de Téléphone' type='number' required
                    name='tel' onChange={onChange}></TextField>
            </div>
            <div className='col-4'>
                <TextField title='Profession' required
                    name='fonction' onChange={onChange}></TextField>
            </div>
            <div className='col-3'>
                <Select title='Assurance' required
                    name='assure' onChange={onChange}>
                    <option value={true}>Assuré(e)</option>
                    <option value={false}>Non Assuré(e)</option>
                </Select>
            </div>
            <div className='col-3'>
                <Select title='Cancer' required
                    name='cancer' onChange={onChange}>
                    <option>Poumon</option>
                    <option>Sang</option>
                    <option>Foie</option>
                    <option>Sein</option>
                    <option>Prostate</option>
                    <option>Vessie</option>
                    <option>Peau</option>
                    <option>Colorectal</option>
                    <option>Utérus</option>
                    <option>Estomac</option>
                    <option>Gorge</option>
                </Select>
            </div>
            <div className='col-3'>
                <Select title='Adhérent' required
                    name='adherent' onChange={onChange}>
                    <option value={true}>Oui</option>
                    <option value={false}>Non</option>
                </Select>
            </div>
        </div>
        <div className='button-container'>
            <Button>Suivant</Button>
        </div>
    </form>
}


export default PersonalForm