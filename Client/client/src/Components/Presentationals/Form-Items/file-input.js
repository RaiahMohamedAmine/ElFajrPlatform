import React from 'react'
import './file-input.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const FileInput = ({
    name,
    title,
    formdata
}) => {
    const [placeholder,setPlaceHolder]=React.useState('Aucun Fichier');
    const onChange = (e)=> {
        setPlaceHolder(e.target.value.split('\\')[2]);
       formdata[e.target.name] = e.target.files[0];
    }    
    return <div className='file-input'>
        <label className='file-input-title'>{title}</label>
        <input name={name} type='file' onChange={onChange} id={title}></input>
        <span className='file-input-content'>
            <span> <p>{placeholder}</p></span>
            <label for={title}><p>Parcourir</p></label>
        </span>
    </div>
}

export default FileInput