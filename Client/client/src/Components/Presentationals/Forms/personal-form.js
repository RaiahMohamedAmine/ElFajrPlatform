import React, { useState, useEffect } from 'react'
import './personal-form.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import TextField from '../Form-Items/text-field';
import Select from '../Form-Items/select';
import Button from '../Buttons/button';
import DateInput from '../Form-Items/date-input';
import {getInputToday } from './../rdvs-list';

const PersonalForm = ({
    onChange,
    onSubmit,
    formdata = {},
    modify
}) => {
    var [marie,ChangeMarie] = useState(true);
    useEffect(()=>{
        if(modify){
            const isMarried = formdata.situationFamilliale==='celibataire';
            ChangeMarie(isMarried);
        }
    })
    return <form className='container personal-form'
        onSubmit={onSubmit}>
        <div className='row'>
            <div className='col-4'>
                <TextField title='Nom' required
                    value={formdata.nom} name='nom' onChange={onChange} modify={modify && marie}></TextField>
            </div>
            <div className='col-4'>
                <TextField title='Prénom' required
                    value={formdata.prenom} name='prenom' onChange={onChange} modify={modify}></TextField>
            </div>
            <div className='col-4'>
                <TextField title='ID' required type="number"
                    value={formdata._id} name='_id' onChange={onChange} modify={modify}></TextField>
            </div>
            <div className='col-6'>
                <TextField title='Adresse' required type='adresse'
                    value={formdata.adresse} name='adresse' onChange={onChange}></TextField>
            </div>
            <div className='col-6'>
                <TextField title='Lieu des soins' required type='adresse'
                    value={formdata.lieu} name='lieu' onChange={onChange}></TextField>
            </div>
            <div className='col-3'>
                <Select title='Sexe' required name='sexe' 
                    value={formdata.sexe} onChange={onChange} modify={modify}>
                    <option value='Male'>Homme</option>
                    <option value='Female'>Femme</option>
                </Select>
            </div>
            <div className='col-3'>
                <DateInput name='dateNaissance' value={formdata.dateNaissance} onChange={onChange}
                 title='Date de Naissance' modify={modify}
                 max={getInputToday()}></DateInput>
            </div>
            <div className='col-3'>
                <DateInput name='dateAdhesion' value={formdata.dateAdhesion} onChange={onChange}
                 title='Date dAdhesion' modify={modify} max={getInputToday()}></DateInput> 
            </div>  
            <div className='col-3'>
                <Select title='Type du Cancer' required modify={modify}
                    name='type' onChange={onChange}
                    value={formdata.type}>
                    <option value='Poumon'>Poumon</option>
                    <option value='Sang'>Sang</option>
                    <option value='Foie'>Foie</option>
                    <option value='Sein'>Sein</option>
                    <option value='Prostate'>Prostate</option>
                    <option value='Vessie'>Vessie</option>
                    <option value='Peau'>Peau</option>
                    <option value='Colorectal'>Colorectal</option>
                    <option value='Utérus'>Utérus</option>
                    <option value='Estomac'>Estomac</option>
                    <option value='Gorge'>Gorge</option>
                    <option value='Amigdale'>Amigdale</option>
                    <option value='Cavum'>Cavum</option>
                    <option value='Ovaires'>Ovaires</option>
                    <option value='Pancreas'>Pancreas</option>
                    <option value='Goitre'>Goitre</option>
                    <option value='Os'>Os</option>
                </Select>
            </div>     
            
            <div className='col-4'>
                <Select title='Situation Familiale'
                    name='situationFamilliale' value={formdata.situationFamilliale} onChange={e=> {onChange(e); 
                    if (e.target.value==='celibataire') 
                    {   ChangeMarie(true) }
                    else {
                        ChangeMarie (false);
                    }
                    }}>
                    <option value='celibataire'>Célibataire</option>
                    <option value='marie(e)'>Marié(e)</option>
                    <option value='veuf(ve)'>Veuf(ve)</option>
                    <option value='divorce(e)'>Divorce(e)</option>
                </Select>
            </div>
           
            <div className='col-4'>
                <TextField title='Nombre denfants' modify={marie} type='number'
                    value={formdata.nbEnfants} name='nbEnfants' onChange={onChange}></TextField>
            </div>
            <div className='col-4'>
                <TextField title='Profession' required
                    value={formdata.fonction} name='fonction' onChange={onChange}></TextField>
            </div>
            <div className='col-4'>
                <TextField title='N° de Téléphone' type='tel' required
                    value={formdata.tel} name='tel' onChange={onChange}></TextField>
            </div>
            <div className='col-3'>
                <TextField title='Autre N° de Téléphone' type='tel' 
                    value={formdata.autreTel} name='autreTel' onChange={onChange}></TextField>
            </div>    
            <div className='col-3'>
                <Select title='Assurance' required
                    name='assure' value={formdata.assure} onChange={onChange}>
                    <option value={true}>Assuré(e)</option>
                    <option value={false}>Non Assuré(e)</option>
                </Select>
            </div>
            <div className='col-2'>
                <Select title='Adhérent' required
                    name='adherent' value={formdata.adherent} onChange={onChange}>
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