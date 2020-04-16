import React from 'react'
import './text-field.css'

const DateInput=({
    title,
    name,
    onChange,
    modify,
    value,
    rdv= false,
    required
})=>{
    return <div className='date-input'>
        <label className='date-input-title'>{title}</label>
        <input className='date-input-input' value={value} type='date' name= {name} min={rdv ? getInputDate () : null} max={rdv? null: getInputDate(false)} onChange={onChange} required disabled={modify}/>
    </div>
}
function getInputDate(tomorrow=true)
{
    var day = new Date ();
    tomorrow ? day.setDate (day.getDate()+1): tomorrow =false;
    const date = day.getDate() < 10 ? "0" + day.getDate() : day.getDate() ;
    const month = day.getMonth() < 9 ? "0" + (day.getMonth() + 1) : (day.getMonth() + 1);
    return day.getFullYear() + "-" + month + "-" + date
}
export default DateInput