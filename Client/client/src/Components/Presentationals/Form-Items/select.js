import React from 'react'
import './select.css'

const Select = ({
    title,
    children,
    name,
    onChange,
    value,
    modify
}) => {
    return <div className='select'>
        <label>{title}</label>
        {
            modify?
            <select name={name} value={value} disabled
            onChange={onChange}>
            {children}
            </select> : 
            <select name={name} value={value}
            onChange={onChange}>
            {children}
            </select>
        }
    </div>
}

export default Select