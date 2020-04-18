import React from 'react'
import './rdv-form.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import TextField from './../Form-Items/text-field';
import DateInput from './../Form-Items/date-input';
import Select from './../Form-Items/select';
import Button from './../Buttons/button';
import { useForm } from 'react-hooks-helper';
import { getInputDate } from './../rdvs-list';

const PrestationForm = ({
    onAdd = f => f,
    idMalade,
}) => {
    const [prestation, setPres] = useForm({
        idMalade: idMalade,
        date: '',
        type: '',
        motif: '',
        montant: '',
        annee:''
    })
    return <form className='container rdv-form' onSubmit={e => {
        e.preventDefault()
        prestation.annee=prestation.date.substring(0,4)
        onAdd(prestation)
    }}>
        <div className='row justify-content-center align-items-around rdv-form-content'>
            <div className='col-10'>
                <Select title='Type' name='type' required onChange={setPres}>
                    <option >Choisir type</option>
                    <option value='medicale'>Prestation Médicale</option>
                    <option value='sociale'>Prestation Sociale</option>
                </Select>
            </div>
            <div className='col-10'>
                <DateInput title='Date' name='date'
                    required onChange={setPres}
                    min={getInputDate()} />
            </div>
            <div className='col-10'>
                <TextField title='Montant' type='number' name='montant' required onChange={setPres} />
            </div>
            <div className='col-10'>
                <Select title='Motif' name='motif' required onChange={setPres}>
                    <option >Choisir Motif</option>
                    {
                        prestation.type === 'medicale' ?
                            <><option value='Imagerie'>Imagerie</option>
                                <option value='Consultation générale'>Consultation générale</option>
                                <option value='Consultation spécialisée'>Consultation spécalisée</option>
                                <option value='Analyse labo'>Analyse labo</option>
                                <option value='Médicament'>Médiacament</option>
                                <option value='Para pharmacie'>Para pharmacie</option></>
                            : prestation.type === 'sociale' ?
                                <><option value='Aide alimentaire'>Aide alimentaire</option>
                                    <option value='Aide en habillement'>Aide en habillement</option>
                                    <option value='Aide matérielle'>Aide matérielle</option>
                                    <option value='Aide pour fetes'>Aide pour fetes</option>
                                    <option value='Aide occasions religieuses'>Aide occasions religieuses</option> </> : null
                    }
                </Select>
            </div>
            <div className='col-auto'>
                <Button>Ajouter Préstation</Button>
            </div>
        </div>
    </form>
}

export default PrestationForm