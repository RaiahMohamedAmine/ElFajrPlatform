import React from 'react'
import './text-field.css'


const TextField = ({
    title,
    option='ancien',
    onChange,
}) => {
    return <div className='text-field'>
        <label className='text-field-title'>{title}</label>      
        <input className='text-field-input'
            type='password' pattern = {option==='ancien'? null : "[A-Za-z0-9]{6,}"}
            title = "Le mot de passe doit contenir au moins 6 caracters : minuscule, majuscules ou nombres. Exemple : FeDjr35" minLength="6"
            required onChange={onChange}></input>    
    </div>
}


export default TextField