import React from 'react'
import './text-field.css'


const TextField = ({
    title,
    type = 'text',
    required,
    onChange,
    value,
    name
}) => {
    type = ['text', 'number'].includes(type) ? type : 'text'
    return <div className='text-field'>
        <label className='text-field-title'>{title}</label>
        <input className='text-field-input' name={name}
            value={value} type={type}
            required onChange={onChange}></input>
    </div>
}


export default TextField