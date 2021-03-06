import React from 'react'
import './text-field.css'


const TextField = ({
    title,
    type = 'text',
    required,
    onChange,
    value,
    name,
    modify =false,
}) => {
    type = ['text', 'tel','number','adresse'].includes(type) ? type : 'text'; 
    switch (type) {
        case 'number':
            return <div className='text-field'>
            <label className='text-field-title'>{title}</label>
                <input className='text-field-input' name={name} 
                    value={value} type='number' 
                    required onChange={onChange} disabled={modify}></input>    
            </div>
        case 'tel' : return <div className='text-field'>
            <label className='text-field-title'>{title}</label>
                <input className='text-field-input' name={name} 
                    value={value} type='text' pattern ="0[5-7][0-9]{8}" maxLength="11"
                    title="Veuillez fournir un numero de telephone valide. Aucun espace nest demandé"
                    required ={required} onChange={onChange}></input>    
            </div>
        case 'adresse': 
            return <div className='text-field'>
            <label className='text-field-title'>{title}</label>
            <input className='text-field-input' name={name} 
                value={value} type={type} pattern ="[a-zA-Z1-9°,é \s]{3,}"
                title="Veuillez fournir une adresse valide." 
                required onChange={onChange}></input>    
            </div>
            
        case 'text': return <div className='text-field'>
        <label className='text-field-title'>{title}</label>
        <input className='text-field-input' name={name} 
            value={value} type={type} pattern ="[a-zA-Z ]{3,}"
            title= "Veuillez respecter le format : minuscule, majuscule avec espaces, minimum 3 lettres"
            required={required} onChange={onChange} disabled={modify}></input>    
    </div>
    default :return null
    }
}


export default TextField