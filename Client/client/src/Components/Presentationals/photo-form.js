import React from 'react'
import './photo-form.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import FileInput from './Form-Items/file-input';
import Button from './button';

const PhotoForm = ({
    onSubmit,
}) => {
    return <form className='container photo-form'>
        <div className='row justify-content-center'>
            <div className='col-5'>
                <FileInput title="Photo D'Identité"></FileInput>
            </div>
            <div className='col-5'>
                <FileInput title="Scan"></FileInput>
            </div>
            <div className='col-10 mt-4'>
                <FileInput title="Radios"></FileInput>
            </div>
        </div>
        <div className='photo-form-btns'>
            <div className='col-auto'>
                <Button>Précédent</Button>
            </div>
            <div className='col-auto'>
                <Button>Suivant</Button>
            </div>
        </div>
    </form>
}


export default PhotoForm