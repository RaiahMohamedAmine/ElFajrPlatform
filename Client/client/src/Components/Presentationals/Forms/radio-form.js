import React from 'react'
import './photo-form.css'
import '../Dialogs/rdv-dialog.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import FileInput from '../Form-Items/file-input';
import Button from '../Buttons/button';

const RadioForm=({
    onSubmit,
    goBack,
    formdata,
    onPhotoClick,
    modify=false
})=>{
    return <form className='container photo-form' onSubmit={onSubmit}>
    <div className='row justify-content-center'>
        <div className='col-10 mt-4'>
            <FileInput name='radio' title="Radios" formdata={formdata}></FileInput>
        </div>
        <div className='row justify-content-start rdv-list'>
        {
            modify? formdata.radio.map((r,i)=> <div className='col-3 photo' key={i}>
            <div style={{backgroundImage: "url(data:image/jpeg;base64," + r + ")" }} 
            onClick={e=> onPhotoClick("url(data:image/jpeg;base64," + r + ")")} />
        </div>) : null
        }
        </div>
    </div>
    <div className='row justify-content-end' style={{paddingBottom:"20px"}}>
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