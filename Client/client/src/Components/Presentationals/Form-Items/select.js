import React from 'react'
import './select.css'

const Select=({
    title,
    children,
    name,
    onChange
})=>{
    return <div className='select'>
        <label>{title}</label>
        <select name={name} onChange={onChange}>
          {children}
        </select>
    </div>
}

export default Select