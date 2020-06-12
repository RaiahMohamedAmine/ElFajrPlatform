import React from 'react'
import './file-input.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const FileInput = ({
    name,
    title,
    formdata,
    required=false,
}) => {
    const [placeholder,setPlaceHolder]=React.useState('Aucun Fichier');
    const onChange = (e)=> {
        setPlaceHolder(e.target.value.split('\\')[2]);
        name==='radio'? formdata[name] = e.target.files : formdata[name] = e.target.files[0] ? e.target.files[0] : formdata[name]
    }    
    return <div className='file-input'>
        <label className='file-input-title'>{title}</label>
        <input name={name} type='file' onChange={onChange} id={title} multiple={name==='radio'} required={required}></input>
        <span className='file-input-content'>
            <span> <p>{placeholder}</p></span>
            <label htmlFor={title}><p>Parcourir</p></label>
        </span>
    </div>
}

export default FileInput