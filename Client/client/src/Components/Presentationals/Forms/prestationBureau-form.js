import React, { useState } from 'react'
import './rdv-form.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import TextField from './../Form-Items/text-field';
import DateInput from './../Form-Items/date-input';
import Select from './../Form-Items/select';
import Button from './../Buttons/button';
import { useForm } from 'react-hooks-helper';
import { getInputToday } from './../rdvs-list';

const PrestationForm = ({
    onAdd = f => f,
}) => {
    const [prestation, setPres] = useForm({
        date: '',
        type: 'bureau',
        motif: '',
        montant: '',
        annee:''
    })
    //var [opacity,setOpacity]=useState(0);
    return <form className='container rdv-form' onSubmit={e => {
        e.preventDefault()
        prestation.annee=prestation.date.substring(0,4)
        console.log(prestation);
        onAdd(prestation)
    }}>
        <div className='row justify-content-center align-items-around rdv-form-content'>
            <div className='col-10'>
                <DateInput title='Date' name='date'
                    required onChange={setPres}
                    max={getInputToday()} />
            </div>
            <div className='col-10'>
                <TextField title='Montant' type='number' name='montant' required onChange={setPres} />
            </div>
            <div className='col-10'>
                <Select title='Motif' name='motif' required onChange={setPres}>
                    <option >Choisir Motif</option>
                    <option value='Fournitures de Bureau'>Fournitures de Bureau</option>
                    <option value="Facture d'électricité">Facture d'électricité</option>
                    <option value="Facture d'eau">Facture d'eau</option>
                    <option value='Facture de Telephone Fixe'>Facture de Telephone Fixe</option>
                    <option value='Cartes prépayés Mobilis'>Cartes prépayés Mobilis</option>
                    <option value='Cartes prépayés Internet'>Cartes prépayés Internet</option>
                    <option value='Frais de transport'>Frais de transport</option>
                    <option value='Dépenses Para-pharmacie'>Dépenses Para-pharmacie</option>
                    <option value='Aides Sociales'>Aides Sociales</option>
                    <option value='Prime pour les secretaires'>Prime pour les secretaires</option>
                </Select>
            </div>
            <div className='col-auto'>
                <Button>Ajouter Préstation</Button>
            </div>
        </div>
    </form>
}

export default PrestationForm