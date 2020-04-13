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
        <input className='date-input-input' value={value} type='date' name= {name} max={getInputDate()} onChange={onChange} required/>
        }
    </div>
}
function getInputDate()
{
    var today = new Date ();
    const date = today.getDate() < 10 ? "0" + today.getDate() : today.getDate() ;
    const month = today.getMonth() < 9 ? "0" + (today.getMonth() + 1) : (today.getMonth() + 1);
    return today.getFullYear() + "-" + month + "-" + date
}
export default DateInput