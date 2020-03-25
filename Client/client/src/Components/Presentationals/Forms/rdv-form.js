import React from 'react'
import './rdv-form.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import TextField from './../Form-Items/text-field';
import DateInput from './../Form-Items/date-input';
import Select from './../Form-Items/select';
import Button from './../Buttons/button';

const RdvForm=({

})=>{
    return <form className='container rdv-form'>
        <div className='row justify-content-center align-items-around rdv-form-content'>
            <div className='col-10'>
                <TextField title='Docteur'></TextField>
            </div>
            <div className='col-10'>
                <DateInput title='Date'/>
            </div>
            <div className='col-10'>
                <TextField title='Lieu'></TextField>
            </div>
            <div className='col-10'>
                <Select title='Motif'>
                    <option>Consultation</option>
                    <option>Radiothérapie</option>
                    <option>Chimiothérapie</option>
                    <option>Imagerie</option>
                    <option>Analyse de laboratoire</option>
                </Select>
            </div>
            <div className='col-auto'>
                <Button>Ajouter Rendez-Vous</Button>
            </div>
        </div>
    </form>
}

export default RdvForm