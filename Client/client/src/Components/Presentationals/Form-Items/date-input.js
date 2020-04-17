import React from 'react'
import './text-field.css'

const DateInput=({
    title,
    name,
    onChange,
    modify,
    value,
    min,
    max,
})=>{
    return <div className='date-input'>
        <label className='date-input-title'>{title}</label>
        <input className='date-input-input' value={value} type='date' name= {name} min={min} max={max} onChange={onChange} required disabled={modify}/>
    </div>
}
export default DateInput