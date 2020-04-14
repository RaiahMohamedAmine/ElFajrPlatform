import React from 'react'
import './photo-form.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import FileInput from '../Form-Items/file-input';
import Button from '../Buttons/button';

const RadioForm=({
    onSubmit,
    goBack,
    formdata,
    modify=false
})=>{
    return <form className='container photo-form' onSubmit={onSubmit}>
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
            <Button>{ modify ? "Modifier" :"Ajouter"}</Button>
        </div>
    </div>
</form>
}

export default RadioForm