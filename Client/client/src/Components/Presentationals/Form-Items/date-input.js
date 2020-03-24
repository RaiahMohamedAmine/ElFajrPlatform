import React from 'react'
import './text-field.css'

const DateInput=({
    title,
    value,
    required
})=>{
    return <div className='date-input'>
        <label className='date-input-title'>{title}</label>
        <input className='date-input-input' type='date'/>
    </div>
}

export default DateInput