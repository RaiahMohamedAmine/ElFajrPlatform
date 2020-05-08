import React from 'react'
import './photo-form.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import FileInput from '../Form-Items/file-input';
import Button from '../Buttons/button';
import Dialog from '../Dialogs/dialog';

const PhotoForm = ({
    formdata,
    onSubmit = f => f,
    goBack = f => f,
    onPhotoClick,
    modify
}) => {
    return <form className='container photo-form' onSubmit={onSubmit}>
            <div className='row justify-content-center align-items-center'>
                {
                    modify ? 
                    <div className='col-4 photo'>
                        <div style={{backgroundImage: "url(data:image/jpeg;base64," + formdata.photoIdentite + ")" }} 
                        onClick={e=> onPhotoClick("url(data:image/jpeg;base64," + formdata.photoIdentite + ")")}/>
                    </div>
                    :null
                }
                <div className={modify ? 'col-6' : 'col-10'}>
                    <FileInput name='photoIdentite' title="Photo D'Identité" formdata={formdata} required={!modify}></FileInput>
                </div>
                {
                    modify ? 
                    <div className='col-4 photo'>
                        <div style={{backgroundImage: "url(data:image/jpeg;base64," + formdata.anapathe + ")" }}
                        onClick={e=> onPhotoClick( "url(data:image/jpeg;base64," + formdata.anapathe + ")")}/>
                    </div>
                    :null
                }
                <div className={modify ? 'col-6' : 'col-10'}>
                    <FileInput name='anapathe' title="Anapathe" formdata={formdata} required={!modify}></FileInput>
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
}


export default PhotoForm