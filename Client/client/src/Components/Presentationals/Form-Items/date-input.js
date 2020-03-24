import React from 'react'
import './text-field.css'

const DateInput=({
    title,
    name,
    onChange,
    modify,
    value,
    required
})=>{
    return <div className='date-input'>
        <label className='date-input-title'>{title}</label>
        {
            modify ?
        <input className='date-input-input' value={value} type='date' name= {name} onChange={onChange} disabled/> :
        <input className='date-input-input' value={value} type='date' name= {name} onChange={onChange}/>
        }
    </div>
}

export default DateInput