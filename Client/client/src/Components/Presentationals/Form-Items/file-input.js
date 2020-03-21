import React from 'react'
import './file-input.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const FileInput = ({
    title,
    placeholder,
}) => {
    return <div className='file-input'>
        <label className='file-input-title'>{title}</label>
        <input type='file' id={title}></input>
        <span className='file-input-content'>
            <span> <p>Les fichiers...</p></span>
            <label for={title}><p>Parcourir</p></label>
        </span>
    </div>
}

export default FileInput