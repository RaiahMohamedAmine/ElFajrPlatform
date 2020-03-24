import React from 'react'
import './select.css'

const Select = ({
    title,
    children,
    name,
    onChange,
    value,
}) => {
    return <div className='select'>
        <label>{title}</label>
        <select name={name} value={value}
            onChange={onChange}>
            {children}
        </select>
    </div>
}

export default Select