import React, {useEffect } from 'react'
import './rdv-form.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import TextField from './../Form-Items/text-field';
import DateInput from './../Form-Items/date-input';
import Select from './../Form-Items/select';
import Button from './../Buttons/button';
import { useForm } from 'react-hooks-helper';
import { getInputDate } from './../rdvs-list';

const RdvForm = ({
    onAdd = f => f,
    idMalade,
    currentDate,
    updateRdvs=f=>f
}) => {
    const [rdv, setRdv] = useForm({
        idMalade: idMalade,
        dateRDV: '',
        lieu: '',
        motif: '',
    })
    return <form className='container rdv-form' onSubmit={e => {
        e.preventDefault()
        onAdd(rdv)
        if (rdv.dateRDV=== currentDate) {
            updateRdvs(currentDate)
        }
    }}>
        <div className='row justify-content-center align-items-around rdv-form-content'>
            <div className='col-10'>
                <DateInput title='Date' name='dateRDV' rdv= 'true'
                    required onChange={setRdv}
                    min={getInputDate()} />
            </div>
            <div className='col-10'>
                <TextField title='Lieu' name='lieu' required onChange={setRdv} />
            </div>
            <div className='col-10'>
                <Select title='Motif' name='motif' required onChange={setRdv}>
                    <option >Choisir Motif</option>
                    <option value='Consultation'>Consultation</option>
                    <option value='Radiothérapie'>Radiothérapie</option>
                    <option value='Chimiothérapie'>Chimiothérapie</option>
                    <option value='Imagerie'>Imagerie</option>
                    <option value='Analyse de laboratoire'>Analyse de laboratoire</option>
                </Select>
            </div>
            <div className='col-auto'>
                <Button>Ajouter Rendez-Vous</Button>
            </div>
        </div>
    </form>
}

export default RdvForm