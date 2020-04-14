import React from 'react'
import './add-btn.css'

const AddBtn = ({
    onClick,
}) => <span className='add-btn' onClick={e => {
    onClick()
}}><p>+</p></span>

export default AddBtn