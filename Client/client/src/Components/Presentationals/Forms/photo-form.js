import React from 'react'
import './photo-form.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import FileInput from '../Form-Items/file-input';
import Button from '../button';

const PhotoForm = ({
    formdata,
    //onChange,
    onSubmit = f => f,
    goBack = f => f,
    type = 'photo'
}) => {
    type = ['photo', 'radio'].includes(type) ? type : 'photo'
    return type === 'photo'
        ?
        <form className='container photo-form' onSubmit={onSubmit}>
            <div className='row justify-content-center'>
                <div className='col-10'>
                    <FileInput name='photoIdentite' title="Photo D'Identité" formdata={formdata} required></FileInput>
                </div>
                <div className='col-10'>
                    <FileInput name='anapathe' title="Scan" formdata={formdata} required></FileInput>
                </div>
            </div>
            <div className='photo-form-btns'>
                <div className='col-auto'>
                    <Button onClick={e => {
                        e.preventDefault()
                        goBack()
                    }}>Précédent</Button>
                </div>
                <div className='col-auto'>
                    <Button>Suivant</Button>
                </div>
            </div>
        </form>
        :
        <form className='container photo-form' onSubmit={onSubmit}>
            <div className='row justify-content-center'>
                <div className='col-10 mt-4'>
                    <FileInput name='radio' title="Radios" formdata={formdata}></FileInput>
                </div>
            </div>
            <div className='photo-form-btns'>
            <div className='col-auto'>
                    <Button onClick={e => {
                        e.preventDefault()
                        goBack()
                    }}>Précédent</Button>
                </div>
                <div className='col-auto'>
                    <Button>Ajouter</Button>
                </div>
            </div>
        </form>
}


export default PhotoForm